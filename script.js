// Renders CONTENT (from content.js) into the page, in whichever
// language is currently active. You shouldn't need to edit this
// file for normal content updates — see content.js instead.

const LANG_STORAGE_KEY = "openjury-lang";

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  const initialLang = (saved === "en" || saved === "tr") ? saved : "en";
  renderContent(initialLang);
  initLangToggle(initialLang);
  initScrollSpy();
  initGallerySlider();
});

function renderContent(lang) {
  const c = CONTENT[lang];
  const ui = c.ui;
  document.documentElement.lang = lang;

  // Nav
  setText("nav-aim", ui.navAim);
  setText("nav-timeline", ui.navTimeline);
  setText("nav-team", ui.navTeam);
  setText("nav-contact", ui.navContact);

  // Hero
  setText("hero-programme", c.programme);
  setText("hero-title", c.title);
  document.getElementById("hero-tagline").innerHTML = c.tagline; // supports <em> for emphasis
  setText("hero-year", c.currentYearLabel);
  setText("hero-phase", c.currentPhaseLabel);
  document.title = "OpenJury — " + c.title;

  // Aim
  const aimGrid = document.getElementById("aim-grid");
  aimGrid.innerHTML = "";
  c.aim.forEach(block => {
    const div = document.createElement("div");
    div.className = "aim-block";
    div.innerHTML = `<h3>${escapeHTML(block.heading)}</h3><p>${escapeHTML(block.body)}</p>`;
    aimGrid.appendChild(div);
  });

  // Timeline heading/lede/progress
  setText("timeline-heading", ui.timelineHeading);
  setText("timeline-lede", ui.timelineLede);
  const pct = Math.max(0, Math.min(100, Math.round((c.currentMonth / c.totalMonths) * 100)));
  document.getElementById("progress-bar").style.width = pct + "%";
  setText("progress-label", ui.monthLabel(c.currentMonth, c.totalMonths));

  // Timeline: each row pairs one phase with any updates linked to it
  // (via an update's relatedPhase matching the phase's code, e.g. "WP2").
  const timelineGrid = document.getElementById("timeline-grid");
  timelineGrid.innerHTML = "";
  c.phases.forEach((phase, i) => {
    const linkedUpdates = c.updates.filter(u => u.relatedPhase === phase.code);

    const row = document.createElement("div");
    row.className = "timeline-row";

    const updatesCell = document.createElement("div");
    updatesCell.className = "timeline-updates-cell";
    linkedUpdates.forEach(update => {
      const card = document.createElement("div");
      card.className = "update-card";
      const subtitleHTML = update.subtitle
        ? `<p class="update-subtitle">${escapeHTML(update.subtitle)}</p>`
        : "";
      card.innerHTML = `
        <p class="update-title">${escapeHTML(update.title)}</p>
        ${subtitleHTML}
        <p class="update-body">${escapeHTML(update.body)}</p>`;
      updatesCell.appendChild(card);
    });

    const phaseEl = document.createElement("div");
    phaseEl.className = "phase phase-" + phase.status;
    phaseEl.innerHTML = `
      <div class="phase-marker" aria-hidden="true">
        <span class="phase-dot"></span>
        <span class="phase-num">${String(i + 1).padStart(2, "0")}</span>
      </div>
      <div class="phase-content">
        <div class="phase-heading">
          <h3>${escapeHTML(phase.title)}</h3>
          <span class="phase-status-tag">${statusLabel(phase.status, ui)}</span>
        </div>
        <p class="phase-months">${escapeHTML(phase.months)}</p>
        <p class="phase-body">${escapeHTML(phase.body)}</p>
      </div>`;

    row.appendChild(updatesCell);
    row.appendChild(phaseEl);
    timelineGrid.appendChild(row);
  });

  // Team
  setText("team-heading", ui.teamHeading);
  const teamGrid = document.getElementById("team-grid");
  teamGrid.innerHTML = "";
  c.team.forEach(member => {
    const div = document.createElement("div");
    div.className = "team-card";
    const emailHTML = member.email
      ? `<a href="mailto:${escapeHTML(member.email)}">${escapeHTML(member.email)}</a>`
      : "";
    const photoHTML = member.photo
      ? `<img class="team-photo" src="${escapeHTML(member.photo)}" alt="${escapeHTML(member.name)}"${member.photoPosition ? ` style="object-position: ${escapeHTML(member.photoPosition)};"` : ""}>`
      : "";
    div.innerHTML = `
      ${photoHTML}
      <p class="team-role">${escapeHTML(member.role)}</p>
      <p class="team-name">${escapeHTML(member.name)}</p>
      ${emailHTML}`;
    teamGrid.appendChild(div);
  });

  // Gallery
  setText("gallery-heading", ui.galleryHeading);
  const galleryGrid = document.getElementById("gallery-grid");
  galleryGrid.innerHTML = "";
  if (c.gallery.length === 0) {
    galleryGrid.innerHTML = `<p class="gallery-empty">${escapeHTML(ui.galleryEmpty)}</p>`;
  } else {
    c.gallery.forEach(photo => {
      const fig = document.createElement("figure");
      fig.className = "gallery-item";
      fig.innerHTML = `<img src="${escapeHTML(photo.src)}" alt="${escapeHTML(photo.caption || "")}" loading="lazy">
        ${photo.caption ? `<figcaption>${escapeHTML(photo.caption)}</figcaption>` : ""}`;
      galleryGrid.appendChild(fig);
    });
  }
  galleryIndex = 0;
  updateGalleryPosition();

  // Footer
  setText("footer-programme", c.programme);
  setText("footer-pi", c.footerPI);
  const footerEmail = document.getElementById("footer-email");
  footerEmail.textContent = c.footerEmail;
  footerEmail.href = "mailto:" + c.footerEmail;
  setText("footer-updated-prefix", ui.footerUpdatedPrefix);
  setText("footer-updated", c.lastUpdated);
  setText("footer-note-text", ui.footerNote);
}

function initLangToggle(initialLang) {
  const buttons = document.querySelectorAll(".lang-btn");
  setActiveLangButton(initialLang);

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      localStorage.setItem(LANG_STORAGE_KEY, lang);
      renderContent(lang);
      setActiveLangButton(lang);
    });
  });
}

function setActiveLangButton(lang) {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

// Bolds the nav link for whichever section is currently in view.
// Lets the arrow buttons step through the gallery one photo at a time.
// currentIndex lives outside renderContent so it survives re-renders,
// but gets reset to the first photo whenever content is (re)rendered
// (e.g. switching language).
let galleryIndex = 0;

function updateGalleryPosition() {
  const track = document.getElementById("gallery-grid");
  const prevBtn = document.getElementById("gallery-prev");
  const nextBtn = document.getElementById("gallery-next");
  if (!track || !prevBtn || !nextBtn) return;

  const count = track.children.length;
  galleryIndex = Math.max(0, Math.min(galleryIndex, count - 1));
  track.style.transform = `translateX(-${galleryIndex * 100}%)`;
  prevBtn.disabled = galleryIndex === 0;
  nextBtn.disabled = galleryIndex >= count - 1;
}

// Attaches the button listeners once; safe to call multiple times since
// it always clicks through the same two static buttons.
function initGallerySlider() {
  const prevBtn = document.getElementById("gallery-prev");
  const nextBtn = document.getElementById("gallery-next");
  if (!prevBtn || !nextBtn || prevBtn.dataset.bound) return;

  prevBtn.addEventListener("click", () => { galleryIndex--; updateGalleryPosition(); });
  nextBtn.addEventListener("click", () => { galleryIndex++; updateGalleryPosition(); });
  prevBtn.dataset.bound = "true";
}

function initScrollSpy() {
  const navLinks = Array.from(document.querySelectorAll(".nav-links a"));
  if (navLinks.length === 0) return;

  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (sections.length === 0) return;

  const setActive = (id) => {
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === "#" + id);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, {
    // Counts a section "in view" once it crosses the middle of the screen,
    // so the nav updates a bit before the section fully fills the viewport.
    rootMargin: "-45% 0px -50% 0px",
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function statusLabel(status, ui) {
  if (status === "done") return ui.statusDone;
  if (status === "current") return ui.statusCurrent;
  return ui.statusUpcoming;
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// Renders CONTENT (from content.js) into the page.
// You shouldn't need to edit this file for normal content updates.

document.addEventListener("DOMContentLoaded", () => {
  const c = CONTENT;

  // Hero
  setText("hero-programme", c.programme);
  setText("hero-title", c.title);
  setText("hero-tagline", c.tagline);
  setText("hero-year", c.currentYearLabel);
  setText("hero-phase", c.currentPhaseLabel);
  document.title = "OpenJury — " + c.title;

  // Aim
  const aimGrid = document.getElementById("aim-grid");
  c.aim.forEach(block => {
    const div = document.createElement("div");
    div.className = "aim-block";
    div.innerHTML = `<h3>${escapeHTML(block.heading)}</h3><p>${escapeHTML(block.body)}</p>`;
    aimGrid.appendChild(div);
  });

  // Timeline progress
  const pct = Math.max(0, Math.min(100, Math.round((c.currentMonth / c.totalMonths) * 100)));
  document.getElementById("progress-bar").style.width = pct + "%";
  setText("progress-label", `Month ${c.currentMonth} of ${c.totalMonths}`);

  // Phases
  const phasesList = document.getElementById("phases-list");
  c.phases.forEach((phase, i) => {
    const li = document.createElement("li");
    li.className = "phase phase-" + phase.status;
    li.innerHTML = `
      <div class="phase-marker" aria-hidden="true">
        <span class="phase-dot"></span>
        <span class="phase-num">${String(i + 1).padStart(2, "0")}</span>
      </div>
      <div class="phase-content">
        <div class="phase-heading">
          <h3>${escapeHTML(phase.title)}</h3>
          <span class="phase-status-tag">${statusLabel(phase.status)}</span>
        </div>
        <p class="phase-months">${escapeHTML(phase.months)}</p>
        <p class="phase-body">${escapeHTML(phase.body)}</p>
      </div>`;
    phasesList.appendChild(li);
  });

  // Team
  const teamGrid = document.getElementById("team-grid");
  c.team.forEach(member => {
    const div = document.createElement("div");
    div.className = "team-card";
    const emailHTML = member.email
      ? `<a href="mailto:${escapeHTML(member.email)}">${escapeHTML(member.email)}</a>`
      : "";
    div.innerHTML = `
      <p class="team-role">${escapeHTML(member.role)}</p>
      <p class="team-name">${escapeHTML(member.name)}</p>
      ${emailHTML}`;
    teamGrid.appendChild(div);
  });

  // Outputs
  const outputsList = document.getElementById("outputs-list");
  c.outputs.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    outputsList.appendChild(li);
  });

  // Gallery
  const galleryGrid = document.getElementById("gallery-grid");
  if (c.gallery.length === 0) {
    galleryGrid.innerHTML = `<p class="gallery-empty">No photos added yet.</p>`;
  } else {
    c.gallery.forEach(photo => {
      const fig = document.createElement("figure");
      fig.className = "gallery-item";
      fig.innerHTML = `<img src="${escapeHTML(photo.src)}" alt="${escapeHTML(photo.caption || "")}" loading="lazy">
        ${photo.caption ? `<figcaption>${escapeHTML(photo.caption)}</figcaption>` : ""}`;
      galleryGrid.appendChild(fig);
    });
  }

  // Footer
  setText("footer-programme", c.programme);
  setText("footer-pi", c.footerPI);
  const footerEmail = document.getElementById("footer-email");
  footerEmail.textContent = c.footerEmail;
  footerEmail.href = "mailto:" + c.footerEmail;
  setText("footer-updated", c.lastUpdated);
});

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function statusLabel(status) {
  if (status === "done") return "Completed";
  if (status === "current") return "In progress";
  return "Upcoming";
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

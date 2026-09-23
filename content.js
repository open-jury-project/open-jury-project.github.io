/*
  ============================================================
  OpenJury site content — English & Turkish
  ============================================================
  This is the ONLY file most updates need. Everything here is
  plain text or simple lists — edit the values between quotes
  and save. See README.md for a step-by-step guide.

  The site now has two languages. Content is split into
  CONTENT.en and CONTENT.tr — two full copies of the same
  structure. When you update something (a phase status, a new
  team member, a new update), make the SAME change in BOTH
  places so the two languages stay in sync. The person's chosen
  language toggle (EN/TR) decides which one is shown; English
  is the default.

  Do not remove commas or quote marks. If you're not sure,
  copy this file's structure exactly and just swap the text.
  ============================================================
*/

const CONTENT = {

  // ============================================================
  // ENGLISH
  // ============================================================
  en: {

    // ---------- UI chrome (nav, section titles, labels) ----------
    ui: {
      navAim: "Aim",
      navTimeline: "Timeline",
      navTeam: "Team",
      navContact: "Contact",
      timelineHeading: "Project phases",
      timelineLede: "The project runs over 36 months, organized into nine work packages. Progress below reflects where things stand right now.",
      monthLabel: (current, total) => `Month ${current} of ${total}`,
      teamHeading: "Team",
      galleryHeading: "From the project",
      galleryEmpty: "No photos added yet.",
      footerUpdatedPrefix: "Last updated",
      footerNote: "This is a project documentation site, not an official TÜBİTAK publication.",
      statusDone: "Completed",
      statusCurrent: "In progress",
      statusUpcoming: "Upcoming"
    },

    // ---------- Top banner ----------
    programme: "TÜBİTAK 1001/125K884 Research Project · Atılım University",
    title: "Assessment and Evaluation Model for Industrial Design Juries",
    // Wrap a phrase in <em>...</em> to highlight it, like below.
    tagline: "Turning design juries from subjective grading into a <em>transparent, evidence-based</em>, student-centered process — from expert consensus to a working digital application.",

    // Update these two as the project moves forward
    currentYearLabel: "Year 1 of 3",
    currentPhaseLabel: "Currently in: Delphi Study",

    // Used for the progress bar under Timeline. 36-month project.
    totalMonths: 36,
    currentMonth: 12,

    // ---------- Why this project (3 short blocks) ----------
    aim: [
      {
        heading: "The problem",
        body: "Design juries are central to how project-based learning is assessed in industrial design education, but they tend to focus on grading the final presentation rather than supporting the student's learning process. Feedback is often subjective, inconsistent between jurors, and hard for students to act on."
      },
      {
        heading: "The approach",
        body: "This project develops a student-centered assessment model built on structured expert consensus (the Delphi method), then turns that model into a mobile-friendly, web-based digital application — designed with a professional partner and tested in real jury settings."
      },
      {
        heading: "The impact",
        body: "The goal is a jury process that is more transparent and consistent, and that gives students clear, actionable feedback. Beyond industrial design, the model is intended to extend to other design disciplines, and a patent application is planned for the resulting digital tool."
      }
    ],

    // ---------- Updates ----------
    // Pin one to a phase using "relatedPhase" (must match a phase "code"
    // below, e.g. "WP2"). "subtitle" is optional — delete the whole line
    // if you don't need one.
    updates: [
      {
        title: "UTAK 2026 Conference",
        subtitle: "September 2026",
        body: "Presented early findings from the Delphi study at UTAK 2026.",
        relatedPhase: "WP2"
      },
      {
        title: "Article accepted",
        subtitle: "August 2026",
        body: "The study focusing on the literature and a SWOT analysis on jury-based assessments is accepted by the International Academic Conference on Teaching, Learning and Education.",
        relatedPhase: "WP2"
      },
    ],

    // ---------- Project phases (work packages) ----------
    // status: "done" | "current" | "upcoming"
    // "code" must stay the same across both languages — it's how
    // updates (above) and phases stay linked.
    phases: [
      { code: "WP1", title: "Status Analysis", months: "Months 1–5", status: "done",
        body: "Reviewing existing assessment systems used in industrial design juries, mapping the strengths and weaknesses of current methods, and drafting the first round of Delphi questions." },
      { code: "WP2", title: "Delphi Study", months: "Months 6–12", status: "current",
        body: "Systematically collecting expert opinion from industrial design professionals through multiple Delphi rounds to define the criteria and measures a jury model should use." },
      { code: "WP3", title: "Model Development", months: "Months 13–17", status: "upcoming",
        body: "Turning the Delphi findings into a rubric-based assessment model, integrating digital and AI-supported tools to handle different levels and types of design projects." },
      { code: "WP4", title: "UX Design", months: "Months 15–23", status: "upcoming",
        body: "Designing the user experience and information architecture for a digital interface that puts the model into practice." },
      { code: "WP5", title: "UI & Software", months: "Months 20–25", status: "upcoming",
        body: "Building a mobile-friendly, web-based application on a no-code platform, working with a professional design and software partner." },
      { code: "WP6", title: "Pilot Study", months: "Months 25–26", status: "upcoming",
        body: "Testing the model in pilot jury sessions to check first-stage results and lay the groundwork for validity and reliability analysis." },
      { code: "WP7", title: "Experimental Study", months: "Months 26–34", status: "upcoming",
        body: "Running controlled experiments in real jury settings and comparing outcomes with the traditional method to measure the model's effect on students' learning experience." },
      { code: "WP8", title: "Refinement", months: "Months 33–34", status: "upcoming",
        body: "Improving the application and the user experience based on what the experimental study shows." },
      { code: "WP9", title: "Dissemination", months: "Months 33–36", status: "upcoming",
        body: "Sharing outcomes through academic publications, national and international conferences, workshops, and a patent application for the digital application." }
    ],

    // ---------- Team ----------
    // email is optional — leave as "" to hide it.
    // photo is optional too — leave as "" to show no photo (text-only
    // card, like before). To add one: put the image file in
    // assets/team/ and set photo to "assets/team/filename.jpg" — same
    // path works in both languages since it's the same file.
    team: [
      { role: "Principal Investigator", name: "Assoc. Prof. Dr. Seçil Toros", email: "", photo: "" },
      { role: "Advisor", name: "Prof. Dr. Gülay Hasdoğan", email: "", photo: "" },
      { role: "Researcher", name: "Assoc. Prof. Dr. Engin Kapkın", email: "", photo: "" },
      { role: "Researcher", name: "Asst. Prof. Dr. Elif Öztürk", email: "", photo: "" },
      { role: "MSc Scholar", name: "Research Assistant Şule Ak", email: "", photo: "" },
      { role: "PhD Scholar", name: "Dr. Yaprak Deniz Yurt", email: "", photo: "" }
    ],

    // ---------- Planned outputs (not currently shown on the page,
    // kept here in case you bring the section back) ----------
    outputs: [
      "Peer-reviewed academic publications, national and international",
      "A web-based application to be used in jury assessments",
      "Workshops and meetings with the design education and professional community"
    ],

    // ---------- Gallery ----------
    // "src" is the same file in both languages — only translate "caption".
    gallery: [
      { src: "assets/gallery/Photo1.jpg", caption: "Team meeting, January 2026" },
      { src: "assets/gallery/Photo2.jpeg", caption: "Team meeting, July 2026" },
      { src: "assets/gallery/Photo3.jpeg", caption: "Workshop at UTAK 2026" },
      { src: "assets/gallery/Photo4.jpeg", caption: "Team at UTAK 2026, METU" }
    ],

    // ---------- Footer ----------
    footerPI: "Principal Investigator — Assoc. Prof. Dr. Seçil Toros",
    footerEmail: "secil.toros@atilim.edu.tr",
    lastUpdated: "September 2026"
  },

  // ============================================================
  // TÜRKÇE
  // ============================================================
  tr: {

    ui: {
      navAim: "Amaç",
      navTimeline: "Zaman Çizelgesi",
      navTeam: "Ekip",
      navContact: "İletişim",
      timelineHeading: "Proje Aşamaları",
      timelineLede: "Proje, dokuz iş paketine bölünmüş olarak 36 ay sürmektedir. Aşağıdaki ilerleme durumu güncel duruma göredir.",
      monthLabel: (current, total) => `Ay ${current} / ${total}`,
      teamHeading: "Ekip",
      galleryHeading: "Projeden Kareler",
      galleryEmpty: "Henüz fotoğraf eklenmedi.",
      footerUpdatedPrefix: "Son güncelleme:",
      footerNote: "Bu bir proje dokümantasyon sitesidir; resmi bir TÜBİTAK yayını değildir.",
      statusDone: "Tamamlandı",
      statusCurrent: "Devam ediyor",
      statusUpcoming: "Yaklaşan"
    },

    programme: "TÜBİTAK 1001/125K884 Araştırma Projesi · Atılım Üniversitesi",
    title: "Endüstriyel Tasarım Jürileri için Ölçme ve Değerlendirme Modeli",
    tagline: "Tasarım jürilerini öznel notlandırmadan <em>şeffaf, kanıta dayalı</em> ve öğrenci merkezli bir sürece dönüştürüyoruz — uzman görüş birliğinden çalışan bir dijital uygulamaya.",

    currentYearLabel: "Yıl 1 / 3",
    currentPhaseLabel: "Şu anki aşama: Delphi Çalışması",

    totalMonths: 36,
    currentMonth: 12,

    aim: [
      {
        heading: "Sorun",
        body: "Tasarım jürileri, endüstriyel tasarım eğitiminde proje tabanlı öğrenmenin değerlendirilmesinde merkezi bir role sahiptir; ancak genellikle öğrencinin öğrenme sürecini desteklemek yerine yalnızca son sunumun notlandırılmasına odaklanır. Geri bildirimler çoğu zaman özneldir, jüri üyeleri arasında tutarsızdır ve öğrencilerin bu geri bildirimlere göre hareket etmesi zordur."
      },
      {
        heading: "Yaklaşım",
        body: "Bu proje, yapılandırılmış uzman görüş birliğine (Delphi yöntemi) dayanan öğrenci merkezli bir değerlendirme modeli geliştirmekte, ardından bu modeli profesyonel bir iş ortağıyla tasarlanan ve gerçek jüri ortamlarında test edilen, mobil uyumlu, web tabanlı bir dijital uygulamaya dönüştürmektedir."
      },
      {
        heading: "Etki",
        body: "Amaç, daha şeffaf ve tutarlı; öğrencilere net ve uygulanabilir geri bildirim sunan bir jüri sürecidir. Modelin, endüstriyel tasarımın ötesinde diğer tasarım disiplinlerine de genişletilmesi hedeflenmekte olup, ortaya çıkan dijital araç için bir patent başvurusu planlanmaktadır."
      }
    ],

    updates: [
      {
        title: "UTAK 2026 Konferansı",
        subtitle: "Eylül 2026",
        body: "Delphi çalışmasının ilk bulguları UTAK 2026'da sunuldu.",
        relatedPhase: "WP2"
      },
      {
        title: "Makale kabul aldı!",
        subtitle: "Ağustos 2026",
        body: "Jüri temelli değerlendirmelere ilişkin literatür ve SWOT analizine odaklanan çalışma, International Academic Conference on Teaching, Learning and Education tarafından kabul edildi!",
        relatedPhase: "WP2"
      },
    ],

    phases: [
      { code: "WP1", title: "Durum Analizi", months: "Aylar 1–5", status: "done",
        body: "Endüstriyel tasarım jürilerinde kullanılan mevcut değerlendirme sistemlerinin incelenmesi, güncel yöntemlerin güçlü ve zayıf yönlerinin belirlenmesi ve ilk tur Delphi sorularının hazırlanması." },
      { code: "WP2", title: "Delphi Çalışması", months: "Aylar 6–12", status: "current",
        body: "Bir jüri modelinin kullanması gereken ölçütleri ve ölçümleri belirlemek amacıyla, endüstriyel tasarım uzmanlarından çok turlu Delphi çalışmasıyla sistematik olarak görüş toplanması." },
      { code: "WP3", title: "Modelin Geliştirilmesi", months: "Aylar 13–17", status: "upcoming",
        body: "Delphi bulgularının, farklı düzey ve türdeki tasarım projelerini ele alabilecek, dijital ve yapay zekâ destekli araçların entegre edildiği rubrik tabanlı bir değerlendirme modeline dönüştürülmesi." },
      { code: "WP4", title: "UX Tasarımı", months: "Aylar 15–23", status: "upcoming",
        body: "Modeli uygulamaya geçiren dijital arayüz için kullanıcı deneyiminin ve bilgi mimarisinin tasarlanması." },
      { code: "WP5", title: "Arayüz ve Yazılım", months: "Aylar 20–25", status: "upcoming",
        body: "Profesyonel bir tasarım ve yazılım iş ortağıyla birlikte, kodsuz bir platform üzerinde mobil uyumlu, web tabanlı bir uygulamanın geliştirilmesi." },
      { code: "WP6", title: "Pilot Çalışma", months: "Aylar 25–26", status: "upcoming",
        body: "İlk aşama sonuçlarını kontrol etmek ve geçerlik-güvenirlik analizine zemin hazırlamak amacıyla modelin pilot jüri oturumlarında test edilmesi." },
      { code: "WP7", title: "Deneysel Çalışma", months: "Aylar 26–34", status: "upcoming",
        body: "Modelin öğrencilerin öğrenme deneyimi üzerindeki etkisini ölçmek amacıyla gerçek jüri ortamlarında kontrollü deneyler yürütülmesi ve sonuçların geleneksel yöntemle karşılaştırılması." },
      { code: "WP8", title: "İyileştirme", months: "Aylar 33–34", status: "upcoming",
        body: "Deneysel çalışmadan elde edilen bulgular doğrultusunda uygulamanın ve kullanıcı deneyiminin iyileştirilmesi." },
      { code: "WP9", title: "Yaygınlaştırma", months: "Aylar 33–36", status: "upcoming",
        body: "Sonuçların akademik yayınlar, ulusal ve uluslararası konferanslar, çalıştaylar ve dijital uygulama için yapılacak bir patent başvurusu yoluyla paylaşılması." }
    ],

    team: [
      { role: "Proje Yürütücüsü", name: "Doç. Dr. Seçil Toros", email: "", photo: "" },
      { role: "Danışman", name: "Prof. Dr. Gülay Hasdoğan", email: "", photo: "" },
      { role: "Araştırmacı", name: "Doç. Dr. Engin Kapkın", email: "", photo: "" },
      { role: "Araştırmacı", name: "Dr. Öğr. Üyesi Elif Öztürk", email: "", photo: "" },
      { role: "Yüksek Lisans Bursiyeri", name: "Arş. Gör. Şule Ak", email: "", photo: "" },
      { role: "Doktora Bursiyeri", name: "Dr. Yaprak Deniz Yurt", email: "", photo: "" }
    ],

    outputs: [
      "Ulusal ve uluslararası hakemli akademik yayınlar",
      "Jüri değerlendirmelerinde kullanılacak web tabanlı bir uygulama",
      "Tasarım eğitimi ve meslek camiasıyla çalıştaylar ve toplantılar"
    ],

    gallery: [
      { src: "assets/gallery/Photo1.jpg", caption: "Ekip toplantısı, Ocak 2026" },
      { src: "assets/gallery/Photo2.jpeg", caption: "Ekip toplantısı, Temmuz 2026" },
      { src: "assets/gallery/Photo3.jpeg", caption: "UTAK 2026'da çalıştay" },
      { src: "assets/gallery/Photo4.jpeg", caption: "UTAK 2026'da ekip, ODTÜ" }
    ],

    footerPI: "Proje Yürütücüsü — Doç. Dr. Seçil Toros",
    footerEmail: "secil.toros@atilim.edu.tr",
    lastUpdated: "Eylül 2026"
  }
};

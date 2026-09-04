/*
  ============================================================
  OpenJury site content
  ============================================================
  This is the ONLY file most updates need. Everything here is
  plain text or simple lists — edit the values between quotes
  and save. See README.md for a step-by-step guide.

  Do not remove commas or quote marks. If you're not sure,
  copy this file's structure exactly and just swap the text.
  ============================================================
*/

const CONTENT = {

  // ---------- Top banner ----------
  programme: "TÜBİTAK 1001 Research Project · Atılım University",
  title: "Assessment and Evaluation Model for Industrial Design Juries",
  tagline: "Turning design juries from subjective grading into a transparent, evidence-based, student-centered process — from expert consensus to a working digital application.",

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

  // ---------- Project phases (work packages) ----------
  // status: "done" | "current" | "upcoming"
  phases: [
    {
      code: "WP1",
      title: "Status Analysis",
      months: "Months 1–5",
      status: "done",
      body: "Reviewing existing assessment systems used in industrial design juries, mapping the strengths and weaknesses of current methods, and drafting the first round of Delphi questions."
    },
    {
      code: "WP2",
      title: "Delphi Study",
      months: "Months 6–12",
      status: "current",
      body: "Systematically collecting expert opinion from industrial design professionals through multiple Delphi rounds to define the criteria and measures a jury model should use."
    },
    {
      code: "WP3",
      title: "Model Development",
      months: "Months 13–17",
      status: "upcoming",
      body: "Turning the Delphi findings into a rubric-based assessment model, integrating digital and AI-supported tools to handle different levels and types of design projects."
    },
    {
      code: "WP4",
      title: "UX Design",
      months: "Months 15–23",
      status: "upcoming",
      body: "Designing the user experience and information architecture for a digital interface that puts the model into practice."
    },
    {
      code: "WP5",
      title: "UI & Software",
      months: "Months 20–25",
      status: "upcoming",
      body: "Building a mobile-friendly, web-based application on a no-code platform, working with a professional design and software partner."
    },
    {
      code: "WP6",
      title: "Pilot Study",
      months: "Months 25–26",
      status: "upcoming",
      body: "Testing the model in pilot jury sessions to check first-stage results and lay the groundwork for validity and reliability analysis."
    },
    {
      code: "WP7",
      title: "Experimental Study",
      months: "Months 26–34",
      status: "upcoming",
      body: "Running controlled experiments in real jury settings and comparing outcomes with the traditional method to measure the model's effect on students' learning experience."
    },
    {
      code: "WP8",
      title: "Refinement",
      months: "Months 33–34",
      status: "upcoming",
      body: "Improving the application and the user experience based on what the experimental study shows."
    },
    {
      code: "WP9",
      title: "Dissemination",
      months: "Months 33–36",
      status: "upcoming",
      body: "Sharing outcomes through academic publications, national and international conferences, workshops, and a patent application for the digital application."
    }
  ],

  // ---------- Team ----------
  // email is optional — leave as "" to hide it
  team: [
    { role: "Principal Investigator", name: "Doç. Dr. Seçil Toros", email: "" },
    { role: "Advisor", name: "Prof. Dr. Gülay Hasdoğan", email: "" },
    { role: "Researcher", name: "Doç. Dr. Engin Kapkın", email: "" },
    { role: "Researcher", name: "Dr. Öğr. Üyesi Elif Öztürk", email: "" },
    { role: "MSc Scholar", name: "Arş. Gör. Şule Ak", email: "" },
    { role: "PhD Scholar", name: "Dr. Yaprak Deniz Yurt", email: "" }
  ],

  // ---------- Planned outputs ----------
  outputs: [
    "Peer-reviewed academic publications, national and international",
    "A web-based application to be used in jury assessments",
    "Workshops and meetings with the design education and professional community"
  ],

  // ---------- Gallery ----------
  // Add photos by placing a file in assets/gallery/ and adding a line here:
  // { src: "assets/gallery/photo1.jpg", caption: "Team meeting, March 2026" }
  gallery: [],

  // ---------- Footer ----------
  footerPI: "Principal Investigator — Doç. Dr. Seçil Toros",
  footerEmail: "secil.toros@atilim.edu.tr",
  lastUpdated: "September 2026"
};

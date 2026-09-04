# OpenJury project website

A one-page site for the TÜBİTAK 1001 project *"Assessment and Evaluation
Model for Industrial Design Juries."* Free to host, no domain required.

Live structure: Hero → Why this project → Timeline → Team → Outputs →
Photos → Contact.

```
openjury-site/
├── index.html        the page structure (rarely needs editing)
├── styles.css         the visual design (colors, fonts, layout)
├── content.js          ← EDIT THIS for text, phases, team, outputs
├── script.js           renders content.js into the page (rarely needs editing)
└── assets/
    ├── logo-full.png   your full OpenJury logo
    ├── mark.png        the cube mark only (used in nav/footer)
    ├── favicon.png      browser tab icon
    └── gallery/         put team-meeting photos here
```

---

## 1. Put it on the web with GitHub Pages (free, no domain needed)

You'll need a free GitHub account. If your team doesn't have one yet,
create it at github.com — either a personal account or an
"organization" account named `openjury` if you want the project to
live independently of one person's account.

**Steps:**

1. Go to github.com → **New repository**.
   - If you created an `openjury` organization/account, name the repo
     `openjury.github.io` — this gives you the cleanest possible URL:
     `https://openjury.github.io`
   - If you're using a personal account instead, name the repo
     anything (e.g. `openjury-site`) — your site will then live at
     `https://yourusername.github.io/openjury-site`
2. Upload all the files in this folder (keep the `assets` folder
   structure intact) — either drag-and-drop them in the GitHub web
   interface ("Add file" → "Upload files"), or if you're comfortable
   with git:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a
   branch", branch `main`, folder `/ (root)`. Save.
5. Wait a minute or two, then your site will be live at the URL GitHub
   shows on that same Pages settings screen.

Any time you upload changed files (or push with git), the live site
updates automatically within a minute — no republishing step.

---

## 2. Editing content — no coding required

Almost everything you'll want to change lives in **`content.js`**.
Open it in any text editor (even GitHub's own web editor: click the
file on github.com, then the pencil ✏️ icon).

It's a list of labelled text fields, for example:

```js
title: "Assessment and Evaluation Model for Industrial Design Juries",
```

To change something, edit the text **between the quote marks** and
save. A few things to keep in mind:
- Keep the quote marks `"..."` around text.
- Keep the commas `,` at the end of lines.
- If a piece of text itself contains a `"`, either avoid it or ask
  Claude to help — a stray quote mark will break the page.

### Updating project progress
As phases complete, open `content.js` and:
- Change `status: "upcoming"` to `status: "current"` for the phase
  you're starting, and to `status: "done"` for ones you've finished.
- Update `currentMonth` to the current month number (out of 36).
- Update `currentYearLabel` and `currentPhaseLabel` at the top.

### Adding team-meeting photos
1. Save your photos into `assets/gallery/` (keep file sizes
   reasonable — under ~1MB each loads faster).
2. In `content.js`, find the `gallery: []` line and add an entry per
   photo:
   ```js
   gallery: [
     { src: "assets/gallery/kickoff-meeting.jpg", caption: "Kickoff meeting, March 2025" },
     { src: "assets/gallery/delphi-round1.jpg", caption: "Reviewing round 1 Delphi results" }
   ],
   ```

### Adding or editing team members
Copy an existing entry in the `team:` list and change the details.
Leave `email: ""` empty to hide the email line for that person.

### Publications / outputs list
Just add or remove lines inside the `outputs:` list — each line in
quotes becomes one bullet point.

---

## 3. If you'd rather not edit code at all

You can always paste the contents of `content.js` into a Claude
conversation along with what you want changed (e.g. "mark WP3 as
current and add these two publications to the outputs list") and ask
for an updated version to paste back in — no local setup needed.

---

## 4. Design notes

- Colors and fonts are pulled from the OpenJury logo (deep slate teal
  + a warm amber accent for status highlights), paired with Fraunces
  (headlines) and Inter (body text) — both loaded free from Google
  Fonts, no license cost.
- The site is a single static page — no server, database, or backend
  costs, ever.
- If you outgrow GitHub Pages or want a custom domain later (e.g.
  `openjury.org`), you can point a purchased domain at the same
  GitHub Pages site without rebuilding anything.

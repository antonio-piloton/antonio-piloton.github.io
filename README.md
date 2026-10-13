# Academic, Research & Technology Portfolio — Antonio Jr. Piloton

A professional, fully responsive personal portfolio website designed for **Antonio Jr. Luib Piloton**, Assistant Professor III at **Agusan del Sur State University (ADSSU)**, Doctor of Information Technology (DIT) - Completed Academic Requirements (CAR) at **St. Paul University Philippines (SPUP)**, and full-stack software engineer.

The website features a **Canva-inspired creative academic aesthetic** combining **Emerald Green (`#0B5A3B`, `#073B2A`)** and **Golden Yellow (`#F5C518`, `#E7C64A`)** with organic aurora glow meshes, floating sticker badges, bento grid structures, and full mobile responsiveness.

---

## 🎓 Verified Academic Credentials & Profile (From Official Civil Service PDS)

- **Doctor of Information Technology (DIT) - CAR**
  *St. Paul University Philippines (SPUP), Tuguegarao City* — 2023 – Present • **Completed Academic Requirements (CAR)**
- **Master in Information Technology (MIT)**
  *Surigao del Norte State University (SNSU)* — 2020 – 2023 • **Best Capstone Project Awardee** 🏆
- **Bachelor of Science in Information Technology (BSIT)**
  *Surigao State College of Technology (now SNSU)* — 2014 – 2020 • Conferred 2020
- **Secondary Education:**
  *Tubajon National High School, Dinagat Islands* — 2010 – 2014
- **Current Academic Appointment:**
  *Assistant Professor III*, College of Computing and Information Sciences, **Agusan del Sur State University (ADSSU)**

---

## 🏅 Verified Professional Memberships & Organizations

- **Philippine Institute of 21st Century Educators Inc.** (Active Member)
- **Association of Caraga Educators for Geology, Architecture, Technology and Engineering** (Active Member)
- **Philippine Society of Information Technology Educators (PSITE)** (Member / Contest Participant)

---

## 📜 Verified Learning & Development (L&D) & Certifications

- **Data Driven Governance for Executive Leadership** — DICT (2025)
- **Learn ChatGPT for Government Workforce (Ethically)** — DICT (2025)
- **A.Ignite: Fueling Filipino Minds with Future of Global Tech** — NVIDIA AI Academy Philippines (2025)
- **JavaScript Essentials 1 & Python Essentials 1** — Cisco Networking Academy (2025)
- **Computer Hardware Basics** — Cisco Networking Academy (2025)
- **UI/UX Design & App Development for Startups** — DICT (2025)
- **Programming for Beginners Using Python** — DOST - Caraga (2024)
- **Futures Thinking: SNSU Digitalization CapDev** — Surigao del Norte State University (2024)
- **In-House Seminar-Workshop on Basic Records and Archives Management (BRAM)** — SNSU (2024)

---

## 🌟 Highlights & Key Features

- **Canva Creative Aesthetic:** Organic aurora background glows, floating pill navigation bar, floating sticker badges around portrait (`🎓 Asst. Professor III`, `⭐ DIT - CAR @ SPUP`, `✨ ADSSU • IT Educator & Developer`), and friendly tactile rounded bento cards.
- **100% Mobile Responsive:** Tested down to 360px and 320px screens with fluid clamping typography (`clamp()`), sliding off-canvas drawer navigation, touch-friendly tap targets (&ge; 44px), swipeable project category filters, and mobile-first single-column stacking.
- **Strict Academic Privacy & Accuracy:** 100% verified against official Civil Service Form 212 records. Confidential in-progress doctoral dissertation topics have been excluded.
- **Centralized Data File (`assets/js/portfolio-data.js`):** Update courses, publications, projects, skills, biography, and links in **one single JavaScript configuration file** without writing complex HTML!
- **Interactive Project Showcase:** 5 development projects with vector architectural illustrations, tag filtering (Mobile & IoT, Information Systems, Web Applications, EdTech), and rich detail modals.
- **Dark & Light Mode:** Sleek dual-theme system with automatic persistence in `localStorage` and system preference detection.
- **Curriculum Vitae Download:** Direct download integration for `Antonio-Jr-Piloton-CV.pdf` with graceful guidance modal.
- **Email Copy & Form Composer:** Verified contact coordinates (`antoniojrpiloton@gmail.com` / `+63 912 894 1731`), copy-email toast alerts, and a client-side mailto form composer requiring zero backend costs.
- **Zero-Dependency Build:** Pure semantic HTML5, modern CSS variables, and vanilla JavaScript. Ready for instant deployment on GitHub Pages.

---

## 📁 Repository Structure

```text
portfolio/
├── index.html                   # Main Canva-style responsive layout
├── 404.html                     # Custom branded 404 error page for GitHub Pages
├── robots.txt                   # Search engine crawl directives
├── sitemap.xml                  # XML sitemap for SEO discovery
├── README.md                    # Project documentation & deployment manual
├── Antonio-Jr-Piloton-Portfolio.zip # Downloadable ready-to-deploy ZIP archive
└── assets/
    ├── css/
    │   └── styles.css           # Canva design system (Emerald & Golden Yellow)
    ├── js/
    │   ├── portfolio-data.js    # Centralized data file for all content updates
    │   └── main.js              # Interactivity, filters, drawer, modal, and theme logic
    ├── images/
    │   ├── favicon.svg          # AP monogram vector favicon
    │   ├── avatar-placeholder.svg # Academic portrait vector illustration
    │   └── projects/            # Vector illustrations for candidate projects
    └── documents/
        ├── README.txt           # Placement instructions for your CV PDF
        └── Antonio-Jr-Piloton-CV.pdf # [Drop your real verified PDF CV here]
```

---

## 🚀 How to Deploy on GitHub Pages (Step-by-Step)

This website is pre-configured for free, permanent hosting on GitHub Pages with zero server fees.

### Step 1: Create a GitHub Repository
1. Log in to your GitHub account at [github.com/antonio-piloton](https://github.com/antonio-piloton).
2. Click the **+** (plus icon) in the top right and select **New repository**.
3. Repository name choices:
   - **Option A (Recommended - Direct URL):** Name it **`antonio-piloton.github.io`**
     *(Your live website will be: **`https://antonio-piloton.github.io`**)*
   - **Option B (Project Subfolder):** Name it **`portfolio`**
     *(Your live website will be: **`https://antonio-piloton.github.io/portfolio`**)*
4. Set repository visibility to **Public**.
5. Leave "Add a README file" **unchecked** (we already have our README and all code files ready).
6. Click **Create repository**.

### Step 2: Push Files to GitHub
Open PowerShell inside `c:\Users\apilo\Downloads\portfolio` and run:

**If you chose Option A (`antonio-piloton.github.io`):**
```bash
git remote add origin https://github.com/antonio-piloton/antonio-piloton.github.io.git
git branch -M main
git push -u origin main
```

**If you chose Option B (`portfolio`):**
```bash
git remote add origin https://github.com/antonio-piloton/portfolio.git
git branch -M main
git push -u origin main
```

*(Alternatively, you can drag and drop all the project files directly through GitHub’s web interface by clicking **Add file** &rarr; **Upload files**).*

### Step 3: Enable GitHub Pages (Instant Live Website)
1. On your GitHub repository page, click the **Settings** tab (gear icon).
2. In the left navigation menu under "Code and automation", click **Pages**.
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**.
   - Branch: Select **`main`** and folder **`/ (root)`**.
4. Click **Save**.
5. Wait 1 to 2 minutes. GitHub will display a live notification:
   > 🌐 *"Your site is live at `https://antonio-piloton.github.io`"* (or `/portfolio` if Option B)
   
*Click that link and your portfolio website is live for the world to see!*

---

## ✏️ How to Customize & Update Your Content

All dynamic content is organized in `assets/js/portfolio-data.js`. You can edit this file in any code editor (VS Code, Notepad, etc.).

### 1. Updating Your Profile Photo
1. Prepare a high-resolution portrait in JPG or PNG format (recommended square crop, e.g., 600&times;600 px).
2. Save it to `assets/images/profile-portrait.jpg`.
3. In `assets/js/portfolio-data.js`, update:
   ```javascript
   avatar: "assets/images/profile-portrait.jpg",
   ```

### 2. Uploading Your Verified CV
1. Save your verified CV in PDF format as:
   `assets/documents/Antonio-Jr-Piloton-CV.pdf`
2. Once placed, any click on the "Download CV" button will automatically download your PDF file.

---

## 🔒 Security & Privacy Notice

- **No Server Tracking:** Does not include third-party trackers or ad cookies.
- **Doctoral Privacy:** Confidential in-progress dissertation topics are excluded from public source code.
- **Client-Side Form:** The collaboration form compiles messages into local `mailto:` commands, keeping personal email workflows secure and serverless.

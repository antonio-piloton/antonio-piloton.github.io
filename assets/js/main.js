/**
 * ====================================================================
 * PORTFOLIO APPLICATION CORE LOGIC
 * ====================================================================
 * Handles responsive mobile navigation, theme switcher, dynamic projects
 * rendering, filtering, interactive modals, mailto composer, and toast alerts.
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  initScrollEffects();
  initProjects();
  initContactForm();
  initCvDownload();
  renderDynamicData();
});

/* --------------------------------------------------------------------------
   1. THEME SWITCHER (DARK / LIGHT WITH SYSTEM PERSISTENCE)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtns = document.querySelectorAll(".theme-toggle-btn");
  const savedTheme = localStorage.getItem("antonio_portfolio_theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  const initialTheme = savedTheme ? savedTheme : (prefersDark ? "dark" : "light");
  applyTheme(initialTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(newTheme);
      localStorage.setItem("antonio_portfolio_theme", newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const themeToggleBtns = document.querySelectorAll(".theme-toggle-btn");
  
  themeToggleBtns.forEach(btn => {
    const icon = btn.querySelector("i");
    if (icon) {
      if (theme === "dark") {
        icon.className = "fas fa-sun";
        btn.setAttribute("aria-label", "Switch to Light Mode");
      } else {
        icon.className = "fas fa-moon";
        btn.setAttribute("aria-label", "Switch to Dark Mode");
      }
    }
  });
}

/* --------------------------------------------------------------------------
   2. RESPONSIVE MOBILE NAVIGATION & DRAWER
   -------------------------------------------------------------------------- */
function initNavigation() {
  const mobileToggle = document.querySelector(".mobile-nav-toggle");
  const mobileDrawer = document.querySelector(".mobile-drawer");
  const navBackdrop = document.querySelector(".nav-backdrop");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-item a");

  function openMenu() {
    mobileToggle.setAttribute("aria-expanded", "true");
    mobileDrawer.classList.add("open");
    navBackdrop.classList.add("active");
    document.body.classList.add("no-scroll");
  }

  function closeMenu() {
    mobileToggle.setAttribute("aria-expanded", "false");
    mobileDrawer.classList.remove("open");
    navBackdrop.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }

  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      const isExpanded = mobileToggle.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (navBackdrop) {
    navBackdrop.addEventListener("click", closeMenu);
  }

  // Close when clicking any link inside drawer
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Close on Escape key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
      closeModal();
      closeCvModal();
    }
  });
}

/* --------------------------------------------------------------------------
   3. SCROLL EFFECTS & SCROLLSPY
   -------------------------------------------------------------------------- */
function initScrollEffects() {
  const navbar = document.querySelector(".navbar");
  const backToTopBtn = document.querySelector(".back-to-top");
  const sections = document.querySelectorAll("section[id]");
  const desktopLinks = document.querySelectorAll(".nav-menu .nav-link");

  function onScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Sticky navbar shadow
    if (navbar) {
      if (scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    // Back to top visibility
    if (backToTopBtn) {
      if (scrollY > 450) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    }

    // ScrollSpy active link detection
    let currentSectionId = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    if (currentSectionId) {
      desktopLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
}

/* --------------------------------------------------------------------------
   4. PROJECTS RENDERING & FILTERING
   -------------------------------------------------------------------------- */
let activeFilter = "all";

function initProjects() {
  const container = document.getElementById("projects-container");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (!container || !window.PORTFOLIO_DATA || !window.PORTFOLIO_DATA.projects) return;

  renderProjectsList(window.PORTFOLIO_DATA.projects, activeFilter);

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter");
      renderProjectsList(window.PORTFOLIO_DATA.projects, activeFilter);
    });
  });

  // Modal Close Listeners
  const modalBackdrop = document.getElementById("project-modal-backdrop");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeModal);
  }
}

function renderProjectsList(projects, filter) {
  const container = document.getElementById("projects-container");
  if (!container) return;

  const filtered = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem;">
        <i class="fas fa-folder-open" style="font-size: 2.5rem; color: var(--color-emerald); margin-bottom: 1rem;"></i>
        <p style="font-weight: 600; color: var(--text-main);">No projects found in this category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(project => {
    const techBadges = project.technologies
      .slice(0, 4)
      .map(t => `<span class="project-tech-pill">${escapeHTML(t)}</span>`)
      .join("");

    return `
      <article class="project-card" data-id="${project.id}">
        <div class="project-img-wrapper">
          <img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)} Illustration" loading="lazy" />
          <span class="project-badge-overlay">${escapeHTML(project.badge)}</span>
          <span class="project-status-overlay">${escapeHTML(project.status)}</span>
        </div>
        <div class="project-card-body">
          <span class="project-category-label">${escapeHTML(project.categoryLabel)}</span>
          <h3 class="project-title">${escapeHTML(project.title)}</h3>
          <p class="project-subtitle">${escapeHTML(project.subtitle)}</p>
          <p class="project-summary">${escapeHTML(project.summary)}</p>
          <div class="project-tech-chips">
            ${techBadges}
          </div>
          <div class="project-card-footer">
            <button class="view-details-btn" onclick="openProjectModal('${project.id}')">
              <span>View Architecture</span>
              <i class="fas fa-arrow-right"></i>
            </button>
            ${project.githubUrl ? `
              <a href="${escapeHTML(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="github-code-link" aria-label="View source code on GitHub">
                <i class="fab fa-github"></i>
                <span>Repository</span>
              </a>
            ` : ''}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

window.openProjectModal = function(projectId) {
  if (!window.PORTFOLIO_DATA || !window.PORTFOLIO_DATA.projects) return;
  const project = window.PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  const modalBackdrop = document.getElementById("project-modal-backdrop");
  const modalTitle = document.getElementById("modal-project-title");
  const modalSubtitle = document.getElementById("modal-project-subtitle");
  const modalImage = document.getElementById("modal-project-img");
  const modalProblem = document.getElementById("modal-project-problem");
  const modalUsers = document.getElementById("modal-project-users");
  const modalArchitecture = document.getElementById("modal-project-arch");
  const modalFeatures = document.getElementById("modal-project-features");
  const modalTechStack = document.getElementById("modal-project-tech");
  const modalChallenges = document.getElementById("modal-project-challenges");
  const modalGithubLink = document.getElementById("modal-github-link");
  const modalBadge = document.getElementById("modal-status-badge");

  if (modalTitle) modalTitle.textContent = project.title;
  if (modalSubtitle) modalSubtitle.textContent = project.subtitle;
  if (modalImage) {
    modalImage.src = project.image;
    modalImage.alt = project.title;
  }
  if (modalBadge) modalBadge.textContent = `${project.badge} • ${project.status}`;
  if (modalProblem) modalProblem.textContent = project.problem;
  if (modalUsers) modalUsers.textContent = project.intendedUsers;
  if (modalArchitecture) modalArchitecture.textContent = project.architecture;

  if (modalFeatures) {
    modalFeatures.innerHTML = project.features.map(f => `
      <li><i class="fas fa-check-circle"></i> <span>${escapeHTML(f)}</span></li>
    `).join("");
  }

  if (modalTechStack) {
    modalTechStack.innerHTML = project.technologies.map(t => `
      <span class="project-tech-pill" style="font-size: 0.8rem; padding: 4px 10px;">${escapeHTML(t)}</span>
    `).join("");
  }

  if (modalChallenges) {
    modalChallenges.innerHTML = project.challenges.map(c => `
      <li style="margin-bottom: 0.4rem;"><i class="fas fa-wrench" style="color: var(--color-gold-muted); margin-right: 6px;"></i> <span>${escapeHTML(c)}</span></li>
    `).join("");
  }

  if (modalGithubLink) {
    if (project.githubUrl) {
      modalGithubLink.href = project.githubUrl;
      modalGithubLink.style.display = "inline-flex";
    } else {
      modalGithubLink.style.display = "none";
    }
  }

  if (modalBackdrop) {
    modalBackdrop.classList.add("open");
    document.body.classList.add("no-scroll");
  }
};

function closeModal() {
  const modalBackdrop = document.getElementById("project-modal-backdrop");
  if (modalBackdrop && modalBackdrop.classList.contains("open")) {
    modalBackdrop.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }
}

/* --------------------------------------------------------------------------
   5. CONTACT FORM & EMAIL HELPERS
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById("collaboration-form");
  const copyEmailBtns = document.querySelectorAll(".copy-email-trigger");

  copyEmailBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const email = btn.getAttribute("data-email") || 
        (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.profile.contact.email) || 
        "apiloton@adssu.edu.ph";
      copyToClipboard(email, "Email address copied to clipboard!");
    });
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contact-name")?.value.trim() || "";
      const email = document.getElementById("contact-email")?.value.trim() || "";
      const category = document.getElementById("contact-category")?.value || "General Inquiry";
      const subjectInput = document.getElementById("contact-subject")?.value.trim() || "";
      const message = document.getElementById("contact-message")?.value.trim() || "";

      if (!name || !email || !message) {
        showToast("Please fill in your name, email, and message.");
        return;
      }

      const subject = encodeURIComponent(`[${category}] ${subjectInput ? subjectInput : 'Portfolio Collaboration Inquiry'}`);
      const body = encodeURIComponent(
        `Dear Asst. Prof. Antonio Jr. Piloton,\n\n` +
        `${message}\n\n` +
        `Best regards,\n` +
        `${name}\n` +
        `Email: ${email}`
      );

      const recipient = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.profile.contact.email) || "apiloton@adssu.edu.ph";
      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

      // Open email client safely
      window.location.href = mailtoUrl;
      showToast("Opening your default email client...");
      form.reset();
    });
  }
}

/* --------------------------------------------------------------------------
   6. CV DOWNLOAD HANDLER & FALLBACK MODAL
   -------------------------------------------------------------------------- */
function initCvDownload() {
  const cvButtons = document.querySelectorAll(".download-cv-btn");
  const cvModal = document.getElementById("cv-modal-backdrop");
  const closeCvModalBtn = document.getElementById("cv-modal-close-btn");

  cvButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const cvPath = (window.PORTFOLIO_DATA && window.PORTFOLIO_DATA.profile.cvPath) || "assets/documents/Antonio-Jr-Piloton-CV.pdf";

      // Test if file is accessible via HEAD request
      fetch(cvPath, { method: "HEAD" })
        .then(response => {
          if (response.ok) {
            // File exists, proceed with actual download
            const link = document.createElement("a");
            link.href = cvPath;
            link.download = "Antonio-Jr-Piloton-CV.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            showToast("Downloading verified Curriculum Vitae...");
          } else {
            openCvModal();
          }
        })
        .catch(() => {
          openCvModal();
        });
    });
  });

  if (closeCvModalBtn) {
    closeCvModalBtn.addEventListener("click", closeCvModal);
  }
  if (cvModal) {
    cvModal.addEventListener("click", (e) => {
      if (e.target === cvModal) closeCvModal();
    });
  }
}

function openCvModal() {
  const cvModal = document.getElementById("cv-modal-backdrop");
  if (cvModal) {
    cvModal.classList.add("open");
    document.body.classList.add("no-scroll");
  }
}

function closeCvModal() {
  const cvModal = document.getElementById("cv-modal-backdrop");
  if (cvModal && cvModal.classList.contains("open")) {
    cvModal.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }
}

/* --------------------------------------------------------------------------
   7. TOAST NOTIFICATION SYSTEM
   -------------------------------------------------------------------------- */
function showToast(message) {
  let toast = document.getElementById("global-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "global-toast";
    toast.className = "toast-container";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fas fa-info-circle" style="color: var(--color-gold);"></i> <span>${escapeHTML(message)}</span>`;
  toast.classList.add("show");

  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

function copyToClipboard(text, successMessage) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage);
    }).catch(() => {
      fallbackCopyText(text, successMessage);
    });
  } else {
    fallbackCopyText(text, successMessage);
  }
}

function fallbackCopyText(text, successMessage) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    showToast(successMessage);
  } catch (err) {
    showToast(`Could not copy automatically. Contact: ${text}`);
  }
  document.body.removeChild(textArea);
}

/* --------------------------------------------------------------------------
   8. DYNAMIC DATA POPULATION HELPER
   -------------------------------------------------------------------------- */
function renderDynamicData() {
  if (!window.PORTFOLIO_DATA) return;
  const data = window.PORTFOLIO_DATA;

  // Set last updated in footer
  const lastUpdatedEl = document.getElementById("last-updated-date");
  if (lastUpdatedEl && data.profile.lastUpdated) {
    lastUpdatedEl.textContent = data.profile.lastUpdated;
  }
}

/* --------------------------------------------------------------------------
   UTILITY: HTML ESCAPE
   -------------------------------------------------------------------------- */
function escapeHTML(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

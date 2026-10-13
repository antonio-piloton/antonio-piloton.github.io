/**
 * ====================================================================
 * PORTFOLIO DATA CONFIGURATION
 * ====================================================================
 * Owner: Antonio Jr. Luib Piloton
 * Designation: Assistant Professor III
 * Institution: Agusan del Sur State University (ADSSU)
 *
 * Source: Official Civil Service Personal Data Sheet (CS Form No. 212)
 * ====================================================================
 */

const PORTFOLIO_DATA = {
  // 1. Basic Profile Identity
  profile: {
    fullName: "Antonio Jr. Piloton",
    legalName: "Antonio Jr. Luib Piloton",
    shortName: "Antonio Piloton",
    monogram: "AP",
    title: "Assistant Professor III",
    institution: "Agusan del Sur State University (ADSSU)",
    department: "College of Computing and Information Sciences",
    field: "Information Technology and Computing Education",
    location: "Agusan del Sur / Surigao City / Dinagat Islands, Philippines",
    hometown: "Sta. Cruz, Tubajon, Dinagat Islands",
    avatar: "assets/images/avatar-placeholder.svg", // Replace with "assets/images/profile-portrait.jpg" once uploaded
    cvPath: "assets/documents/Antonio-Jr-Piloton-CV.pdf",
    headline: "Advancing Computing Education Through Technology, Research, and Innovation.",
    tagline: "I work at the intersection of information technology education, software engineering, and applied computing research, developing practical digital solutions that support learning, institutional workflows, and community empowerment.",
    motto: "Empowering next-generation technologists through rigorous computing education and pragmatic systems development.",
    availability: "Open to Academic Collaborations & Technical Consultations",
    lastUpdated: "October 2026",
    
    // Quick Hero Badges
    badges: [
      { text: "Assistant Professor III", icon: "fa-graduation-cap" },
      { text: "DIT - CAR @ SPUP", icon: "fa-book-open" },
      { text: "MIT '23 • Best Capstone Awardee", icon: "fa-award" },
      { text: "BSIT '20 @ SNSU", icon: "fa-laptop-code" }
    ],

    // Contact Information (Verified from CS Form 212)
    contact: {
      email: "antoniojrpiloton@gmail.com",
      institutionalEmail: "apiloton@adssu.edu.ph",
      phone: "+63 912 894 1731",
      officeLocation: "Department of Information Technology, ADSSU Main Campus",
      residentialLocation: "Cagniog, Surigao City, Surigao del Norte",
      permanentLocation: "Aguinaldo St., Sta. Cruz, Tubajon, Dinagat Islands",
      consultationHours: "By appointment / Official academic hours"
    },

    // Scholarly and Social Profiles
    socialLinks: {
      github: {
        label: "GitHub",
        url: "https://github.com/antonio-piloton",
        icon: "fab fa-github",
        configured: true
      },
      googleScholar: {
        label: "Google Scholar",
        url: "https://scholar.google.com/citations?user=PLACEHOLDER",
        icon: "fas fa-graduation-cap",
        configured: false
      },
      orcid: {
        label: "ORCID",
        url: "https://orcid.org/0009-0000-0000-0000",
        icon: "fab fa-orcid",
        configured: false
      },
      linkedin: {
        label: "LinkedIn",
        url: "https://linkedin.com/in/antoniopilotonofficial",
        icon: "fab fa-linkedin-in",
        configured: false
      },
      researchGate: {
        label: "ResearchGate",
        url: "https://www.researchgate.net/profile/Antonio-Piloton",
        icon: "fab fa-researchgate",
        configured: false
      }
    }
  },

  // 2. About Me Biography
  about: {
    overview: [
      "I am an Information Technology educator, researcher, and software developer serving as an Assistant Professor III at Agusan del Sur State University (ADSSU). My academic and technical practice spans computing instruction, enterprise software engineering, and community-driven technology initiatives.",
      "Originally from Sta. Cruz, Tubajon, Dinagat Islands, I graduated with a Bachelor of Science in Information Technology (BSIT) from Surigao State College of Technology (now Surigao del Norte State University - SNSU) in 2020. I subsequently earned my Master in Information Technology (MIT) from SNSU in 2023, where I was honored as the Best Capstone Project Awardee.",
      "I have completed all academic requirements (CAR) in the Doctor of Information Technology (DIT) program at St. Paul University Philippines (SPUP) in Tuguegarao City. As an active computing educator and developer, I bridge the gap between classroom theory and real-world system architecture—building full-stack web platforms, mobile solutions with offline-first synchronization, and robust database backends."
    ],
    pillars: [
      {
        title: "Computing Instruction",
        icon: "fa-chalkboard-teacher",
        description: "Cultivating critical problem-solving and industry-aligned programming competencies among computing students through hands-on project-based pedagogy."
      },
      {
        title: "Systems Engineering",
        icon: "fa-laptop-code",
        description: "Architecting resilient, modular software systems utilizing modern web frameworks, relational databases, REST APIs, and role-based security."
      },
      {
        title: "Scholarly Research",
        icon: "fa-microscope",
        description: "Investigating institutional information workflows, applied computing, and higher education technology that enhance state university operations."
      },
      {
        title: "Community Outreach",
        icon: "fa-hands-helping",
        description: "Extending technical know-how to local government units, partner schools, and community cooperatives to broaden digital literacy and practical tech adoption."
      }
    ],
    currentFocus: [
      "Doctor of Information Technology (DIT) studies at St. Paul University Philippines (SPUP) - Completed Academic Requirements (CAR).",
      "Developing offline-first mobile attendance and monitoring architectures for public sector environments with variable connectivity.",
      "Instructional module enhancement for full-stack web and mobile application development courses."
    ]
  },

  // 3. Verified Academic Profile and Milestones (From PDS Form 212)
  academicProfile: {
    education: [
      {
        degree: "Doctor of Information Technology (DIT) - CAR",
        status: "Completed Academic Requirements (CAR) • Present",
        institution: "St. Paul University Philippines",
        location: "Tuguegarao City, Cagayan",
        period: "2023 – Present",
        notes: "Completed all academic coursework and comprehensive degree requirements (CAR) in the Doctor of Information Technology program."
      },
      {
        degree: "Master in Information Technology (MIT)",
        status: "Graduated • Best Capstone Project Awardee 🏆",
        institution: "Surigao del Norte State University (SNSU)",
        location: "Surigao City, Surigao del Norte",
        period: "2020 – 2023",
        notes: "Graduate degree in information systems, advanced databases, and enterprise software. Conferred Best Capstone Project Awardee (2023)."
      },
      {
        degree: "Bachelor of Science in Information Technology (BSIT)",
        status: "Graduated",
        institution: "Surigao State College of Technology (now SNSU)",
        location: "Surigao City, Surigao del Norte",
        period: "2014 – 2020",
        notes: "Undergraduate degree in computer programming, relational database systems, web applications, algorithms, and systems analysis."
      },
      {
        degree: "Secondary Education",
        status: "Graduated",
        institution: "Tubajon National High School",
        location: "Tubajon, Dinagat Islands",
        period: "2010 – 2014",
        notes: "High school graduate with foundational mathematics, science, and computer literacy."
      }
    ],
    appointments: [
      {
        role: "Assistant Professor III",
        type: "Current Academic Appointment",
        institution: "Agusan del Sur State University (ADSSU)",
        period: "Present Appointment",
        description: "Facilitating core and advanced IT coursework, advising undergraduate capstone projects, spearheading departmental curriculum reviews, and serving on institutional technology committees."
      },
      {
        role: "IT Faculty Member / Instructor",
        type: "Previous Academic Experience",
        institution: "Higher Education / Computing Instruction",
        period: "Academic Service",
        description: "Delivered lecture and laboratory instruction across computer programming, web systems, and database management subjects."
      }
    ],
    // Verified L&D and Certifications from Civil Service PDS
    certifications: [
      {
        title: "Best Capstone Project Awardee (MIT)",
        issuer: "Surigao del Norte State University",
        year: "2023",
        badge: "Academic Honor 🏆"
      },
      {
        title: "Data Driven Governance for Executive Leadership",
        issuer: "Department of Information and Communications Technology (DICT)",
        year: "2025",
        badge: "Technical L&D (8 hrs)"
      },
      {
        title: "Learn ChatGPT for Government Workforce (Ethically)",
        issuer: "Department of Information and Communications Technology (DICT)",
        year: "2025",
        badge: "Technical L&D (4 hrs)"
      },
      {
        title: "A.Ignite: Fueling Filipino Minds with Future of Global Tech",
        issuer: "NVIDIA AI Academy Philippines",
        year: "2025",
        badge: "Technical L&D (8 hrs)"
      },
      {
        title: "JavaScript Essentials 1 & Python Essentials 1",
        issuer: "Cisco Networking Academy",
        year: "2025",
        badge: "Technical Certification"
      },
      {
        title: "Computer Hardware Basics",
        issuer: "Cisco Networking Academy",
        year: "2025",
        badge: "Technical L&D"
      },
      {
        title: "UI/UX Design & Startup App Development",
        issuer: "Department of Information and Communications Technology (DICT)",
        year: "2025",
        badge: "Technical L&D (8 hrs)"
      },
      {
        title: "Futures Thinking: Digitalization of SNSU through Research",
        issuer: "Surigao del Norte State University",
        year: "2024",
        badge: "Technical L&D (24 hrs)"
      },
      {
        title: "Programming for Beginners Using Python",
        issuer: "DOST - Caraga",
        year: "2024",
        badge: "Technical L&D (4 hrs)"
      },
      {
        title: "Basic Records and Archives Management (BRAM)",
        issuer: "Surigao del Norte State University",
        year: "2024",
        badge: "Institutional L&D (16 hrs)"
      },
      {
        title: "UI - Technology Entrepreneurship Boot-Camp",
        issuer: "Surigao State College of Technology",
        year: "2019",
        badge: "Technical Boot-Camp (24 hrs)"
      },
      {
        title: "Code It Like A Pro Contest",
        issuer: "Philippine Society of Information Technology Educators (PSITE)",
        year: "2019",
        badge: "Competition (8 hrs)"
      }
    ]
  },

  // 4. Teaching Portfolio
  teaching: [
    {
      code: "IT 312",
      title: "Web Application Development",
      level: "3rd Year BSIT",
      tags: ["HTML5", "CSS3", "JavaScript", "PHP", "Laravel", "REST APIs"],
      description: "Comprehensive instruction in modern client-server web architectures, dynamic user interfaces, secure session handling, relational database integration, and MVC design patterns.",
      outcomes: [
        "Architect and deploy standards-compliant, responsive web applications.",
        "Implement secure authentication, role-based access control, and sanitization.",
        "Design RESTful APIs and integrate client-side asynchronous workflows."
      ],
      sampleProject: "Interactive Multi-Tenant Web Portal with Role-Based Access Control"
    },
    {
      code: "IT 325",
      title: "Mobile Application Development",
      level: "3rd Year BSIT",
      tags: ["React Native", "Expo", "SQLite", "Offline-First", "Android"],
      description: "Designing native and cross-platform mobile apps with responsive touch UIs, hardware sensor integrations, local SQLite caching, and asynchronous synchronization.",
      outcomes: [
        "Construct responsive, adaptive mobile layouts for Android devices.",
        "Implement offline-first local data persistence with conflict resolution.",
        "Integrate camera, QR code scanning, and device location services."
      ],
      sampleProject: "Campus Gate Access & Student Attendance Scanner"
    },
    {
      code: "IT 222",
      title: "Database Management Systems",
      level: "2nd Year BSIT",
      tags: ["MySQL", "Relational Modeling", "Normalization", "Stored Procedures", "Indexing"],
      description: "Theoretical and applied foundations of relational database design, normalization (1NF to 3NF/BCNF), query optimization, transactional integrity (ACID), and security auditing.",
      outcomes: [
        "Model complex institutional domains with entity-relationship diagrams.",
        "Compose high-performance SQL queries, views, triggers, and transactions.",
        "Administer database instances with automated backup and role permissions."
      ],
      sampleProject: "Enterprise Library Circulation and Asset Tracking Database"
    },
    {
      code: "IT 214",
      title: "Object-Oriented Programming",
      level: "2nd Year BSIT",
      tags: ["Java", "OOP Principles", "Data Structures", "GUI Design"],
      description: "Core computing course covering encapsulation, inheritance, polymorphism, abstraction, exception handling, and object-oriented design principles for scalable desktop and system tools.",
      outcomes: [
        "Apply solid object-oriented principles to solve computational problems.",
        "Develop modular applications with clean class hierarchies and separation of concerns.",
        "Handle file I/O and relational persistence in application pipelines."
      ],
      sampleProject: "Desktop Student Records & Course Scheduling System"
    },
    {
      code: "IT 321",
      title: "Integrative Programming and Technologies",
      level: "3rd Year BSIT",
      tags: ["API Integration", "JSON", "Microservices", "Data Interchange", "System Glue"],
      description: "Explores techniques for integrating heterogeneous software systems, message exchanges, middleware, external service APIs, and enterprise data consolidation.",
      outcomes: [
        "Build secure middleware and data ingestion micro-services.",
        "Implement Webhooks, token-based authorization (JWT/OAuth), and automated sync.",
        "Analyze enterprise workflows for seamless interoperability."
      ],
      sampleProject: "Inter-Agency Document Transmittal & Notification Gateway"
    },
    {
      code: "IT 411",
      title: "Software Engineering & Capstone Advising",
      level: "4th Year BSIT",
      tags: ["Agile/Scrum", "UML", "Requirements Engineering", "Testing", "CI/CD"],
      description: "Guiding senior undergraduate teams through the complete software lifecycle—from stakeholder discovery and architectural specification to quality assurance, deployment, and formal defense.",
      outcomes: [
        "Translate user requirements into rigorous functional specifications and UML artifacts.",
        "Enforce version control, pull-request reviews, and unit testing pipelines.",
        "Conduct empirical usability evaluations and academic project documentation."
      ],
      sampleProject: "Institutional Automated Queuing & Public Assistance Kiosk"
    }
  ],

  // 5. Research & Scholarly Interests (Broad scholarly themes - no confidential dissertation topics)
  research: {
    themes: [
      {
        title: "Higher Education Digital Transformation",
        icon: "fa-university",
        desc: "Investigating the adoption, organizational change management, and sustainability of digital institutional repositories and automated campus operations in state universities."
      },
      {
        title: "Mobile Architectures & Offline-First Computing",
        icon: "fa-mobile-alt",
        desc: "Designing resilient synchronization protocols, edge caching, and hardware scanner integrations for provincial areas with intermittent network connectivity."
      },
      {
        title: "Information Systems & Workflow Engineering",
        icon: "fa-sitemap",
        desc: "Examining architectural models, event-driven pipelines, and digital administrative workflows that improve efficiency in Philippine public sector environments."
      },
      {
        title: "Computing Pedagogy & Learning Analytics",
        icon: "fa-user-graduate",
        desc: "Examining project-based learning methodologies, code review tools, and automated assessment strategies to improve student retention in programming tracks."
      },
      {
        title: "Cybersecurity & Information Assurance in Public Sector IT",
        icon: "fa-shield-alt",
        desc: "Analyzing role-based access governance, data privacy compliance (Data Privacy Act of 2012), and secure software design in educational institutions."
      }
    ],
    collaborationNote: "Academic collaborators, fellow researchers, and HEI administrators interested in applied computing research, mobile architectures, or computing pedagogy are invited to connect."
  },

  // 6. Publications & Scholarly Profiles
  publications: {
    notice: "Scholarly publications and conference proceedings are currently in preparation. Verified peer-reviewed journal papers, conference presentations, and technical monographs will be listed here upon formal acceptance and indexing.",
    profilesConfigured: {
      googleScholarNote: "Scholar profile link will activate upon publication of indexable papers.",
      orcidNote: "ORCID profile registry connects scholarly works across research registries."
    },
    entries: []
  },

  // 7. Software Development Projects
  projects: [
    {
      id: "scanalert",
      title: "ScanAlert / SafeTrack",
      subtitle: "Offline-First QR & NFC Student Monitoring & Attendance Engine",
      category: "mobile",
      categoryLabel: "Mobile & IoT Applications",
      badge: "Featured Prototype",
      status: "Functional Prototype",
      image: "assets/images/projects/scanalert.svg",
      summary: "A resilient student tracking and campus entry logging system engineered for institutional gates and classrooms, combining QR/NFC scanning with offline-first local SQLite caching and automated cloud synchronization.",
      problem: "Traditional paper-based gate and classroom logbooks are slow, error-prone, and cause bottleneck congestion during peak morning hours. Furthermore, intermittent campus internet connectivity often disables purely cloud-dependent systems.",
      intendedUsers: "Campus security personnel, department faculty, administrative monitors, and enrolled students.",
      technologies: ["React Native", "Expo", "SQLite", "PHP / Laravel REST API", "NFC / QR Scanners", "JWT Auth"],
      features: [
        "Sub-second QR code reading and NFC contactless card verification.",
        "Robust offline-first architecture: logs persist in local encrypted SQLite and auto-sync when network reconnects.",
        "Real-time campus head-count dashboard for administrative monitors.",
        "Automated notification triggers for student entry/exit timestamps.",
        "Role-based authorization preventing unauthorized log modifications."
      ],
      architecture: "Three-tier distributed model: edge mobile scanners communicate with local SQLite storage; an asynchronous sync daemon manages idempotent REST synchronization to an enterprise MySQL server with JWT validation.",
      challenges: [
        "Resolving concurrent synchronization conflicts when multiple gate scanners sync simultaneously after network restoration.",
        "Optimizing camera viewfinder frame processing to conserve mobile device battery during prolonged scanning sessions."
      ],
      githubUrl: "https://github.com/antonio-piloton/scanalert-safetrack",
      demoUrl: "",
      demoAvailable: false
    },
    {
      id: "doctrack",
      title: "DocTrack: Institutional Document Transmittal System",
      subtitle: "Lifecycle Tracking & Barcode Verification Platform",
      category: "info-sys",
      categoryLabel: "Information Systems",
      badge: "Core System",
      status: "Operational Prototype",
      image: "assets/images/projects/doctrack.svg",
      summary: "A transparent document transmittal platform utilizing unique barcodes and QR identification to trace the lifecycle, physical custody, and approval milestones of official correspondence.",
      problem: "Inter-office memoranda, budget requests, and vouchers frequently get misplaced or stalled in transition, making it arduous to ascertain the exact office holding a file.",
      intendedUsers: "Campus administrative units, college offices, records officers, and faculty members.",
      technologies: ["PHP", "JavaScript", "MySQL", "Barcode / QR Generator", "Bootstrap", "FPDF Library"],
      features: [
        "Automated generation of unique alphanumeric tracking numbers with printable barcode/QR routing slips.",
        "Scan-to-receive and scan-to-release actions recording timestamp, handling personnel, and remarks.",
        "Public tracking inquiry portal allowing originators to monitor transmittal progress without logging into administrative consoles.",
        "Turnaround time analytics highlighting average processing durations per receiving office.",
        "Automated routing history summary for archival and records retention."
      ],
      architecture: "Relational schema designed around immutable routing events; client-side barcode scanner integration via standard HID wedge and camera scanner streams.",
      challenges: [
        "Ensuring backward compatibility with legacy thermal receipt and barcode printers used in administrative offices.",
        "Preventing accidental out-of-order scans through strict state validation rules."
      ],
      githubUrl: "https://github.com/antonio-piloton/doctrack-system",
      demoUrl: "",
      demoAvailable: false
    },
    {
      id: "saas-pos",
      title: "SaaS Multi-Branch Point-of-Sale & Inventory",
      subtitle: "Retail Transaction & Multi-Branch Stock Management Suite",
      category: "web",
      categoryLabel: "Web Applications",
      badge: "Full-Stack Web",
      status: "Operational Prototype",
      image: "assets/images/projects/pos-system.svg",
      summary: "A robust retail transaction, inventory auditing, and sales analytics suite built with enterprise-grade Laravel architecture, designed for campus cooperatives, school supplies depots, and multi-tenant small businesses.",
      problem: "Stores and cooperatives frequently struggle with stock discrepancies, manual receipts, inability to track item variations, and lack of real-time sales profit analytics across different checkout registers.",
      intendedUsers: "Store cashiers, inventory managers, cooperative board members, and business proprietors.",
      technologies: ["Laravel", "Blade", "MySQL", "REST APIs", "Tailwind CSS", "ESC/POS Thermal Printing"],
      features: [
        "Rapid touch-enabled cashier terminal with barcode scanning, discounts, tax computation, and multiple tender types.",
        "Multi-branch inventory ledger tracking stock adjustments, transfers, minimum stock alerts, and supplier purchase orders.",
        "Role-based privilege separation isolating cashier sales from inventory cost records and managerial reports.",
        "Automated end-of-day Z-Reading cash drawer reconciliation and profit margin reports.",
        "Thermal receipt printer driver integration via direct network socket and browser printing."
      ],
      architecture: "Layered Laravel architecture incorporating specialized Controller, Service, and Repository layers with database transactions guarding all stock-deducting checkout operations.",
      challenges: [
        "Guarding against race conditions during simultaneous checkout of limited inventory items via pessimistic database locks.",
        "Implementing clean multi-tenant schema isolation for independent retail clients."
      ],
      githubUrl: "https://github.com/antonio-piloton/saas-pos-inventory",
      demoUrl: "",
      demoAvailable: false
    },
    {
      id: "edumetrics-lms",
      title: "EduMetrics: LMS Evaluation & Survey Engine",
      subtitle: "Student Feedback Analytics & Academic Assessment System",
      category: "edtech",
      categoryLabel: "Educational Technology",
      badge: "EdTech Solution",
      status: "Completed Prototype",
      image: "assets/images/projects/lms-survey.svg",
      summary: "A high-concurrency survey and instructional evaluation application enabling students to rate teaching effectiveness, course delivery, and campus facilities with real-time analytics aggregation.",
      problem: "Paper evaluation forms demand immense printing costs, weeks of manual data entry, and are prone to transcription errors, hindering timely faculty feedback and institutional accreditation reviews.",
      intendedUsers: "Enrolled students, academic department chairs, HR development officers, and faculty members.",
      technologies: ["PHP", "JavaScript", "MySQL", "AJAX", "CSS3", "CSV / Excel Exporters"],
      features: [
        "Dynamic survey builder supporting Likert scales, open-ended reflections, and weighted competency metrics.",
        "Single-token survey access preventing ballot stuffing while safeguarding respondent anonymity.",
        "Real-time faculty rating scorecards with automated computation of mean, standard deviation, and descriptive ratings.",
        "Institutional clearance gating: students must complete evaluations to view final grades.",
        "Instant one-click exports formatted for faculty promotion portfolios (NBC 461 / SUC leveling)."
      ],
      architecture: "Normalized survey response schema optimized for read-heavy completion bursts during final examination weeks; indexed caching for aggregate metric computation.",
      challenges: [
        "Handling sudden traffic surges during end-of-semester evaluation deadlines without database connection pooling failures.",
        "Guaranteeing mathematical anonymity for students while strictly tracking completion flags."
      ],
      githubUrl: "https://github.com/antonio-piloton/edumetrics-evaluation",
      demoUrl: "",
      demoAvailable: false
    },
    {
      id: "unilib-sis",
      title: "UniLib & SIS: Academic Library & Student Records",
      subtitle: "Unified Cataloging, Circulation & Clearance Repository",
      category: "info-sys",
      categoryLabel: "Information Systems",
      badge: "Campus System",
      status: "In Development",
      image: "assets/images/projects/library-sis.svg",
      summary: "A streamlined academic resource management platform combining Dewey Decimal / LOC cataloging with automated student borrowing clearances, overdue fine calculations, and institutional record validation.",
      problem: "Disjointed record-keeping between college libraries and registrar offices results in delayed graduation clearances and unreturned academic reference materials.",
      intendedUsers: "College librarians, student borrowers, faculty researchers, and campus clearance officers.",
      technologies: ["PHP", "JavaScript", "MySQL", "HTML5", "CSS3", "Barcode Scanner Integration"],
      features: [
        "Online Public Access Catalog (OPAC) with fast keyword, title, author, and call-number indexing.",
        "Student ID barcode scanning for rapid checkout and return processing.",
        "Automated overdue penalty calculation with grace-period rules and digital receipts.",
        "Direct integration with university semester clearance status: holds clearance automatically for unreturned books.",
        "Statistical circulation reporting analyzing most-borrowed subjects and acquisition recommendations."
      ],
      architecture: "Relational MySQL design featuring transaction-safe circulation tables, foreign keys with audit triggers, and a lightweight search index.",
      challenges: [
        "Standardizing legacy bibliographic records with missing ISBN and call numbers.",
        "Creating a simple, resilient interface that library student assistants can operate with minimal technical training."
      ],
      githubUrl: "https://github.com/antonio-piloton/unilib-sis-manager",
      demoUrl: "",
      demoAvailable: false
    }
  ],

  // 8. Categorized Technical Skills
  skills: [
    {
      category: "Frontend Development",
      icon: "fa-desktop",
      skills: [
        { name: "HTML5 & Semantic Web", level: "Advanced" },
        { name: "CSS3 & Responsive Design", level: "Advanced" },
        { name: "Vanilla JavaScript (ES6+)", level: "Advanced" },
        { name: "Tailwind CSS", level: "Proficient" },
        { name: "Vue.js", level: "Proficient" },
        { name: "UI/UX Design (DICT Certified)", level: "Proficient" }
      ]
    },
    {
      category: "Backend & Server Architecture",
      icon: "fa-server",
      skills: [
        { name: "PHP", level: "Advanced" },
        { name: "Laravel Framework", level: "Advanced" },
        { name: "Python (Cisco & DOST Certified)", level: "Proficient" },
        { name: "RESTful API Engineering", level: "Advanced" },
        { name: "MVC Architecture", level: "Advanced" },
        { name: "Authentication & RBAC", level: "Advanced" }
      ]
    },
    {
      category: "Mobile & Embedded Systems",
      icon: "fa-mobile-alt",
      skills: [
        { name: "React Native", level: "Proficient" },
        { name: "Expo Ecosystem", level: "Proficient" },
        { name: "Android Application Flow", level: "Proficient" },
        { name: "Offline-First Sync", level: "Proficient" },
        { name: "QR / Barcode Processing", level: "Advanced" },
        { name: "NFC / RFID Integration", level: "Working Knowledge" }
      ]
    },
    {
      category: "Databases & Data Management",
      icon: "fa-database",
      skills: [
        { name: "MySQL / MariaDB", level: "Advanced" },
        { name: "Relational Modeling & 3NF", level: "Advanced" },
        { name: "SQLite (Embedded Mobile)", level: "Advanced" },
        { name: "Query Optimization & Indexing", level: "Proficient" },
        { name: "Data Driven Governance (DICT)", level: "Executive" },
        { name: "Database Migrations", level: "Advanced" }
      ]
    },
    {
      category: "Engineering Tools & DevOps",
      icon: "fa-tools",
      skills: [
        { name: "Git & GitHub Collaboration", level: "Advanced" },
        { name: "Composer & npm", level: "Advanced" },
        { name: "Vite Bundler", level: "Proficient" },
        { name: "Computer Hardware (Cisco Certified)", level: "Advanced" },
        { name: "Postman / API Testing", level: "Advanced" },
        { name: "Ethical AI & ChatGPT Workflows", level: "Proficient" }
      ]
    },
    {
      category: "Academic & Systems Analysis",
      icon: "fa-project-diagram",
      skills: [
        { name: "Systems Analysis & Design", level: "Advanced" },
        { name: "UML Modeling & Flowcharts", level: "Advanced" },
        { name: "Curriculum & Syllabi Design", level: "Advanced" },
        { name: "Capstone Advising & Mentorship", level: "Advanced" },
        { name: "Futures Thinking & Research CapDev", level: "Institutional" },
        { name: "Records & Archives Management", level: "Certified" }
      ]
    }
  ],

  // 9. Extension, Outreach & Community Engagement
  extension: [
    {
      title: "Community ICT Literacy & Digital Capability Building",
      partner: "Partner Local Government Units & Secondary Educators",
      role: "Lead Trainer & Technical Coordinator",
      status: "Institutional Extension Program",
      period: "2024 – Present",
      description: "Delivering targeted workshops on office productivity tools, digital records management, and cyber hygiene for local community staff and secondary school educators.",
      outcomes: [
        "Enhanced digital competency among local public servants.",
        "Facilitated hands-on modules on internet safety and basic computer troubleshooting."
      ]
    },
    {
      title: "Information Systems Technical Assistance for Local Cooperatives",
      partner: "Agricultural & Campus Cooperatives in Agusan del Sur",
      role: "Technical Consultant / Systems Analyst",
      status: "Extension Project",
      period: "2023 – 2024",
      description: "Assisting community enterprises in assessing their bookkeeping workflows and introducing computerized inventory tracking methodologies.",
      outcomes: [
        "Conducted workflow analysis for retail inventory management.",
        "Provided recommendations on affordable digital record-keeping tools."
      ]
    },
    {
      title: "Hour of Code & Youth in Computing Immersion",
      partner: "Agusan del Sur Senior High Schools",
      role: "Speaker & Code Mentor",
      status: "Outreach Activity",
      period: "Annual Academic Extension",
      description: "Inspiring youth and high school graduates to pursue higher education careers in computing, coding, and software development through interactive programming demonstrations.",
      outcomes: [
        "Mentored aspiring high school STEM students in basic logic formulation and web design.",
        "Promoted enrollment in state university computing degree offerings."
      ]
    }
  ],

  // 10. Professional Service & Verified Memberships (From Civil Service PDS)
  service: [
    {
      role: "Active Member",
      body: "Philippine Institute of 21st Century Educators Inc.",
      period: "Professional Membership",
      type: "Professional Association",
      description: "Engaging in modern pedagogical frameworks, 21st-century educational methodologies, and technology-enhanced teaching strategies."
    },
    {
      role: "Active Member",
      body: "Association of Caraga Educators for Geology, Architecture, Technology and Engineering",
      period: "Regional Association",
      type: "Regional Professional Body",
      description: "Collaborating with educators across the Caraga administrative region in advancing engineering, technology, and applied sciences."
    },
    {
      role: "Active Member / Participant",
      body: "Philippine Society of Information Technology Educators (PSITE)",
      period: "National Organization",
      type: "Computing Professional Body",
      description: "Participating in national computing conventions, programming contests (Code It Like A Pro), and IT education summits."
    },
    {
      role: "Curriculum Review & Revision Committee Member",
      body: "Department of Information Technology, ADSSU",
      period: "2023 – Present",
      type: "Curricular & Academic Governance",
      description: "Participating in aligning the BSIT curriculum with CHED Memorandum Orders (CMO), regional industry standards, and modern software development practices."
    },
    {
      role: "Undergraduate IT Capstone Project Adviser & Panel Evaluator",
      body: "College of Computing and Information Sciences",
      period: "Academic Years 2022 – Present",
      type: "Academic Mentorship",
      description: "Mentoring student development teams through technical feasibility studies, software architecture design, Git collaboration, and formal oral defenses."
    },
    {
      role: "Departmental Information Systems Coordinator",
      body: "Institutional IT Initiatives",
      period: "2023 – Present",
      type: "Institutional Technology Service",
      description: "Liaising departmental technology requirements, computer laboratory software installations, and digital institutional processes."
    }
  ]
};

// Export to window for vanilla browser execution
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}

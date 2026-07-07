export const personalInfo = {
  name: "Vysakh P",
  title: "Software Developer | .NET Backend Engineer",
  tagline: "Building scalable backend systems and AI-powered applications.",
  bio: "Aspiring Backend Software Engineer with hands-on experience in ASP.NET Core, React, SQL Server and modern backend development. Interested in building scalable systems using FastAPI, Layered Architecture, REST APIs and AI-powered applications.",
  email: "vysakhgopal2003@gmail.com",
  phone: "+91 9037246287",
  location: "Malappuram, Kerala",
  github: "https://github.com/VysakhGopal",
  linkedin: "https://www.linkedin.com/in/vysakh-p-355944330",
  resumeUrl: "/resume.pdf",
};

export const skills = [
  {
    category: "Languages",
    icon: "Code2",
    color: "blue",
    items: ["Python", "C#", "Java", "C", "TypeScript"],
  },
  {
    category: ".NET Technologies",
    icon: "Server",
    color: "indigo",
    items: ["ASP.NET Core", "C#", "LINQ", "MVC", "REST APIs", "Stored Procedures"],
  },
  {
    category: "Database",
    icon: "Database",
    color: "violet",
    items: ["PostgreSQL", "SQL Server", "SQLAlchemy"],
  },
  {
    category: "Frontend",
    icon: "Layout",
    color: "sky",
    items: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Auth & Security",
    icon: "Shield",
    color: "emerald",
    items: ["JWT", "Refresh Tokens", "RBAC"],
  },
  {
    category: "AI / ML",
    icon: "Brain",
    color: "pink",
    items: ["Sentence Transformers", "FAISS", "OCR", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    category: "DevOps & Tools",
    icon: "Wrench",
    color: "orange",
    items: ["Docker", "Redis", "GitHub Actions", "Git", "Visual Studio", "VS Code"],
  },
  {
    category: "Concepts",
    icon: "Layers",
    color: "slate",
    items: ["Layered Architecture", "Repository Pattern", "Clean Architecture", "SOLID", "CI/CD"],
  },
];

export const experience = [
  {
    company: "Virtuosoft Technologies",
    role: "Software Developer Intern",
    period: "Present",
    location: "Kerala, India",
    type: "Internship",
    description:
      "Contributing to the development of an enterprise Healthcare ERP System. Building RESTful APIs, responsive React pages, and implementing secure authentication with clean architecture patterns.",
    highlights: [
      "Contributed to the development of an enterprise Healthcare ERP System",
      "Developed RESTful APIs using ASP.NET Core for healthcare modules",
      "Built responsive React pages using HTML, CSS and JavaScript",
      "Implemented JWT authentication and role-based authorization",
      "Worked with MVC, Layered Architecture and Clean Architecture",
      "Developed SQL Server stored procedures and optimized database queries",
      "Collaborated using Git and gained experience with enterprise healthcare workflows",
    ],
    tech: ["ASP.NET Core", "React", "SQL Server", "JWT", "Git", "C#"],
  },
];

export const education = [
  {
    institution: "TKM College of Engineering, Kollam",
    degree: "B.Tech in Electrical and Computer Engineering",
    period: "Expected 2026",
    location: "Kollam, Kerala",
    score: "CGPA: 7.2",
    description:
      "Pursuing a dual-discipline degree combining electrical systems with computer engineering fundamentals.",
  },
  {
    institution: "GHSS Mankada, Malappuram",
    degree: "Higher Secondary Education",
    period: "2021",
    location: "Malappuram, Kerala",
    score: "99.3%",
    description: "Higher Secondary with outstanding academic performance.",
  },
];

export const timeline = [
  {
    year: "2021",
    title: "Higher Secondary — GHSS Mankada",
    description: "Achieved an exceptional 99.3% in Higher Secondary Education, demonstrating strong aptitude in science and mathematics.",
    type: "education",
  },
  {
    year: "2023",
    title: "Started B.Tech at TKM College of Engineering",
    description: "Began Electrical and Computer Engineering (CGPA: 7.2), diving deep into programming, system design, and software development.",
    type: "education",
  },
  {
    year: "2025",
    title: "Joined Virtuosoft Technologies",
    description: "Started as a Software Developer Intern, contributing to an enterprise Healthcare ERP System using ASP.NET Core and SQL Server.",
    type: "work",
  },
  {
    year: "2025",
    title: "Healthcare ERP Development",
    description: "Built RESTful APIs, React pages, implemented JWT auth with RBAC, and worked with Layered Architecture and Clean Architecture patterns.",
    type: "milestone",
  },
  {
    year: "2025",
    title: "AI Document Management System",
    description: "Built a production-ready AI platform with FastAPI, semantic search using FAISS, OCR, Docker, and Redis — expanding into AI-powered backend engineering.",
    type: "milestone",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Document Management System",
    description:
      "A production-ready AI document management platform built with FastAPI, React, TypeScript and PostgreSQL — featuring semantic search, OCR, AI summaries, and containerized deployment.",
    longDescription:
      "Designed with API, Service, and Repository layers following Layered Architecture. Implements JWT auth with refresh tokens, RBAC, semantic search via Sentence Transformers and FAISS, and uses Redis + Celery for background jobs.",
    tech: ["FastAPI", "React", "TypeScript", "PostgreSQL", "Redis", "Docker", "FAISS", "SQLAlchemy"],
    features: [
      "Production-ready platform with FastAPI, React, TypeScript and PostgreSQL",
      "Layered Architecture — API, Service and Repository layers",
      "JWT authentication, refresh tokens, RBAC and secure file management",
      "OCR, AI summaries and semantic search using Sentence Transformers and FAISS",
      "Redis and Celery for caching and background job processing",
      "Containerized deployment with Docker",
    ],
    github: "https://github.com/VysakhGopal/ai-document-management",
    demo: "#",
    category: "AI / Full Stack",
    status: "Completed",
    color: "violet",
  },
  {
    id: 2,
    title: "Visitor Management System",
    description:
      "A role-based visitor management web application with JWT authentication for Admin and Front Desk users — supporting visitor registration, scheduling, real-time check-in/check-out, and overstay alerts.",
    longDescription:
      "Built with ASP.NET Core and React, featuring role-based access control with JWT authentication and a clean REST API backend.",
    tech: ["ASP.NET Core", "React", "SQL Server", "JWT", "REST API", "C#"],
    features: [
      "Role-based access for Admin and Front Desk users with JWT authentication",
      "Visitor registration with full profile management",
      "Visit scheduling with calendar-based planning",
      "Real-time check-in/check-out tracking",
      "Automated overstay alerts and notifications",
      "Clean architecture with ASP.NET Core backend",
    ],
    github: "https://github.com/VysakhGopal/visitor-management",
    demo: "#",
    category: "Full Stack",
    status: "Completed",
    color: "blue",
  },
  {
    id: 3,
    title: "ML-based Crime Linkage for Residential Burglaries",
    description:
      "Machine learning models to correlate burglary cases using location, time, and modus operandi features — improving crime pattern analysis through feature engineering and predictive modeling.",
    longDescription:
      "Developed an ML pipeline that processes burglary case data to identify spatial, temporal, and behavioral patterns. Uses clustering and correlation analysis to surface linked incidents.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
    features: [
      "ML models correlating burglary cases by location, time, and modus operandi",
      "Feature engineering for improved pattern recognition",
      "Geospatial location correlation and heatmap visualization",
      "Temporal pattern analysis to identify time-based crime clusters",
      "Predictive modeling for crime linkage scoring",
      "Exportable analysis reports",
    ],
    github: "https://github.com/VysakhGopal/crime-linkage-ml",
    demo: "#",
    category: "Machine Learning",
    status: "Completed",
    color: "emerald",
  },
];

export const certifications = [
  {
    title: "Python Programming",
    issuer: "Udemy",
    year: "2025",
    icon: "Award",
    color: "orange",
    description: "Comprehensive Python programming covering data structures, OOP, file handling, and practical applications.",
  },
  {
    title: "Joy of Computing Using Python",
    issuer: "NPTEL — IIT Madras",
    year: "2025",
    icon: "GraduationCap",
    color: "blue",
    description: "Elite certification from IIT Madras covering computational thinking, algorithmic problem solving, and Python programming.",
  },
];

export const personalInfo = {
  name: "Vysakh P",
  title: "Software Developer | .NET Backend Engineer",
  tagline: "Building scalable healthcare systems and robust backend APIs.",
  bio: "I'm a Software Developer Intern at Virtuosoft Technologies, where I design and build healthcare APIs using .NET Core and SQL Server. I'm passionate about clean architecture, database optimization, and systems that scale. Currently pursuing Electrical and Computer Engineering at TKM College of Engineering.",
  email: "vysakhgopal2003@gmail.com",
  phone: "+91 9037246287",
  location: "Kerala, India",
  github: "https://github.com/VysakhGopal",
  linkedin: "https://www.linkedin.com/in/vysakh-p-355944330?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  resumeUrl: "/resume.pdf",
};

export const skills = [
  {
    category: "Languages",
    icon: "Code2",
    color: "blue",
    items: ["Python", "C#", "Java", "C"],
  },
  {
    category: "Backend",
    icon: "Server",
    color: "indigo",
    items: [".NET Core", "REST APIs", "Clean Architecture", "ASP.NET"],
  },
  {
    category: "Database",
    icon: "Database",
    color: "violet",
    items: ["SQL Server", "Stored Procedures", "Query Optimization", "T-SQL"],
  },
  {
    category: "Frontend",
    icon: "Layout",
    color: "sky",
    items: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Tools",
    icon: "Wrench",
    color: "slate",
    items: ["Git", "Visual Studio", "VS Code", "Postman"],
  },
  {
    category: "Data Analytics",
    icon: "BarChart2",
    color: "emerald",
    items: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
  },
];

export const experience = [
  {
    company: "Virtuosoft Technologies",
    role: "Software Developer Intern",
    period: "2024 — Present",
    location: "Kerala, India",
    type: "Internship",
    description:
      "Working on production-grade healthcare applications, building and maintaining REST APIs with .NET Core. Responsible for database design, stored procedure optimization, and real-time data processing pipelines.",
    highlights: [
      "Designed and developed healthcare REST APIs using .NET Core and Clean Architecture",
      "Optimized SQL Server stored procedures, reducing query execution time by 40%",
      "Implemented real-time healthcare data processing for patient management workflows",
      "Maintained Git-based CI/CD workflows and participated in code reviews",
      "Built scalable backend architecture supporting concurrent healthcare operations",
    ],
    tech: [".NET Core", "SQL Server", "REST APIs", "Git", "C#"],
  },
];

export const education = [
  {
    institution: "TKM College of Engineering",
    degree: "B.Tech — Electrical and Computer Engineering",
    period: "2022 — 2026",
    location: "Kollam, Kerala",
    description:
      "Pursuing a dual-discipline degree combining electrical systems with computer engineering fundamentals. Active in software development clubs and technical events.",
  },
];

export const timeline = [
  {
    year: "2022",
    title: "Started B.Tech at TKM College of Engineering",
    description: "Began Electrical and Computer Engineering, diving deep into programming fundamentals and system design.",
    type: "education",
  },
  {
    year: "2023",
    title: "Explored Backend Development",
    description: "Built foundational skills in Python, Java, and C#. Started working on REST APIs and database design.",
    type: "milestone",
  },
  {
    year: "2024",
    title: "Joined Virtuosoft Technologies",
    description: "Started as a Software Developer Intern, working on real-world healthcare applications with .NET Core and SQL Server.",
    type: "work",
  },
  {
    year: "2024",
    title: "Healthcare API Development",
    description: "Led development of critical healthcare APIs, optimized stored procedures, and implemented scalable architecture patterns.",
    type: "milestone",
  },
  {
    year: "2025",
    title: "ML & Data Analytics",
    description: "Expanded into machine learning and data analytics, building crime linkage systems using Python and scikit-learn.",
    type: "milestone",
  },
];

export const projects = [
  {
    id: 1,
    title: "Visitor Management System",
    description:
      "A full-stack enterprise visitor management platform built for organizations to streamline visitor registration, scheduling, and real-time monitoring with secure JWT authentication.",
    longDescription:
      "Built a production-ready visitor management system with role-based access control, real-time overstay alerts, and comprehensive audit trails. The system handles concurrent visitor check-ins with optimized SQL Server queries.",
    tech: [".NET Core", "React", "SQL Server", "JWT", "REST API", "C#"],
    features: [
      "Visitor registration with photo capture and ID verification",
      "Visit scheduling with calendar integration",
      "Real-time check-in/check-out tracking",
      "Automated overstay alerts and notifications",
      "Role-based access control with JWT auth",
      "Comprehensive audit logs and reporting",
    ],
    github: "https://github.com/vysakhp/visitor-management",
    demo: "#",
    category: "Full Stack",
    status: "Completed",
    color: "blue",
  },
  {
    id: 2,
    title: "ML-based Crime Linkage System",
    description:
      "An intelligent crime analysis platform that uses machine learning to identify patterns, correlate incidents by location and time, and assist law enforcement in linking related criminal activities.",
    longDescription:
      "Developed a machine learning pipeline that processes crime data to identify spatial and temporal patterns. Uses clustering algorithms and correlation analysis to surface linked incidents that human analysts might miss.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Flask"],
    features: [
      "Crime pattern analysis using ML clustering algorithms",
      "Geospatial location correlation and heatmap visualization",
      "Temporal correlation to identify time-based patterns",
      "Predictive modeling for crime hotspot detection",
      "Interactive data visualization dashboard",
      "Exportable reports for law enforcement",
    ],
    github: "https://github.com/VysakhGopal/Burglary-Detection",
    demo: "#",
    category: "Machine Learning",
    status: "Completed",
    color: "violet",
  },
];

export const certifications = [
  {
    title: "Python Programming",
    issuer: "Udemy",
    year: "2023",
    icon: "Award",
    color: "orange",
    description: "Comprehensive Python programming covering data structures, OOP, and practical applications.",
  },
  {
    title: "Joy of Computing Using Python",
    issuer: "NPTEL — IIT Madras",
    year: "2023",
    icon: "GraduationCap",
    color: "blue",
    description: "Elite certification from IIT Madras covering computational thinking and Python programming.",
  },
];

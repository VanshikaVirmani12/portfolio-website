export const portfolioData = {
  personalInfo: {
    name: "Vanshika Virmani",
    title: "Software Developer",
    email: "vansvirm@gmail.com",
    location: "Toronto, Canada",
    bio: "I'm a builder at heart, whether it's writing code, scaling systems, or turning ideas into projects that make a real-world impact. I love using tech to solve meaningful problems and create things that help people.",
    socialLinks: {
      github: "https://github.com/VanshikaVirmani12",
      linkedin: "https://www.linkedin.com/in/vanshika-virmani-202806226/"
    }
  },
  skills: [
    { name: "JavaScript", level: 90, category: "Programming" },
    { name: "React", level: 85, category: "Frontend" },
    { name: "Node.js", level: 80, category: "Backend" },
    { name: "Python", level: 75, category: "Programming" },
    { name: "TypeScript", level: 80, category: "Programming" },
    { name: "MongoDB", level: 70, category: "Database" },
    { name: "PostgreSQL", level: 75, category: "Database" },
    { name: "AWS", level: 65, category: "Cloud" }
  ],
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      image: "/images/project1.jpg",
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://your-ecommerce-demo.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      image: "/images/project2.jpg",
      githubUrl: "https://github.com/yourusername/taskmanager",
      liveUrl: "https://your-taskmanager-demo.com",
      featured: true
    }
  ],
  experience: [
    {
      id: 1,
      company: "Amazon",
      position: "Software Developer Engineer",
      duration: "May 2025 - Present",
      description: "SDE for Amazon MADS (Measurement and Data Science for Advertising Solutions). Currently on a data warehousing team, building a backend solution for big-data (in petabytes!) for the Ads Portal.",
      technologies: ["AWS", "Spark", "Scala", "Hadoop", "Java"]
    },
    {
      id: 2,
      company: "AWS",
      position: "Technical Account Manager",
      duration: "June 2024 - May 2025",
      description: "Built TAMBR, a Gen-AI based internal tool that analyses customer data to provide valuable financial, operations and security insights about their AWS workloads. This tool is now used orgwide, boosting TAM productivity by over 30%.",
      technologies: ["AWS", "Python", "TypeScript"]
    }
  ],
  education: [
    {
      id: 1,
      institution: "University of Toronto",
      degree: "Computer Science Software Engineering Specialist with Minor in Statistics",
      duration: "Sept 2020 - April 2024",
      description: "Dean's List UTSC (2020-2024), International Scholar Award (Merit Based - valued at $225,000)"
    }
  ]
};
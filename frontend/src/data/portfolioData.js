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
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather and forecasts for multiple cities with interactive charts and maps.",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      image: "/images/project3.jpg",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://your-weather-demo.com",
      featured: false
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
      description: "Built TAMBR, a Gen-AI based internal tool that analyses customer data to provide valuable financial, operations and security insights about their AWS workloads. This tool is now used orgwide, boosting TAM productivity by over 30%. Oversaw workloads for enterprise customers (some with $35M+ ARR) on AWS, advising on solution architecture, implementation, operations, and cost optimization.",
      technologies: ["AWS", "Python", "TypeScript"]
    },
    {
      id: 3,
      company: "AWS",
      position: "Technical Account Manager Intern",
      duration: "June - August 2023",
      description: "Earned AWS Cloud Practitioners and Solutions Architect Associate Certification. Built a DevOps solution using CI/CD pipeline, blue-green deployment strategy, and a monitoring dashboard for an online translation service. Helped them sync their dev and prod instances, reduce costs, and increase their application availability.",
      technologies: ["AWS CDK", "TypeScript", "NodeJS", "CodeDeploy", "ECS", "Route53", "Athena", "Kinesis", "S3", "Lambda", "QuickSight", "CloudWatch"]
    },
    {
      id: 4,
      company: "Nokia",
      position: "Software Engineer Intern",
      duration: "Sept - December 2022",
      description: "Developed and tested Bash scripts for Nokia's CN support tools, enabling faster troubleshooting of complex network issues. Gained hands-on experience with VMs, Linux, and Kubernetes while supporting network operations.",
      technologies: ["C", "C++", "Kubernetes", "Unix shell scripting"]
    }
  ],
  education: [
    {
      id: 1,
      institution: "University of Toronto",
      degree: "Computer Science Software Engineering Specialist with Minor in Statistics",
      duration: "Sept 2020 - April 2024",
      description: "Dean's List UTSC (2020-2024), International Scholar Award (Merit Based - valued at $225,000), Nokia Next Gen Tech Scholarship for Best Intern Project (valued at $15,000)"
    }
  ]
};
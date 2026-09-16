export const personalInfo = {
  name: "MOHSINA",
  role: "AI SOFTWARE DEVELOPER",
  company: "Alonstech",
  workMode: "Remote",
  location: "Kerala, India",
  email: "mohsinaahh@gmail.com",
  github: "https://github.com/Mohsi-nq",
  linkedin: "https://www.linkedin.com/in/mohsina-b3984030b/",
  heroHeadline: "AI Software Developer",
  heroSub: "AI-focused Computer Science postgraduate building practical applications with Python, Machine Learning, Generative AI, LLMs, RAG, intelligent applications, software testing, and modern software engineering practices.",
};

export const aboutContent = {
  title: "ABOUT ME",
  heading: "I build AI systems that solve real problems.",
  bio: [
    "I'm Mohsina, an AI-focused Computer Science postgraduate and AI Software Developer who enjoys turning ideas into working software.",
    "My journey started with Computer Science and gradually moved toward Artificial Intelligence, Machine Learning, Deep Learning, and intelligent software systems.",
    "What interests me most is building applications where AI actually solves a problem — from RAG systems and semantic search to machine learning models and Python-based applications.",
    "Currently, I work remotely as an AI Software Developer at Alonstech, where I'm gaining practical experience across AI development, software testing, automation testing, Agile workflows, documentation, Git/GitHub, CI/CD, and DevOps-oriented practices.",
    "I learn best by building, debugging, experimenting, asking questions, and trying again."
  ],
  labels: ["AI ENGINEERING", "SOFTWARE DEVELOPMENT", "TESTING", "CONTINUOUS LEARNING"]
};

export const capabilities = [
  {
    id: "01",
    title: "ARTIFICIAL INTELLIGENCE",
    description: "Machine learning, deep learning, NLP, LLMs, and intelligent applications."
  },
  {
    id: "02",
    title: "AI APPLICATION DEVELOPMENT",
    description: "Turning AI models and ideas into practical software applications."
  },
  {
    id: "03",
    title: "RAG & LLM ENGINEERING",
    description: "RAG pipelines, embeddings, semantic search, vector databases, and local LLM inference."
  },
  {
    id: "04",
    title: "PYTHON DEVELOPMENT",
    description: "Backend logic, data processing, AI pipelines, automation, and application development."
  },
  {
    id: "05",
    title: "TESTING & QUALITY",
    description: "Manual testing, automation testing, functional testing, regression testing, smoke testing, debugging, and Playwright."
  },
  {
    id: "06",
    title: "AGILE & DEVOPS",
    description: "Git, GitHub, Jira, Confluence, Agile workflows, CI/CD, and DevOps concepts."
  }
];

export const experienceData = [
  {
    period: "2026 — PRESENT",
    role: "AI SOFTWARE DEVELOPER",
    company: "Alonstech · Remote",
    isCurrent: true,
    skills: [
      "AI-oriented software development", "Python development", "Manual testing", 
      "Automation testing", "Functional testing", "Regression testing", "Bug identification", 
      "Debugging", "Test automation", "Jira", "Confluence", "Agile workflows", 
      "Git/GitHub", "CI/CD", "DevOps", "Documentation", "Team collaboration"
    ]
  },
  {
    period: "PREVIOUS",
    role: "AI FULL-STACK ENGINEERING INTERN",
    company: "Mellon AI Labs",
    isCurrent: false,
    skills: [
      "AI application development", "Python", "Machine Learning", "LLM integration", 
      "RAG", "Semantic search", "Embeddings", "Vector databases", "Data preprocessing", 
      "Text chunking", "On-device inference", "Git", "Agile workflows"
    ]
  },
  {
    period: "PREVIOUS",
    role: "AI/ML INTERN",
    company: "Elevate Labs",
    isCurrent: false,
    skills: [
      "Machine learning", "Python", "Data preprocessing", "Feature engineering", 
      "Model training", "Model evaluation", "Debugging", "Model optimization"
    ]
  }
];

export const projectsData = [
  {
    id: "01",
    title: "ON-DEVICE RAG APPLICATION",
    subtitle: "Gemma × Orama Vector Database",
    description: "An on-device Retrieval-Augmented Generation application designed to provide context-aware responses while reducing dependency on cloud-based AI services.",
    problem: "Cloud AI services introduce latency, data privacy concerns, and bandwidth costs when handling sensitive documents locally.",
    approach: "Built a fully local pipeline that chunks documents, generates localized embeddings, and queries an on-device vector database using lightweight local LLM execution.",
    architecture: ["DOCUMENTS", "PREPROCESSING", "CHUNKING", "EMBEDDINGS", "ORAMA", "SEMANTIC SEARCH", "GEMMA", "RESPONSE"],
    highlights: ["RAG pipeline", "Gemma LLM", "Local inference", "Orama Vector Database", "Embeddings", "Semantic search", "Text preprocessing", "Chunking", "Indexing", "Privacy", "Reduced latency", "Offline functionality"],
    technologies: ["Python", "Gemma", "RAG", "Orama", "Vector Database", "Embeddings", "NLP"],
    github: "[GitHub Link]"
  },
  {
    id: "02",
    title: "AUTISM DETECTION FROM 3D BRAIN MRI",
    subtitle: "Deep Learning × Medical Imaging × Explainable AI",
    description: "A deep learning project focused on classification of 3D brain MRI scans, with SHAP used to investigate important brain regions influencing model predictions.",
    problem: "Medical diagnostic models are often black boxes, making clinical trust difficult to establish without interpretable spatial heatmaps.",
    approach: "Utilized 3D Convolutional Neural Networks for direct volumetric scan classification, integrated with SHAP analysis to pinpoint brain structure correlations.",
    architecture: ["MRI DATA", "PREPROCESSING", "CNN", "PREDICTION", "SHAP", "EXPLAINABILITY"],
    highlights: ["EXPLAINABLE AI", "3D MRI Processing", "SHAP Analysis"],
    technologies: ["Python", "TensorFlow", "Keras", "CNN", "Nilearn", "ANTs", "DIPY", "SHAP"],
    github: "[GitHub Link]"
  },
  {
    id: "03",
    title: "INTELLIGENT RESUME SCREENING SYSTEM",
    subtitle: "NLP × Machine Learning × Recruitment Automation",
    description: "A machine-learning-based system designed to automate resume screening by comparing resumes with job descriptions.",
    problem: "Manual resume screening is time-consuming and prone to human oversight during initial candidate filtering.",
    approach: "Extracted textual data with custom NLP pipelines and calculated vector cosine similarities between candidate profiles and job requirements.",
    architecture: ["RESUME", "NLP", "TF-IDF", "VECTOR REPRESENTATION", "COSINE SIMILARITY", "RANKING"],
    highlights: ["Automated TF-IDF vectorization", "Streamlit dashboard"],
    technologies: ["Python", "Scikit-learn", "Pandas", "NLP", "TF-IDF", "Cosine Similarity", "Streamlit"],
    github: "[GitHub Link]"
  },
  {
    id: "04",
    title: "LABOURJET",
    subtitle: "Smart Labour Availability Web Application",
    description: "A web-based platform connecting users with available workers.",
    problem: "Fragmented local labor scheduling makes finding trusted service workers inefficient.",
    approach: "Designed a multi-role web platform managing user requests, admin dispatching, and worker scheduling using MySQL backend architecture.",
    architecture: ["USER REQUEST", "ROLE ROUTER", "MYSQL DB", "ADMIN DASHBOARD", "WORKER DISPATCH"],
    highlights: ["User management", "Worker management", "Admin module", "Job assignment", "Service management", "Booking workflows", "MySQL database", "Role-based modules"],
    technologies: ["Python", "MySQL", "Backend Development"],
    github: "[GitHub Link]"
  }
];

export const techCategories = [
  { name: "AI / MACHINE LEARNING", items: ["Machine Learning", "Deep Learning", "Scikit-learn", "TensorFlow", "PyTorch", "CNN", "Transfer Learning", "Model Optimization"] },
  { name: "GENERATIVE AI", items: ["LLMs", "RAG", "Retrieval-Augmented Generation", "Embeddings", "Semantic Search", "Vector Databases", "Gemma", "NLP", "Local LLM Inference"] },
  { name: "PROGRAMMING", items: ["Python", "SQL", "C"] },
  { name: "DATA", items: ["NumPy", "Pandas", "Matplotlib", "Data Cleaning", "Feature Engineering"] },
  { name: "COMPUTER VISION", items: ["Image Classification", "Image Segmentation", "Medical Imaging", "Data Annotation", "Bounding Boxes"] },
  { name: "DATABASES", items: ["MySQL", "MongoDB", "Firebase", "NoSQL"] },
  { name: "TESTING", items: ["Manual Testing", "Automation Testing", "Functional Testing", "Regression Testing", "Smoke Testing", "Test Case Design", "Bug Identification", "Debugging", "Playwright"] },
  { name: "ENGINEERING", items: ["Git", "GitHub", "Jira", "Confluence", "Agile", "CI/CD", "DevOps", "Documentation"] },
  { name: "TOOLS", items: ["VS Code", "Jupyter Notebook", "Google Colab", "Kaggle"] }
];

export const processSteps = [
  { id: "01", title: "UNDERSTAND", desc: "Understand the problem and requirements." },
  { id: "02", title: "EXPLORE", desc: "Research data, technologies, architecture, and possible solutions." },
  { id: "03", title: "BUILD", desc: "Develop the solution using clean and maintainable code." },
  { id: "04", title: "TEST", desc: "Validate functionality through manual testing and automation testing." },
  { id: "05", title: "IMPROVE", desc: "Optimize performance, reliability, usability, and maintainability." },
  { id: "06", title: "DEPLOY", desc: "Understand deployment, CI/CD, DevOps, and production-oriented workflows." }
];

export const educationData = [
  {
    degree: "MSc COMPUTER SCIENCE — ARTIFICIAL INTELLIGENCE",
    institution: "Cochin University of Science and Technology (CUSAT)",
    period: "2024 — 2026"
  },
  {
    degree: "BSc COMPUTER SCIENCE",
    institution: "University of Calicut",
    period: "2021 — 2024"
  }
];

export const futureRoles = [
  "AI ENGINEER", "AI SOFTWARE ENGINEER", "MACHINE LEARNING ENGINEER", 
  "ML ENGINEER", "PYTHON DEVELOPER", "GENAI / LLM ENGINEER", "SOFTWARE ENGINEER — AI/ML"
];
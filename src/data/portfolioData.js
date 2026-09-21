export const personalInfo = {
  name: 'MOHSINA',
  role: 'AI Software Developer',
  company: 'Alonstech',
  location: 'Remote',
  email: 'mohsinaahh@gmail.com',
  linkedin: 'https://linkedin.com',
  github: 'https://github.com/Mohsi-nq',
  tagline: 'I build AI systems that solve real problems.',
  subTagline: 'Building AI applications with a software-engineering mindset.',
  bio: 'AI-focused Computer Science postgraduate building practical solutions with Artificial Intelligence, Machine Learning, Generative AI, LLMs, RAG, Python, and software engineering.',
  openToWork: 'Open to opportunities in AI Engineering, Machine Learning, Generative AI, and Python development.',
};

export const skillsGrouped = {
  aiMl: {
    title: 'AI / MACHINE LEARNING',
    skills: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'CNN'],
  },
  genAi: {
    title: 'GENERATIVE AI',
    skills: ['LLMs', 'RAG', 'Embeddings', 'Semantic Search', 'Vector Databases', 'Gemma', 'NLP'],
  },
  programming: {
    title: 'PROGRAMMING',
    skills: ['Python', 'SQL', 'C'],
  },
  data: {
    title: 'DATA',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Data Cleaning', 'Feature Engineering'],
  },
  testing: {
    title: 'TESTING & QUALITY',
    skills: ['Manual Testing', 'Automation Testing', 'Functional Testing', 'Regression Testing', 'Smoke Testing', 'Playwright', 'Debugging'],
  },
  engineering: {
    title: 'ENGINEERING & DEVOPS',
    skills: ['Git', 'GitHub', 'Jira', 'Confluence', 'Agile', 'CI/CD', 'DevOps'],
  },
};

export const projects = [
  {
    id: '01',
    title: 'ON-DEVICE RAG APPLICATION',
    subtitle: 'Gemma × Orama Vector Database',
    description: 'An on-device Retrieval-Augmented Generation application designed to provide context-aware responses while reducing dependency on cloud-based AI services.',
    architecture: ['Documents', 'Preprocessing', 'Chunking', 'Embeddings', 'Orama', 'Retrieval', 'Gemma', 'Response'],
    tech: ['Python', 'Gemma', 'RAG', 'Orama', 'Vector Database', 'Embeddings', 'NLP'],
    projectUrl: '#',
    repoUrl: null, // Set actual URL when available
  },
  {
    id: '02',
    title: 'AUTISM DETECTION FROM 3D BRAIN MRI',
    subtitle: 'Deep Learning × Medical Imaging × Explainable AI',
    description: 'Deep learning pipeline analyzing 3D Brain MRI scans for autism detection with integrated model explainability.',
    architecture: ['MRI Data', 'Preprocessing', 'CNN', 'Prediction', 'SHAP Explainability'],
    tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'Nilearn', 'ANTS', 'DIPY', 'SHAP'],
    projectUrl: '#',
    repoUrl: null,
  },
  {
    id: '03',
    title: 'INTELLIGENT RESUME SCREENING SYSTEM',
    subtitle: 'NLP × Machine Learning',
    description: 'Automated candidate matching and resume ranking pipeline based on semantic text vectorization.',
    architecture: ['Resume', 'NLP', 'TF-IDF', 'Vector Representation', 'Cosine Similarity', 'Ranking'],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NLP', 'TF-IDF', 'Cosine Similarity', 'Streamlit'],
    projectUrl: '#',
    repoUrl: null,
  },
  {
    id: '04',
    title: 'LABOURJET',
    subtitle: 'Smart Labour Availability Web Application',
    description: 'A platform streamlining real-time skill matching and availability tracking for local labor forces.',
    architecture: ['User Request', 'Backend Matching', 'MySQL Database', 'Availability Response'],
    tech: ['Python', 'MySQL', 'Backend Development'],
    projectUrl: '#',
    repoUrl: null,
  },
];
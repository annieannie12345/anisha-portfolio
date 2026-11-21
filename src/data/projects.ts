export type Project = {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  technologies: string[];
  highlights: string[];
  workflow: string[];
  outcome: string;
  accent: "violet" | "blue" | "teal";
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "ai-order-supervisor",
    number: "01",
    title: "AI Order Supervisor",
    eyebrow: "Agentic systems · Durable workflows",
    summary: "A coordinated team of agents that takes an order from validation through fulfilment, with durable execution at its core.",
    description: "An AI Order Supervisor coordinates specialized agents for order validation, inventory management, shipping and customer notifications. Temporal workflows provide a reliable backbone for long-running work, retries and recovery.",
    technologies: ["Temporal", "FastAPI", "PostgreSQL", "Ollama", "Qwen2.5", "Next.js"],
    highlights: ["Long-lived Temporal order supervisor workflows", "FastAPI backend and Next.js frontend", "PostgreSQL persistence", "Local Ollama inference with Qwen2.5", "Signals, timers and durable workflow recovery"],
    workflow: ["An order enters through a REST API and is persisted.", "The supervisor evaluates the request and delegates validation, inventory and shipping tasks.", "Temporal orchestrates each activity, retaining state across retries and interruptions.", "A customer notification is sent when the workflow reaches its outcome."],
    outcome: "Designed to make multi-step order operations observable and resilient while keeping specialized agent responsibilities clear.",
    accent: "violet",
    github: "https://github.com/annieannie12345/ai-order-supervisor",
  },
  {
    slug: "medical-rag-assistant",
    number: "02",
    title: "Medical Knowledge Assistant",
    eyebrow: "Retrieval-augmented generation · Hybrid search",
    summary: "A medical document QA system that grounds LLM responses in relevant source material through hybrid retrieval.",
    description: "A retrieval-augmented question-answering system for medical documents. It combines lexical and semantic retrieval to surface relevant evidence, then uses retrieved context to ground generated answers.",
    technologies: ["Flask", "LangChain", "Pinecone", "BM25", "SentenceTransformers", "Ollama"],
    highlights: ["Medical document ingestion and processing", "Intelligent document chunking", "Embedding generation and semantic indexing", "Hybrid retrieval with BM25, TF-IDF and dense embeddings", "Pinecone vector database integration", "Context-grounded responses, evaluation and reranking"],
    workflow: ["Medical documents are ingested, processed and split into useful chunks.", "Chunks are represented as lexical features and dense embeddings, then indexed.", "A user query retrieves candidates through complementary sparse and dense methods.", "Candidates are evaluated and reranked before their context is passed to an LLM."],
    outcome: "Explores how complementary retrieval signals can improve relevance for domain-specific question answering.",
    accent: "blue",
    github: "https://github.com/annieannie12345/medical-chatbot",
  },
  {
    slug: "credit-risk-engine",
    number: "03",
    title: "Credit Risk Engine",
    eyebrow: "Applied machine learning · Decision support",
    summary: "An end-to-end loan default prediction workflow, from data preparation and model comparison to an interactive risk dashboard.",
    description: "A machine learning solution for estimating loan default probability. The project compares classification models, prepares applicant features and makes risk analysis accessible through a Streamlit dashboard.",
    technologies: ["Random Forest", "XGBoost", "CatBoost", "SHAP", "Streamlit"],
    highlights: ["Logistic Regression, Random Forest, XGBoost and CatBoost comparison", "Feature engineering and missing-value handling", "Classification threshold optimization", "ROC-AUC: 0.937", "PR-AUC: 0.893", "Default-class F1: 0.734", "Interactive applicant risk analysis"],
    workflow: ["Applicant data is cleaned and prepared with feature engineering and missing-value handling.", "Several classification approaches are trained and compared.", "A decision threshold is optimized to balance the classification trade-offs.", "The Streamlit dashboard presents applicant-level risk analysis."],
    outcome: "Reported model metrics: ROC-AUC 0.937, PR-AUC 0.893 and default-class F1 0.734.",
    accent: "teal",
    github: "https://github.com/annieannie12345/credit-risk-prediction",
  },
];

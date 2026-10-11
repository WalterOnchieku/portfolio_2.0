const projects = [
  {
    number: "01",
    category: "Backend Engineering",
    title: "VerifyKE",
    description:
      "A reporting platform concept designed to help users flag suspicious activity. The backend combines API development, relational data modelling, and asynchronous message processing.",
    highlights: [
      "REST API with FastAPI",
      "PostgreSQL and SQLAlchemy",
      "RabbitMQ background processing",
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "RabbitMQ", "Docker"],
    repoUrl: "",
    featured: true,
  },
  {
    number: "02",
    category: "Natural Language Processing",
    title: "NLP Text Analysis API",
    description:
      "A text-analysis service that applies a fine-tuned DistilBERT sentiment model to customer reviews and exposes its capabilities through a FastAPI interface.",
    highlights: [
      "Transformer-based sentiment analysis",
      "FastAPI inference endpoints",
      "Evaluation using real customer reviews",
    ],
    technologies: ["Python", "FastAPI", "Transformers", "DistilBERT", "Pandas"],
    repoUrl: "",
    featured: false,
  },
  {
    number: "03",
    category: "Computer Vision",
    title: "Bean Leaf Classifier",
    description:
      "An image-classification project that uses transfer learning to identify bean leaf conditions from images, with a workflow for training, evaluation, and model performance analysis.",
    highlights: [
      "EfficientNetB0 transfer learning",
      "Image augmentation",
      "Confusion matrix and per-class evaluation",
    ],
    technologies: ["Python", "TensorFlow", "Keras", "EfficientNetB0", "Jupyter"],
    repoUrl: "",
    featured: false,
  },
];

export default projects;
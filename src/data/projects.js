
const projects = [
  {
    number: "01",
    category: "AI / ML + Full-Stack Engineering",
    title: "ScamShield KE",
    description:
      "An AI-assisted SMS screening application designed to help users identify potentially suspicious messages. It combines machine learning predictions with rule-based checks to provide an additional layer of awareness when reviewing SMS content.",
    highlights: [
      "TF-IDF and Logistic Regression spam classification",
      "Rule-based suspicious-message detection",
      "FastAPI backend and separate Next.js frontend",
      "Docker and automated testing workflow",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "scikit-learn",
      "Next.js",
      "Docker",
    ],
    repoUrl: "https://github.com/WalterOnchieku/ScamShield-backend",
    demoUrl: "https://scamshield-frontend-ecru.vercel.app/",
    featured: true,
  },
  {
    number: "02",
    category: "Natural Language Processing",
    title: "NLP Text Analysis API",
    description:
      "A text-analysis service that applies a DistilBERT sentiment model to customer reviews and exposes its capabilities through a FastAPI interface.",
    highlights: [
      "Transformer-based sentiment analysis",
      "FastAPI inference endpoints",
      "Evaluation using real customer reviews",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Transformers",
      "DistilBERT",
      "Pandas",
    ],
    repoUrl: "https://github.com/WalterOnchieku/nlp-project",
    demoUrl: "",
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
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "EfficientNetB0",
      "Jupyter",
    ],
    repoUrl: "https://github.com/WalterOnchieku/module_5_project",
    demoUrl: "",
    featured: false,
  },
];

export default projects;

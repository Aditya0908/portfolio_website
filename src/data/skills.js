// Skills data. Each skill's `id` should match the corresponding keycap mesh
// name in the Spline keyboard scene (case-insensitive). When a key is pressed
// in 3D, the click handler looks the skill up by id and renders the detail panel.

export const skillCategories = ["AI & LLMs", "Perception", "Infrastructure", "Robotics"];

export const skills = [
  // AI & LLMs
  {
    id: "rag",
    name: "Multi-modal RAG",
    icon: "📚",
    level: "Advanced",
    category: "AI & LLMs",
    description:
      "Multi-modal retrieval-augmented generation pipelines that combine text, tables, and images into hierarchy-aware vector indices for grounded, traceable answers.",
    relatedProjectIds: ["maintenance-rag"],
  },
  {
    id: "langchain",
    name: "LangChain / Agents",
    icon: "🦜",
    level: "Intermediate",
    category: "AI & LLMs",
    description:
      "Agentic workflows and tool-calling chains for orchestrating LLM reasoning across data sources.",
    relatedProjectIds: ["maintenance-rag", "nlq-excel"],
  },
  {
    id: "neo4j",
    name: "Neo4j / GraphRAG",
    icon: "🕸️",
    level: "Intermediate",
    category: "AI & LLMs",
    description:
      "Knowledge-graph schemas and GraphRAG retrieval — used for spatial scene memory and industrial intelligence.",
    relatedProjectIds: ["spatial-scene", "perceptual-autonomy"],
  },
  {
    id: "vectordb",
    name: "Vector Databases",
    icon: "💾",
    level: "Intermediate",
    category: "AI & LLMs",
    description:
      "FAISS, Qdrant, Milvus — embedding stores tuned for low-latency retrieval on local hardware.",
    relatedProjectIds: ["maintenance-rag"],
  },
  {
    id: "prompt-engineering",
    name: "Prompt Engineering",
    icon: "✍️",
    level: "Advanced",
    category: "AI & LLMs",
    description:
      "Structured prompting, JSON-mode coercion, and self-healing recovery loops for production LLM systems.",
    relatedProjectIds: ["nlq-excel"],
  },
  {
    id: "fastapi",
    name: "FastAPI",
    icon: "⚡",
    level: "Advanced",
    category: "AI & LLMs",
    description:
      "Stateless microservice APIs for LLM serving, OCR pipelines, and async inference orchestration.",
    relatedProjectIds: ["maintenance-rag"],
  },

  // Perception
  {
    id: "yolo",
    name: "YOLO v5/v8",
    icon: "🎯",
    level: "Expert",
    category: "Perception",
    description:
      "Real-time object detection — custom training, deployment, and integration with ROS2 perception stacks.",
    relatedProjectIds: ["yolo-pipeline", "spatial-scene", "perceptual-autonomy"],
  },
  {
    id: "sam2",
    name: "SAM 2",
    icon: "✂️",
    level: "Advanced",
    category: "Perception",
    description:
      "Segment Anything v2 — used for autonomous data labeling and prompt-driven instance segmentation in robot pipelines.",
    relatedProjectIds: ["yolo-pipeline", "prompt-perceptual-nav"],
  },
  {
    id: "groundingdino",
    name: "GroundingDINO",
    icon: "🐕",
    level: "Intermediate",
    category: "Perception",
    description:
      "Open-vocabulary detection driven by natural-language prompts — bridges CLIP semantics with detection bboxes.",
    relatedProjectIds: ["prompt-perceptual-nav"],
  },
  {
    id: "opencv",
    name: "OpenCV",
    icon: "📸",
    level: "Advanced",
    category: "Perception",
    description:
      "Classical CV operations, image preprocessing, and bridging RGB/depth pipelines into ROS2 nodes.",
    relatedProjectIds: ["yolo-pipeline", "spatial-scene", "prompt-perceptual-nav"],
  },
  {
    id: "paddleocr",
    name: "PaddleOCR",
    icon: "📄",
    level: "Advanced",
    category: "Perception",
    description:
      "StructureV3 hierarchical OCR for tables, layouts, and complex industrial PDFs.",
    relatedProjectIds: ["maintenance-rag"],
  },
  {
    id: "pytorch",
    name: "PyTorch",
    icon: "🔥",
    level: "Intermediate",
    category: "Perception",
    description:
      "Model training, fine-tuning, and inference — used for YOLO custom training and embedding pipelines.",
    relatedProjectIds: ["yolo-pipeline"],
  },

  // Infrastructure
  {
    id: "dgx-b200",
    name: "NVIDIA DGX B200",
    icon: "🖥️",
    level: "Intermediate",
    category: "Infrastructure",
    description:
      "On-premise high-compute deployment — Blackwell GPUs for low-latency multimodal inference at scale.",
    relatedProjectIds: ["maintenance-rag"],
  },
  {
    id: "cuda",
    name: "CUDA",
    icon: "⚙️",
    level: "Intermediate",
    category: "Infrastructure",
    description:
      "GPU-accelerated inference and parallelizable kernels — primarily PyTorch + custom ops.",
    relatedProjectIds: ["maintenance-rag"],
  },
  {
    id: "docker",
    name: "Docker",
    icon: "🐳",
    level: "Advanced",
    category: "Infrastructure",
    description:
      "Reproducible service containers for ROS2 + GPU stacks — multi-stage builds and compose orchestration.",
    relatedProjectIds: ["maintenance-rag", "spatial-scene"],
  },
  {
    id: "linux",
    name: "Linux Admin",
    icon: "🐧",
    level: "Advanced",
    category: "Infrastructure",
    description:
      "Bare-metal Ubuntu, NVIDIA driver/CUDA toolkit setup, systemd services for robot/server deployments.",
    relatedProjectIds: [],
  },
  {
    id: "minio",
    name: "MinIO (S3)",
    icon: "☁️",
    level: "Intermediate",
    category: "Infrastructure",
    description:
      "On-prem S3-compatible object storage for vector indices, OCR outputs, and model artifacts.",
    relatedProjectIds: ["maintenance-rag"],
  },
  {
    id: "git",
    name: "Git",
    icon: "🔀",
    level: "Advanced",
    category: "Infrastructure",
    description:
      "Branching strategies, monorepo workflows, and CI/CD-friendly history hygiene.",
    relatedProjectIds: [],
  },

  // Robotics
  {
    id: "ros2",
    name: "ROS2 (Humble)",
    icon: "🤖",
    level: "Advanced",
    category: "Robotics",
    description:
      "Modular ROS2 nodes for perception, TF publishing, semantic mapping, and Nav2-driven autonomy.",
    relatedProjectIds: ["spatial-scene", "perceptual-autonomy", "prompt-perceptual-nav"],
  },
  {
    id: "python",
    name: "Python",
    icon: "🐍",
    level: "Expert",
    category: "Robotics",
    description:
      "Primary language across robotics, AI, and backend services.",
    relatedProjectIds: [
      "maintenance-rag",
      "nlq-excel",
      "yolo-pipeline",
      "spatial-scene",
      "perceptual-autonomy",
      "prompt-perceptual-nav",
    ],
  },
  {
    id: "tf2",
    name: "TF2 / Transforms",
    icon: "🔄",
    level: "Advanced",
    category: "Robotics",
    description:
      "Coordinate-frame math for sensor fusion — base_link ↔ map ↔ camera ↔ object frames.",
    relatedProjectIds: ["spatial-scene", "perceptual-autonomy"],
  },
  {
    id: "cpp",
    name: "C++",
    icon: "⚡",
    level: "Intermediate",
    category: "Robotics",
    description:
      "ROS2 nodes for performance-critical perception (PCL ground segmentation, real-time pipelines).",
    relatedProjectIds: [],
  },
  {
    id: "realsense",
    name: "RealSense / LiDAR",
    icon: "📡",
    level: "Advanced",
    category: "Robotics",
    description:
      "RGB-D depth from Intel RealSense D435i, LiDAR fusion for 3D perception and occupancy grids.",
    relatedProjectIds: ["perceptual-autonomy", "prompt-perceptual-nav"],
  },
  {
    id: "nav2",
    name: "Nav2",
    icon: "🧭",
    level: "Intermediate",
    category: "Robotics",
    description:
      "ROS2 navigation stack — costmap config, BT-driven recovery, semantic-goal autonomous execution.",
    relatedProjectIds: ["perceptual-autonomy"],
  },
];

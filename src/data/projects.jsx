// Each project has core fields (used by the card) and a `caseStudy` object
// (used by the expansion modal). The `diagram` field is a small JSX-returning
// function that renders an SVG block-arrow diagram for the project.

import React from "react";

const arrow = (
  <svg width="32" height="14" viewBox="0 0 32 14" className="opacity-60">
    <path
      d="M0 7 L26 7 M20 1 L26 7 L20 13"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Node = ({ children, color = "blue" }) => {
  const palettes = {
    blue: "border-blue-500/40 bg-blue-500/10 text-blue-200",
    purple: "border-purple-500/40 bg-purple-500/10 text-purple-200",
    green: "border-emerald-500/40 bg-emerald-500/10 text-emerald-200",
    pink: "border-pink-500/40 bg-pink-500/10 text-pink-200",
    amber: "border-amber-500/40 bg-amber-500/10 text-amber-200",
  };
  return (
    <div
      className={`px-3 py-2 rounded-md border font-mono text-[11px] tracking-wide whitespace-nowrap ${palettes[color]}`}
    >
      {children}
    </div>
  );
};

const DiagramRow = ({ children }) => (
  <div className="flex items-center justify-center gap-2 flex-wrap text-slate-500">
    {children}
  </div>
);

export const projects = [
  {
    id: "maintenance-rag",
    title: "Maintenance Intelligence Chatbot (On-Prem RAG)",
    description:
      "End-to-end Multimodal RAG system deployed on NVIDIA DGX B200. Enables natural-language querying over industrial manuals and logs. Features high-fidelity structural parsing (PaddleOCR StructureV3) to convert complex tables and layouts into hierarchy-aware vector indices for precision-first retrieval.",
    use_case:
      "Enterprise-grade, privacy-first industrial assistant that eliminates cloud dependency while providing grounded, traceable answers from local SOPs and fault logs.",
    tech: ["FastAPI", "Python", "PaddleOCR", "MinIO", "Vector DB", "NVIDIA DGX B200", "Docker", "CUDA"],
    status: "completed",
    icon: "🛠️",
    highlights: [
      "Deployed on NVIDIA DGX B200 Hardware",
      "Multimodal OCR & Structural Parsing",
      "Stateless Microservices Architecture",
      "Zero-Cloud Enterprise Security",
    ],
    metrics: "Low-latency inference on B200 | Traceable Citations",
    caseStudy: {
      problem:
        "Industrial maintenance teams sit on thousands of SOPs, fault logs, and equipment manuals — but most live in PDFs with deeply nested tables and diagrams that conventional RAG pipelines flatten and corrupt. The team needed grounded, citeable answers without sending sensitive operational data to the cloud.",
      approach:
        "Built a multimodal RAG stack on NVIDIA DGX B200. PDFs flow through PaddleOCR StructureV3 to preserve table hierarchy and layout regions, get embedded into a hierarchy-aware vector index, and are retrieved alongside the LLM's reasoning. The whole pipeline runs as stateless FastAPI microservices behind MinIO for artifact storage. Every answer carries a citation pointing back to the source document region.",
      results: [
        "Zero cloud dependency — all inference runs on-prem on DGX B200",
        "Low-latency multimodal retrieval over thousands of pages",
        "Every response surfaces traceable citations to source PDFs",
        "Containerized for reproducible enterprise deployment",
      ],
      Diagram: () => (
        <DiagramRow>
          <Node color="blue">PDF Manuals</Node>
          {arrow}
          <Node color="purple">PaddleOCR StructureV3</Node>
          {arrow}
          <Node color="green">Vector Index (MinIO)</Node>
          {arrow}
          <Node color="amber">FastAPI + LLM (B200)</Node>
          {arrow}
          <Node color="pink">Cited Answer</Node>
        </DiagramRow>
      ),
    },
  },
  {
    id: "nlq-excel",
    title: "NLQ over Excel (PandasAI Integration)",
    description:
      "Developed an LLM-driven interface that converts plain-English questions into executable pandas operations. Features a self-healing loop for error recovery and dynamic schema inference, allowing non-technical users to perform complex data analytics without SQL.",
    use_case:
      "Secure, local data analytics for sensitive Excel-based financial or operational records.",
    tech: ["Python", "PandasAI", "LLMs", "Local Runtime", "Data Visualization"],
    status: "completed",
    icon: "📊",
    highlights: [
      "Natural Language to Executable Code",
      "Automatic Error Recovery Loop",
      "Zero-Cloud Privacy Architecture",
    ],
    metrics: "100% Data Privacy | Real-time NL-to-Table",
    caseStudy: {
      problem:
        "Operational teams needed quick analytics on sensitive Excel workbooks but lacked the SQL/pandas skills to do it themselves. Sending the data to a cloud LLM was off the table for compliance reasons.",
      approach:
        "An on-prem LLM converts plain-English prompts into pandas operations against the loaded workbook. A self-healing loop catches execution errors, feeds the traceback back to the model, and retries until the operation succeeds — making the system robust to imperfect code generation. Schema is inferred automatically per workbook so the prompt template adapts without manual setup.",
      results: [
        "Non-technical users perform complex analytics in natural language",
        "Self-healing loop handles malformed code without user intervention",
        "Zero data egress — runs entirely on local hardware",
      ],
      Diagram: () => (
        <DiagramRow>
          <Node color="blue">Excel Workbook</Node>
          {arrow}
          <Node color="purple">Schema Inference</Node>
          {arrow}
          <Node color="amber">LLM → pandas Code</Node>
          {arrow}
          <Node color="green">Self-Healing Executor</Node>
          {arrow}
          <Node color="pink">Result Table</Node>
        </DiagramRow>
      ),
    },
  },
  {
    id: "yolo-pipeline",
    title: "Autonomous Segmentation & YOLO Training Pipeline",
    description:
      "Designed and implemented a self-hosted pipeline using SAM2 for object segmentation from video inputs, integrated with YOLOv5/v8 for automated model training. Users upload a video and YAML class map, select objects once, and the system auto-generates YOLO-format `.txt` labels and a segmented video. The training module supports YOLO version selection, custom hyperparameters, and outputs best.pt along with mAP/precision metrics.",
    use_case:
      "Offline alternative to RoboFlow for privacy-preserving, scalable object detection dataset generation and training.",
    tech: ["Python", "OpenCV", "SAM2", "YOLOv5", "YOLOv8", "PyTorch", "YAML"],
    status: "completed",
    icon: "🎯",
    highlights: [
      "YOLO-compatible Auto-labeling",
      "Versioned Training with Metrics",
      "End-to-End Offline Workflow",
    ],
    metrics: "95% mAP on custom dataset",
    caseStudy: {
      problem:
        "Hand-labeling object detection datasets is the slowest part of training a custom YOLO. Cloud labeling tools (RoboFlow) work well but require uploading footage that's often confidential.",
      approach:
        "An offline pipeline that takes a video plus a YAML class map. Users tap each target object once on the first frame; SAM2 propagates the masks across frames, and the masks are converted into YOLO-format `.txt` labels and a segmented preview video. The training module then runs YOLOv5/v8 with user-chosen hyperparameters and emits best.pt + a metrics report.",
      results: [
        "Replaces RoboFlow workflow with zero data egress",
        "Single-tap labeling per target via SAM2 propagation",
        "End-to-end: video in → trained model + metrics out",
        "95% mAP on internal custom dataset",
      ],
      Diagram: () => (
        <DiagramRow>
          <Node color="blue">Video + YAML</Node>
          {arrow}
          <Node color="purple">SAM2 Masks</Node>
          {arrow}
          <Node color="green">YOLO Labels (.txt)</Node>
          {arrow}
          <Node color="amber">YOLOv5/v8 Training</Node>
          {arrow}
          <Node color="pink">best.pt + mAP</Node>
        </DiagramRow>
      ),
    },
  },
  {
    id: "spatial-scene",
    title: "SpatialScene: ROS2 Semantic Mapping & Object Graph Logger",
    description:
      "Engineered a ROS2 system that detects objects via YOLOv8, computes their positions in both robot (base_link) and global (map) frames using TF2, and logs annotated data into a Neo4j knowledge graph. Supports proximity-based scene querying, semantic localization, and memory-based re-alignment for re-identifying objects during revisits. Built with modular ROS2 nodes and integrates OpenAI Vision for optional scene descriptions.",
    use_case:
      "Persistent scene memory and semantic map-building for autonomous robots operating in dynamic or repetitive environments.",
    tech: ["ROS2", "Python", "Neo4j", "TF2", "OpenAI Vision", "Transformations"],
    status: "completed",
    icon: "🧠",
    highlights: [
      "YOLO-based Object Detection in ROS2",
      "Map-Frame Localization via TF",
      "Neo4j Scene Graph Logging & Querying",
    ],
    metrics: "50+ object instances logged with 92% map-frame consistency across test runs",
    caseStudy: {
      problem:
        "Mobile robots running SLAM forget *what* is where — the geometric map remembers walls, not objects. Coming back to a known room and asking 'what's the closest chair?' is hard without a semantic layer.",
      approach:
        "A ROS2 node detects objects with YOLOv8, then resolves each detection's pose into both base_link and map frames via TF2 transforms. Each detection becomes a node in a Neo4j knowledge graph with spatial relationships and timestamps. Queries like 'nearest object to me' or 'objects in this room' run as Cypher against the graph. On revisits, the robot re-aligns by matching the current frame's detections to graph history.",
      results: [
        "50+ object instances logged across runs",
        "92% map-frame consistency on revisit alignment",
        "Cypher queries answer proximity and room-membership questions",
        "Optional OpenAI Vision integration for richer scene captions",
      ],
      Diagram: () => (
        <DiagramRow>
          <Node color="blue">Camera Stream</Node>
          {arrow}
          <Node color="purple">YOLOv8</Node>
          {arrow}
          <Node color="amber">TF2 (base_link → map)</Node>
          {arrow}
          <Node color="green">Neo4j Scene Graph</Node>
          {arrow}
          <Node color="pink">Cypher Queries</Node>
        </DiagramRow>
      ),
    },
  },
  {
    id: "perceptual-autonomy",
    title: "Perceptual Autonomy Stack: Multi-Modal Spatial Intelligence for Mobile Robots",
    description:
      "Engineered a fully modular spatial intelligence architecture with dynamic environment adaptation in ROS2 that fuses LiDAR, RGB, and depth data from Intel RealSense D435i for real-time perception, object-aware localization, and autonomous navigation. The system performs 360° semantic scene annotation, transforms detections into the global (map) frame, and persists spatially anchored object graphs in Neo4j. Upon re-entry into a known environment, the robot aligns itself, detects the current frame's object set, verifies spatial feasibility against the occupancy grid, and triggers closed-loop navigation via Nav2 to dynamically reachable semantic goals.",
    use_case:
      "SLAM-light perceptual autonomy for mobile robots — ideal for indoor search, semantic patrol, memory-guided navigation, and re-identification tasks where environment context is object-centric rather than geometry-centric.",
    tech: ["ROS2", "Neo4j", "TF2", "LiDAR", "Nav2", "OccupancyGrid", "OpenCV", "Depth", "RealSense D435i"],
    status: "completed",
    icon: "🧭",
    highlights: [
      "Multi-Modal Sensor Fusion Pipeline",
      "Global Object Pose Anchoring with TF2",
      "Graph-Based Memory and Goal Recall",
      "Nav2-Driven Autonomous Goal Execution",
    ],
    metrics:
      "Object re-identification accuracy: 93% | Map-frame alignment error < 0.5m | Autonomous goal reach rate: 87% | End-to-end latency per 90° cycle: ~2.5s",
    caseStudy: {
      problem:
        "Pure geometric SLAM doesn't carry semantic context — the robot can navigate but can't say 'go to the chair I saw yesterday.' Object-centric memory needs to be persistent, queryable, and feed back into navigation.",
      approach:
        "Modular ROS2 stack that fuses LiDAR, RGB, and RealSense D435i depth. The robot performs 360° semantic annotation, transforms every detection into the map frame via TF2, and persists object-anchored nodes into Neo4j. On revisit, it aligns using the object graph, checks reachability against the occupancy grid, and dispatches Nav2 goals to dynamically reachable semantic targets.",
      results: [
        "93% object re-identification accuracy on revisits",
        "<0.5m map-frame alignment error",
        "87% autonomous goal-reach rate",
        "~2.5s end-to-end latency per 90° annotation cycle",
      ],
      Diagram: () => (
        <DiagramRow>
          <Node color="blue">LiDAR + RGB + Depth</Node>
          {arrow}
          <Node color="purple">360° Semantic Annotation</Node>
          {arrow}
          <Node color="amber">Neo4j Object Graph</Node>
          {arrow}
          <Node color="green">Nav2 Goal Execution</Node>
        </DiagramRow>
      ),
    },
  },
  {
    id: "prompt-perceptual-nav",
    title: "Prompt-Guided Perceptual Navigation: Real-Time Object Search & Tracking for Quadruped Robots",
    description:
      "Developed a real-time visual grounding and tracking pipeline for quadruped robots using GroundingDINO (CLIP-based) for open-vocabulary object detection based on natural language prompts, paired with Segment Anything (SAM) for precise instance segmentation. The system operates live in dynamic environments, continuously detecting and re-identifying the target object while the robot performs on-the-fly path planning to approach it. Capable of handling moving objects, the pipeline fuses RGB and depth data to estimate 3D object position and adjust navigation in real time.",
    use_case:
      "Search-and-approach autonomy in unstructured or dynamic environments — ideal for assistive robotics, warehouse picking, inspection, and human-robot interaction where object identity is defined in natural language.",
    tech: [
      "ROS2",
      "GroundingDINO",
      "Segment Anything (SAM)",
      "CLIP",
      "Real-Time Path Planning",
      "OpenCV",
      "Depth Estimation",
      "RealSense D435i",
    ],
    status: "completed",
    icon: "🤖",
    highlights: [
      "Prompt-Based Open-Vocabulary Object Detection",
      "Pixel-Accurate Segmentation with SAM",
      "RGB-D Fusion for 3D Object Localization",
      "Dynamic Path Planning for Moving Targets",
      "Real-Time Quadruped Control",
    ],
    metrics:
      "Detection latency: ~120ms | Segmentation IoU > 90% | Real-time tracking refresh: 10Hz | Dynamic target reacquisition success rate: 87%",
    caseStudy: {
      problem:
        "Telling a quadruped 'find the red backpack' in a dynamic warehouse is hard — closed-vocabulary detectors don't know 'red backpack' as a class, and the target may move while the robot navigates.",
      approach:
        "GroundingDINO turns the natural-language prompt into open-vocabulary detections, SAM refines each into a pixel-accurate mask, and depth from RealSense D435i lifts the centroid into 3D. A real-time path planner re-targets continuously as the object moves, fusing detection updates at 10Hz with the robot's local plan.",
      results: [
        "~120ms detection latency end-to-end",
        ">90% segmentation IoU",
        "10Hz tracking refresh on moving targets",
        "87% reacquisition rate on dynamic targets",
      ],
      Diagram: () => (
        <DiagramRow>
          <Node color="blue">NL Prompt</Node>
          {arrow}
          <Node color="purple">GroundingDINO</Node>
          {arrow}
          <Node color="amber">SAM Mask</Node>
          {arrow}
          <Node color="green">RGB-D 3D Lift</Node>
          {arrow}
          <Node color="pink">Real-Time Quadruped Plan</Node>
        </DiagramRow>
      ),
    },
  },
];

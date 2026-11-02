/* ==========================================================================
   Portfolio data — single source of truth for projects, experience, skills.
   Add a project here + its case study blocks; pages update automatically.
   ========================================================================== */

window.SITE = {
  name: "Mimansa Dahiya",
  initials: "MD",
  role: "Business Analytics · Data Science · Applied AI",
  headline: "Turning complex data into decisions, products, and intelligent systems.",
  intro:
    "I'm a Business Analytics graduate who builds analytical systems end-to-end — from data pipelines and predictive models to multi-agent AI applications and interactive dashboards. My background in economics shapes how I think about the questions worth asking, and my work in ML and data engineering shapes how I answer them.",
  location: "Seattle, WA",
  email: "dahiya.mimansa@gmail.com",
  linkedin: "https://www.linkedin.com/in/mimansa-dahiya",
  github: "https://github.com/mimansadahiya",
  resume: "assets/Mimansa-Dahiya-Resume.pdf"
};

window.CATEGORIES = {
  "data-science": "Data Science & Machine Learning",
  "applied-ai": "Applied AI & Multi-Agent Systems",
  "financial-analytics": "Financial Analytics",
  "business-analytics": "Business & Customer Analytics",
  "computer-vision": "Computer Vision & Sports Analytics",
  "data-engineering": "Data Engineering"
};

/* -------------------------------------------------------------------------
   Experience (employment only — client-sponsored academic work is separate)
   ------------------------------------------------------------------------- */
window.EXPERIENCE = [
  {
    role: "Lead Financial & Business Intelligence Analyst",
    org: "Dark Alpha Capital",
    orgKind: "Professional",
    location: "Remote",
    period: "Aug 2026 – Present",
    bullets: [
      "Source private-equity deals while leading the Deal Sourcing Data Lake, using Python DAGs to reduce pipeline latency and expand deal flow.",
      "Direct an AI-assisted diligence engine that automates parts of underwriting, cutting the time to produce a valuation model from days to hours.",
      "Lead the firm's CRM transition across developer and deal teams, establishing data-governance and approval gates that drove broad platform adoption.",
      "Coordinate a small engineering team on deal-sourcing tooling built on Cloudflare D1, enforcing access controls and stage-approval workflows."
    ]
  },
  {
    role: "Ticket Sales Data Analyst Intern",
    org: "USF Athletics",
    orgKind: "Internship",
    location: "University of South Florida",
    period: "Jan 2025 – May 2025",
    bullets: [
      "Consolidated and cleaned 417,000 ticket records across five NCAA Division I programs, verifying integrity of a seven-figure revenue dataset.",
      "Built Python dashboard pipelines to replace manual spreadsheet workflows for inventory tracking and staff analytics.",
      "Analyzed cross-channel demand and historical matchup data to inform tiered pricing for premium games."
    ]
  },
  {
    role: "Graduate Assistant, Off-Campus Housing",
    org: "Cal Poly",
    orgKind: "Graduate Assistantship",
    location: "San Luis Obispo, CA",
    period: "Aug 2025 – Jun 2026",
    bullets: [
      "Coordinated housing-program outreach, event logistics, and financial-planning workshops for students moving off campus.",
      "Advised students through residential transitions and connected them to legal, code-enforcement, and university housing resources."
    ]
  }
];

/* -------------------------------------------------------------------------
   Skills
   ------------------------------------------------------------------------- */
window.SKILLS = [
  {
    title: "Data Science & Machine Learning",
    items: [
      "Python", "scikit-learn", "LightGBM", "XGBoost", "PCA",
      "K-Means", "Hierarchical Clustering", "Predictive Modeling", "Feature Engineering"
    ]
  },
  {
    title: "Applied AI",
    items: [
      "LLMs (Gemini, OpenAI)", "RAG Systems", "Vector Databases (Qdrant)",
      "Sentence Transformers", "Multi-Agent Orchestration", "Search Grounding"
    ]
  },
  {
    title: "Data Engineering",
    items: [
      "SQL", "ETL", "REST APIs", "Data Pipelines", "pandas", "NumPy", "PySpark", "Cloudflare D1"
    ]
  },
  {
    title: "Financial Analytics",
    items: [
      "DCF", "CAPM", "WACC", "Financial Modeling", "Churn Analytics", "Revenue Analysis", "Cohort Analysis"
    ]
  },
  {
    title: "Visualization",
    items: [
      "Tableau", "Power BI", "Streamlit", "Plotly", "Matplotlib", "Recharts"
    ]
  },
  {
    title: "Software & Development",
    items: [
      "React", "Next.js", "TypeScript", "Git", "Docker", "REST APIs", "Agile/Scrum"
    ]
  }
];

/* -------------------------------------------------------------------------
   Projects
   ------------------------------------------------------------------------- */
window.PROJECTS = [
  {
    id: "nvidia-developer-analytics",
    title: "Developer Ecosystem Analytics",
    org: "NVIDIA",
    category: "data-science",
    status: "completed",
    type: "academic",
    client: "Cal Poly · NVIDIA (client-sponsored)",
    featured: true,
    accent: "#76b900",
    summary:
      "Segmented a large developer population into behavioral archetypes to understand engagement, drop-off, and long-term adoption inside a developer program.",
    shortRole: "Pod lead — data pipeline, feature engineering, segmentation, dashboard",
    tech: ["Python", "pandas", "scikit-learn", "Streamlit", "Plotly"],
    links: {},
    caseStudy: {
      lead:
        "A Cal Poly client-sponsored project examining how developers move through a program ecosystem over time — where they engage, where they stall, and what separates sustained adoption from quiet churn.",
      blocks: [
        {
          type: "kpis",
          dark: false,
          items: [
            { value: "4", label: "Behavioral archetypes identified", note: "Ghosts · Slow Starters · Rising Stars · Power Users" },
            { value: "6", label: "Person pod I led", note: "within a larger multi-group engagement" },
            { value: "2", label: "Clustering methods evaluated", note: "K-Means & agglomerative hierarchical" }
          ]
        },
        {
          type: "roleSplit",
          mine: {
            title: "What I owned",
            items: [
              "Data cleaning and unification — merging raw activity logs, contact tables, and SDK download data.",
              "Feature engineering, including engagement and time-based developer features.",
              "Exploratory data analysis and user segmentation.",
              "The interactive Streamlit developer-profile explorer."
            ]
          },
          team: {
            title: "What the team owned",
            items: [
              "Markov-chain transition modeling.",
              "Survival analysis.",
              "React frontend and executive presentation development."
            ]
          }
        },
        {
          type: "text",
          title: "Objective",
          body:
            "The team analyzed millions of developer interaction records — engagement events, SDK downloads, and developer profiles — to understand <strong>engagement patterns, drop-off points, and behavioral archetypes</strong>. The broader goal was to map developer journeys and surface the factors associated with sustained adoption."
        },
        {
          type: "text",
          title: "Methodology",
          body:
            "I tested <strong>K-Means</strong> and <strong>agglomerative hierarchical clustering</strong> and evaluated both with the <strong>Calinski-Harabasz</strong> and <strong>Davies-Bouldin</strong> scores. K-Means with four clusters gave the most interpretable segmentation, producing four behavioral archetypes:"
        },
        {
          type: "list",
          items: [
            "<strong>Ghosts</strong> — signed up and disappeared quickly.",
            "<strong>Slow Starters</strong> — gradual, delayed engagement.",
            "<strong>Rising Stars</strong> — accelerating, increasingly active developers.",
            "<strong>Power Users</strong> — sustained, high-frequency engagement."
          ]
        },
        {
          type: "text",
          title: "The dashboard",
          body:
            "I personally built a Streamlit developer-profile explorer with developer ID search and dropdown selection, KPI cards (total activities, distinct interaction types, average activity score, longest inactivity gap, last seen), account, geographic and organizational details, an interaction-category bar chart, an event timeline, and a sortable raw activity table."
        },
        {
          type: "callout",
          label: "Public disclosure",
          note: true,
          text:
            "Real developer identifiers, organization names, internal contact details, and confidential records are not published. The demonstration below uses synthetic data and is an independent illustration — not actual NVIDIA data or company findings."
        },
        {
          type: "panel",
          dark: true,
          title: "Illustrative demonstration (synthetic data)",
          intro:
            "A representative view of the kind of analysis and dashboard this project produced, built from independently generated synthetic data.",
          blocks: [
            {
              type: "chart",
              chartType: "donut",
              title: "Behavioral segment mix",
              caption: "Synthetic share of developers by archetype",
              data: [
                { label: "Ghosts", value: 34 },
                { label: "Slow Starters", value: 26 },
                { label: "Rising Stars", value: 22 },
                { label: "Power Users", value: 18 }
              ]
            },
            {
              type: "chart",
              chartType: "bar",
              title: "Engagement distribution",
              caption: "Synthetic activity-score histogram across the developer base",
              data: [
                { label: "0–20", value: 38 },
                { label: "20–40", value: 24 },
                { label: "40–60", value: 17 },
                { label: "60–80", value: 13 },
                { label: "80–100", value: 8 }
              ]
            }
          ]
        },
        {
          type: "diagram",
          dark: true,
          title: "Data pipeline (generic)",
          src: "assets/diagrams/nvidia-pipeline.svg",
          caption:
            "Generic structure of the cleaning-and-segmentation pipeline. Individual components are illustrative; exact internal processes are not disclosed."
        },
        {
          type: "text",
          title: "Challenges & decisions",
          body:
            "The hardest part was unification — the same developer could appear across activity logs, contact tables, and SDK downloads with no shared identifier. Building a reliable join, then engineering time-based features that captured the *shape* of engagement (not just totals) was what made the eventual segmentation meaningful."
        },
        {
          type: "text",
          title: "Tools",
          body:
            "Python, pandas, NumPy, scikit-learn, Matplotlib, Plotly, Streamlit, pycountry, and Jupyter. The broader team also used React, Vite, Recharts, D3-sankey, PyArrow, and survival-analysis libraries."
        }
      ]
    }
  },

  {
    id: "ai-stock-analyst",
    title: "AI Stock Investment Analyst",
    org: "Independent",
    category: "applied-ai",
    status: "completed",
    type: "independent",
    featured: true,
    accent: "#2563eb",
    summary:
      "A multi-agent equity research system that combines deterministic financial calculations with seven grounded LLM research agents to produce a structured stock report.",
    shortRole: "Architecture, orchestration, three agents, dashboard, testing, docs",
    tech: ["Python", "Gemini 2.5 Flash", "Streamlit", "yfinance", "Plotly"],
    links: {
      code: "https://github.com/mimansadahiya/ai-stock-analyst",
      live: "https://sbk2ye3rhnke4sh2cqwylf.streamlit.app",
      video: "https://youtu.be/YK_Y4M_PsSo"
    },
    caseStudy: {
      lead:
        "Equity research pulls from scattered sources — statements, prices, news, filings, macro data — and general-purpose LLMs will happily hallucinate the numbers. This tool keeps the math deterministic and delegates only the qualitative work to specialized, search-grounded agents.",
      blocks: [
        {
          type: "kpis",
          dark: false,
          items: [
            { value: "7", label: "Qualitative research agents", note: "one per research area" },
            { value: "3", label: "Deterministic quant modules", note: "metrics · valuation · risk" },
            { value: "13", label: "Unit tests authored", note: "in tests/test_agents.py" },
            { value: "1", label: "Synthesis agent", note: "merges quant + qualitative" }
          ]
        },
        {
          type: "text",
          title: "The problem",
          body:
            "Manual equity research means gathering financial statements, cash-flow data, historical prices, technical indicators, news, competitor filings, and macroeconomic context — then reconciling all of it by hand. Generic LLM chatbots can <strong>hallucinate financial figures</strong> and make arithmetic errors. This system separates <strong>deterministic financial calculations</strong> from <strong>AI-generated qualitative analysis</strong> so the numbers stay correct."
        },
        {
          type: "diagram",
          dark: true,
          title: "System architecture",
          src: "assets/diagrams/ai-stock-architecture.svg",
          caption:
            "Verified against the repository: data is fetched via yfinance, quantitative modules run deterministic calculations, seven specialized agents produce grounded qualitative research, and a synthesis agent combines both into the final report."
        },
        {
          type: "text",
          title: "Deterministic quant layer",
          body:
            "The quantitative side never asks an LLM to do math. It computes:"
        },
        {
          type: "list",
          items: [
            "<strong>Valuation</strong> — DCF, CAPM-driven WACC, peer-multiple (P/E) valuation, and a Graham-formula intrinsic value.",
            "<strong>Metrics</strong> — financial ratios plus technical indicators (SMA, EMA, RSI, MACD).",
            "<strong>Risk</strong> — annualized volatility, 95% Value at Risk, market beta, and maximum drawdown."
          ]
        },
        {
          type: "text",
          title: "Qualitative agent layer",
          body:
            "Seven specialized agents each own one research area, powered by <code>gemini-2.5-flash</code> with live search grounding (Google Search Grounding and DuckDuckGo Lite):"
        },
        {
          type: "panel",
          dark: true,
          title: "The seven qualitative agents",
          blocks: [
            {
              type: "panelList",
              items: [
                { idx: "01", strong: "Company overview", text: "Profile and strategy compilation." },
                { idx: "02", strong: "Macro outlook", text: "Interest rates, growth, and macro trends." },
                { idx: "03", strong: "Competitive landscape", text: "Peer moats and market positioning." },
                { idx: "04", strong: "News & sentiment", text: "Financial news and market sentiment." },
                { idx: "05", strong: "Industry analysis", text: "Market sizing and industry dynamics." },
                { idx: "06", strong: "Financial performance", text: "Historical operational analysis." },
                { idx: "07", strong: "Major risks", text: "Governance, regulatory, and financial risks." }
              ]
            }
          ]
        },
        {
          type: "roleSplit",
          mine: {
            title: "What I built",
            items: [
              "The competitive-landscape, news & sentiment, and major-risk agents.",
              "Unit tests in tests/test_agents.py.",
              "The full orchestration flow in src/app.py — sequential execution, API pacing, and retries with backoff.",
              "The local disk cache with dynamic invalidation and a JSON brace-matching parser.",
              "The dashboard redesign and custom CSS.",
              "Repository documentation, architecture diagrams, and walkthrough materials."
            ]
          },
          team: {
            title: "What others contributed",
            items: [
              "Initial standalone prototypes and scaffolding for some components.",
              "My work integrated and rebuilt these into the final, unified architecture."
            ]
          }
        },
        {
          type: "text",
          title: "What makes it different",
          body:
            "The design keeps the parts that need to be exact — valuation math, ratios, risk metrics — <strong>deterministic</strong>, and confines the LLM to qualitative research where it is genuinely useful. On top of that:"
        },
        {
          type: "list",
          items: [
            "Specialized agents instead of one general chatbot.",
            "Live search grounding to reduce stale or invented claims.",
            "API pacing and retry handling for the free tier.",
            "Local caching for fast repeat lookups.",
            "A rule-based fallback when no API key is supplied."
          ]
        },
        {
          type: "callout",
          label: "Not investment advice",
          note: true,
          text:
            "This is an analytical research tool, not personalized investment advice. It organizes and calculates; it does not tell anyone what to buy."
        },
        {
          type: "diagram",
          dark: false,
          title: "Quantitative vs. qualitative flow",
          src: "assets/diagrams/ai-stock-flow.svg",
          caption:
            "Deterministic calculations run in parallel with grounded agent research, then meet at the synthesis agent."
        },
        {
          type: "links",
          links: [
            { label: "Source code", href: "https://github.com/mimansadahiya/ai-stock-analyst", kind: "code" },
            { label: "Live demo", href: "https://sbk2ye3rhnke4sh2cqwylf.streamlit.app", kind: "live" },
            { label: "Walkthrough video", href: "https://youtu.be/YK_Y4M_PsSo", kind: "video" }
          ]
        }
      ]
    }
  },

  {
    id: "oracle-churn-analytics",
    title: "Enterprise Churn Analytics",
    org: "Oracle",
    category: "business-analytics",
    status: "completed",
    type: "academic",
    client: "Cal Poly · Oracle (client-sponsored)",
    featured: true,
    accent: "#c74634",
    summary:
      "A graduate capstone that segmented enterprise accounts and built a risk-scoring framework to surface recurring-revenue churn risk.",
    shortRole: "Data cleaning, segmentation, risk scoring, SQL, revenue-risk analysis",
    tech: ["SQL", "Python", "scikit-learn", "pandas", "Quarto"],
    links: {},
    caseStudy: {
      lead:
        "A Cal Poly client-sponsored capstone examining enterprise customer churn and recurring-revenue risk — who was likely to leave, how much revenue was exposed, and where an earlier intervention could have changed the outcome.",
      blocks: [
        {
          type: "kpis",
          dark: false,
          items: [
            { value: "15", label: "Risk factors", note: "grouped into four categories" },
            { value: "4", label: "Risk categories", note: "lifecycle · product · support · usage" },
            { value: "2", label: "Clustering methods", note: "K-Means primary, hierarchical explored" }
          ]
        },
        {
          type: "callout",
          label: "How to read the numbers",
          note: false,
          text:
            "Revenue figures below come from the masked, anonymized project sample provided to the university — not from confidential Oracle financial reports."
        },
        {
          type: "text",
          title: "Objective",
          body:
            "Identify churn drivers, understand revenue exposure, and evaluate the relationship between product adoption and retention. The goal was a framework for <strong>earlier customer-success intervention</strong>, not just an after-the-fact churn report."
        },
        {
          type: "roleSplit",
          mine: {
            title: "What I owned",
            items: [
              "Data cleaning and pipeline standardization.",
              "SQL extraction and joins, including resolving missing account identifiers.",
              "Classification corrections and cohort construction.",
              "Customer segmentation and the churn risk-scoring framework.",
              "Cross-sell and revenue-risk analysis."
            ]
          },
          team: {
            title: "What the team owned",
            items: [
              "Customer support-ticket analysis.",
              "Regional patterns and visualization.",
              "The final executive presentation."
            ]
          }
        },
        {
          type: "text",
          title: "Workflow",
          body:
            "The analytical workflow moved from raw data to a prioritized intervention list:"
        },
        {
          type: "list",
          ordered: true,
          items: [
            "SQL extraction and table joins.",
            "Missing account-identifier resolution.",
            "Classification correction and exploratory analysis.",
            "Contract and renewal-pattern analysis.",
            "Customer segmentation (K-Means; hierarchical tested in exploration).",
            "Multi-factor risk scoring.",
            "Risk-tier prioritization and revenue-exposure analysis.",
            "Retention recommendations."
          ]
        },
        {
          type: "text",
          title: "Segmentation",
          body:
            "K-Means was the primary clustering algorithm, validated with <strong>elbow analysis, silhouette analysis, and within-cluster sum of squares</strong>. Hierarchical clustering was tested during exploration. Segments were shaped by product breadth, account lifecycle, and account size."
        },
        {
          type: "text",
          title: "Risk scoring",
          body:
            "Rather than a conventional supervised classifier, I built a <strong>weighted scoring framework informed by statistical analysis</strong> — fifteen risk factors across four categories: contract & lifecycle patterns, product breadth, customer-support behavior, and platform-usage activity. The framework was evaluated on recall, ROC-AUC, precision, and business-capture metrics."
        },
        {
          type: "panel",
          dark: true,
          title: "Illustrative demonstration (synthetic data)",
          intro:
            "An independent illustration of the kind of analysis this project produced. Not actual Oracle customer data or company findings.",
          blocks: [
            {
              type: "chart",
              chartType: "bar",
              title: "Risk-tier distribution",
              caption: "Synthetic distribution of accounts across risk tiers",
              data: [
                { label: "Critical", value: 14 },
                { label: "High", value: 23 },
                { label: "Medium", value: 34 },
                { label: "Low", value: 29 }
              ]
            },
            {
              type: "panelList",
              title: "The four risk-factor categories",
              items: [
                { idx: "01", strong: "Contract & lifecycle", text: "Renewal timing, tenure, contract structure." },
                { idx: "02", strong: "Product breadth", text: "Number of products adopted and depth of use." },
                { idx: "03", strong: "Support behavior", text: "Ticket volume, severity, and resolution friction." },
                { idx: "04", strong: "Usage activity", text: "Platform activity levels and declining trends." }
              ]
            }
          ]
        },
        {
          type: "text",
          title: "What we recommended",
          body:
            "Recommendations focused on immediate intervention for critical-risk accounts, cross-selling to increase product breadth, improving early product adoption, and monitoring support friction and usage decline as leading indicators. A standalone dashboard was <strong>not</strong> part of this project's scope."
        },
        {
          type: "text",
          title: "Deliverables & tools",
          body:
            "Reproducible Python and Quarto code, customer segmentation, risk-tier classifications, prioritized intervention lists, and an executive recommendation deck. Tools: SQL, Python, pandas, NumPy, scikit-learn, Quarto, Excel."
        }
      ]
    }
  },

  {
    id: "kinetix-biomechanics",
    title: "Kinetix Biomechanics",
    org: "Independent",
    category: "computer-vision",
    status: "in-progress",
    type: "independent",
    featured: true,
    accent: "#3f8f5b",
    summary:
      "A video-based movement-analysis tool that turns phone footage into joint angles, velocity, and coaching feedback — no lab required.",
    shortRole: "Sole developer — Python pipeline, math engine, React dashboard",
    tech: ["Python", "MediaPipe Pose", "OpenCV", "React", "Recharts"],
    links: {
      code: "https://github.com/mimansadahiya/kinetix-biomechanics",
      live: "https://mimansadahiya.github.io/kinetix-biomechanics/"
    },
    caseStudy: {
      lead:
        "Traditional technique analysis relies on subjective observation or expensive biomechanics labs. Kinetix is my attempt to make video-based movement analysis accessible to athletes and coaches — starting with the triple jump and basketball jump shot. It is a substantial work in progress, not a finished product.",
      blocks: [
        {
          type: "callout",
          label: "Status",
          note: false,
          text:
            "In progress. The offline Python pose-analysis pipeline is complete; the React dashboard is under active development. Metric scaling and impact-force estimates are experimental — clearly estimates, not laboratory-grade measurements. No medical or injury-diagnosis claims are made."
        },
        {
          type: "kpis",
          dark: false,
          items: [
            { value: "33", label: "Anatomical keypoints tracked", note: "via MediaPipe Pose" },
            { value: "2", label: "Sports supported", note: "triple jump · basketball" },
            { value: "5", label: "Frame smoothing window", note: "moving-average noise reduction" }
          ]
        },
        {
          type: "text",
          title: "What it does today",
          body:
            "Upload MP4 or MOV video and the system analyzes movement in the browser and via an offline Python pipeline:"
        },
        {
          type: "list",
          items: [
            "Play at variable speeds, step frame-by-frame, and trim attempts.",
            "Select a region of interest and track 33 anatomical keypoints.",
            "Render skeletal overlays and a motion-capture view.",
            "Calculate knee, hip, elbow, and torso angles; estimate horizontal hip velocity.",
            "Smooth movement coordinates and calibrate movement phases.",
            "Show synchronized trajectory charts and coaching critiques linked to specific frames.",
            "Recommend coaching drills and save athlete profiles locally."
          ]
        },
        {
          type: "diagram",
          dark: true,
          title: "Processing pipeline",
          src: "assets/diagrams/kinetix-pipeline.svg",
          caption:
            "Video in → pose landmarks → angle & velocity math → smoothing → dashboard. The Python pipeline uses OpenCV and MediaPipe Pose; the dashboard is React + Vite + Recharts."
        },
        {
          type: "panel",
          dark: true,
          title: "Component status",
          blocks: [
            {
              type: "progress",
              items: [
                { state: "done", strong: "Offline Python pipeline", text: "OpenCV processing, MediaPipe Pose integration, joint-angle math, temporal smoothing, video overlays." },
                { state: "done", strong: "Browser-based tracking", text: "React interface, interactive trajectory charts, critique cards, local profile storage." },
                { state: "wip", strong: "Metric scaling", text: "Scaling from athlete height; impact deceleration and joint-load estimation; static photo proportion scanning." },
                { state: "planned", strong: "Roadmap", text: "Barbell squat & sprint modes, live recording, trajectory ribbons, acoustic foot-strike detection, PDF reports, multi-camera calibration." }
              ]
            }
          ]
        },
        {
          type: "text",
          title: "The math",
          body:
            "The analysis engine computes <strong>knee flexion, hip and elbow angles, torso lean, and horizontal hip velocity</strong>, and distributes a triple jump into its phases (or a shot into its stages). Some metric scaling and impact-force estimates are experimental and labeled as such."
        },
        {
          type: "text",
          title: "Tools",
          body:
            "Python, OpenCV, MediaPipe Pose, NumPy, React 19, Vite, HTML5 Canvas, Recharts, Lucide React, CSS, browser local storage, and Oxlint."
        },
        {
          type: "links",
          links: [
            { label: "Source code", href: "https://github.com/mimansadahiya/kinetix-biomechanics", kind: "code" },
            { label: "Live demo", href: "https://mimansadahiya.github.io/kinetix-biomechanics/", kind: "live" }
          ]
        }
      ]
    }
  },

  {
    id: "rag-semantic-search",
    title: "RAG Pipeline & Semantic Search",
    org: "Cal Poly",
    category: "applied-ai",
    status: "completed",
    type: "academic",
    featured: false,
    accent: "#6d5bd0",
    summary:
      "A Python ETL pipeline ingesting 50,000+ unstructured records into a vector database for semantic search with sentence transformers and a multi-agent layer.",
    shortRole: "ETL, vector search, multi-agent query automation",
    tech: ["Python", "Sentence Transformers", "Qdrant", "Ollama", "REST APIs"],
    links: {}
  },

  {
    id: "usf-ticket-analytics",
    title: "Ticket Sales Analytics",
    org: "USF Athletics",
    category: "business-analytics",
    status: "completed",
    type: "professional",
    featured: false,
    accent: "#0e7a4f",
    summary:
      "Consolidated 417,000 ticket records across five Division I programs to support demand and revenue analysis and replace manual reporting with Python pipelines.",
    shortRole: "Data cleaning, dashboard pipelines, demand & pricing analysis",
    tech: ["SQL", "Python", "pandas", "Excel"],
    links: {}
  }
];

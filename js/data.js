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
      "Segmented NVIDIA's developer community into five behavioral archetypes to understand engagement, drop-off, and how to keep more developers active.",
    shortRole: "Pod lead — data pipeline, feature engineering, segmentation, Streamlit dashboard",
    tech: ["Python", "pandas", "scikit-learn", "Streamlit", "Plotly"],
    links: {},
    caseStudy: {
      lead:
        "A Cal Poly client-sponsored project examining how developers move through a program ecosystem over time — where they engage, where they stall, and what separates sustained adoption from quiet churn.",
      blocks: [
        {
          type: "text",
          title: "The business problem",
          body:
            "Developer lifecycle information was scattered across activity logs, contact records, and SDK downloads — and with <strong>7.61 million registered developers</strong>, more than half went silent. NVIDIA needed one integrated view of who its developers are, where they drop off, and what keeps them active."
        },
        {
          type: "kpis",
          dark: false,
          items: [
            { value: "7.61M", label: "Registered developers analyzed", note: "across the developer program" },
            { value: "5", label: "Behavioral archetypes", note: "identified via PCA + clustering" },
            { value: "70 days", label: "Silence threshold for churn", note: "derived from survival analysis" }
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
              "Markov-chain transition modeling and pathway analysis.",
              "Survival analysis and the churn definition.",
              "Predictive modeling and organization/geographic analysis.",
              "React frontend and executive presentation."
            ]
          }
        },
        {
          type: "text",
          title: "Where developers drop off",
          body:
            "Survival analysis showed the first week is the cliff: <strong>37% of quiet developers return at day 0, 16% by day 7, and only 5% by day 70</strong>. Most quiet developers stay quiet after day seven — which made week one the best window to re-engage them."
        },
        {
          type: "text",
          title: "Methodology",
          body:
            "We defined churn as <strong>70 days of silence</strong>, derived from a Kaplan-Meier survival analysis of 16.8 million developer silence periods. After PCA reduced developer behavior to five principal dimensions (15 components carrying ~81% of variance), clustering produced <strong>five behavioral archetypes</strong>. I explored both K-Means and hierarchical clustering as part of that segmentation work."
        },
        {
          type: "text",
          title: "The dashboard",
          body:
            "I personally built a Streamlit developer-profile explorer with developer ID search and dropdown selection, KPI cards (total activities, distinct interaction types, average activity score, longest inactivity gap, last seen), account, geographic and organizational details, an interaction-category bar chart, an event timeline, and a sortable raw activity table. The broader dashboard added pathway maps, a transition-probability matrix, cluster breakdowns, and predictive panels at the developer, organization, and country level."
        },
        {
          type: "callout",
          label: "Public disclosure",
          note: true,
          text:
            "Developer identifiers, organization names, internal contact details, and confidential records are not published. Aggregate figures above come from the final project presentation."
        },
        {
          type: "text",
          title: "Three actions NVIDIA could take",
          body:
            "The analysis closed with concrete, data-backed actions rather than a wall of charts:"
        },
        {
          type: "list",
          ordered: true,
          items: [
            "<strong>Shift activity focus</strong> for Passive Users and Training & Event Attendees, whose dominant activities (membership and DLI training) have the lowest retention.",
            "<strong>Close the DLI loop within seven days</strong> — automatically route training graduates to topic-matched DevZone downloads and NGC containers, since most returning developers head to DevZone first.",
            "<strong>Protect early power users</strong> — flag early-signal developers before they churn, while they're still active."
          ]
        },
        {
          type: "panel",
          dark: true,
          title: "Five developer archetypes",
          intro:
            "Verified from the final presentation. Each archetype has a distinct behavior signature — and its own 'exit door.'",
          blocks: [
            {
              type: "panelList",
              items: [
                { idx: "01", strong: "Passive Users · 61.0%", text: "Low-activity developers who enter through membership or basic DevZone actions." },
                { idx: "02", strong: "Technical Power Users · 21.0%", text: "Highly active across the platform, but low event and training participation." },
                { idx: "03", strong: "Training & Event Attendees · 13.5%", text: "Learning-oriented developers, driven by DLI training and events." },
                { idx: "04", strong: "True Unicorns · 2.7%", text: "High-adoption benchmark users with balanced engagement across the ecosystem." },
                { idx: "05", strong: "Casual Participants · 1.8%", text: "Selective, limited engagement in membership and participation programs." }
              ]
            },
            {
              type: "chart",
              chartType: "bar",
              title: "Archetype distribution",
              caption: "Share of developers by archetype, from the final presentation",
              data: [
                { label: "Passive Users", value: 61 },
                { label: "Technical Power Users", value: 21 },
                { label: "Training & Event", value: 13.5 },
                { label: "True Unicorns", value: 2.7 },
                { label: "Casual Participants", value: 1.8 }
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
    accent: "#b8934a",
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
      "A Cal Poly capstone that segmented enterprise partners by product depth and support engagement, surfaced the two most at-risk customer types, and designed a retention-bundle strategy.",
    shortRole: "SQL & data prep, segmentation, at-risk analysis, revenue & cross-sell, recommendations",
    tech: ["SQL", "Python", "scikit-learn", "pandas", "Quarto"],
    links: {},
    caseStudy: {
      lead:
        "A Cal Poly client-sponsored capstone on enterprise churn. We segmented Oracle's partner base into nine customer types and found two at-risk segments — then designed a retention strategy that turns the biggest churn risk into a cross-sell opportunity.",
      blocks: [
        {
          type: "text",
          title: "The business problem",
          body:
            "Enterprise churn quietly erodes recurring revenue. Oracle needed a structured way to identify at-risk accounts, understand churn signals, and prioritize retention — rather than reacting after a renewal is already at risk."
        },
        {
          type: "kpis",
          dark: false,
          items: [
            { value: "9", label: "Customer types", note: "3 product-depth × 3 support-engagement segments" },
            { value: "2", label: "At-risk segments", note: "Hidden Churners · Ghost Churners" },
            { value: "14.5%", label: "ERP-only churn rate", note: "the highest, n = 386 partners" }
          ]
        },
        {
          type: "callout",
          label: "How to read the numbers",
          note: true,
          text:
            "Figures come from the masked, anonymized project sample provided to the university — not from confidential Oracle financial reports."
        },
        {
          type: "text",
          title: "What drives retention",
          body:
            "Two signals stood out: <strong>product depth</strong> and <strong>service engagement</strong>. Partners with more products retained at consistently higher rates, and active partners made far more service requests (11.4 per month) than churned ones (1.6 per month). Together, product depth and engagement were the strongest behavioral drivers of retention."
        },
        {
          type: "panel",
          dark: true,
          title: "Nine customer types",
          intro:
            "Partners were segmented across two dimensions — how many product pillars they use, and how actively they engage with support.",
          blocks: [
            {
              type: "panelList",
              items: [
                { idx: "01", strong: "Product depth", text: "Single product · Multi-product · Full suite" },
                { idx: "02", strong: "Support engagement", text: "Silent / low engagement · Active support · High-touch / engaged" },
                { idx: "03", strong: "At-risk #1 — Hidden Churners", text: "Includes the 386 ERP-only partners — single-product accounts whose churn risk isn't obvious without analysis." },
                { idx: "04", strong: "At-risk #2 — Ghost Churners", text: "At-risk accounts that have gone silent, flagged for proactive outreach." }
              ]
            },
            {
              type: "chart",
              chartType: "bar",
              title: "Churn falls as product depth grows",
              caption: "Churn rate by product depth, from the final presentation (masked sample)",
              data: [
                { label: "ERP only", value: 14.5 },
                { label: "ERP + SCM", value: 6.6 },
                { label: "ERP + HCM + SCM", value: 1.4 }
              ]
            }
          ]
        },
        {
          type: "roleSplit",
          mine: {
            title: "What I owned",
            items: [
              "SQL data extraction, joins, and preparation.",
              "Data cleaning and validation — resolving missing account identifiers and misclassifications.",
              "Customer segmentation and identifying the at-risk segments.",
              "Revenue-exposure and cross-sell analysis.",
              "Retention recommendations and executive communication."
            ]
          },
          team: {
            title: "What the team owned",
            items: [
              "Customer support-ticket analysis.",
              "Regional and industry patterns.",
              "The final executive presentation."
            ]
          }
        },
        {
          type: "text",
          title: "The recommendation",
          body:
            "The analysis pointed to one actionable idea: <strong>deepen product adoption</strong>. The team built a retention-bundle strategy around it."
        },
        {
          type: "list",
          items: [
            "<strong>Foundation Bundle (ERP + SCM)</strong> — targets the 386 ERP-only partners, aiming to cut churn from 14.5% to 6.6%.",
            "<strong>Enterprise Core Bundle (ERP + HCM + SCM)</strong> — the 'golden trio,' aiming to cut churn from 14.5% to 1.4%.",
            "<strong>AI tiered pricing + usage-based credits</strong> — reward deeper usage and make expansion feel less like added cost.",
            "<strong>Reach out before year one</strong> — flag ERP-only partners at sign-up and trigger bundle outreach by month eight."
          ]
        },
        {
          type: "callout",
          label: "No dashboard",
          note: true,
          text:
            "This project did not include a standalone software dashboard. The deliverable was reproducible analysis (Python and Quarto) plus an executive recommendation deck."
        },
        {
          type: "text",
          title: "Deliverables & tools",
          body:
            "Reproducible Python and Quarto code, a nine-type customer segmentation, prioritized at-risk account lists, and an executive recommendation deck. Tools: SQL, Python, pandas, NumPy, scikit-learn, Quarto, and Excel."
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

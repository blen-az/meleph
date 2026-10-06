// ─── Navigation ──────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
] as const;

// ─── Company ─────────────────────────────────────────────────
export const COMPANY = {
  name: "Meleph",
  tagline: "AI Systems & Digital Products",
  description:
    "We design and engineer intelligent systems that transform how businesses operate.",
  email: "hello@meleph.com",
  phone: "+1 (555) 000-1234",
} as const;

// ─── Services ────────────────────────────────────────────────
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string; // emoji for now, can swap for SVG
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: "ai-strategy",
    title: "AI Strategy & Consulting",
    shortDescription:
      "We help you identify the highest-impact AI opportunities and build a roadmap from concept to production.",
    longDescription:
      "Our AI strategy engagements start with a deep understanding of your business, data landscape, and competitive environment. We identify where intelligent automation and machine learning can unlock the most value — then design a practical, phased roadmap to get you there. From feasibility studies to vendor evaluation, we de-risk your AI investments before a single line of code is written.",
    icon: "🧭",
    features: [
      "AI readiness assessments",
      "Use-case discovery workshops",
      "Technology stack recommendations",
      "Build vs. buy analysis",
      "ROI modeling & business cases",
    ],
  },
  {
    id: "custom-ai",
    title: "Custom AI Development",
    shortDescription:
      "Purpose-built machine learning models and AI pipelines tailored to your specific business challenges.",
    longDescription:
      "Off-the-shelf AI rarely fits. We build custom models — from NLP and computer vision to recommendation engines and predictive analytics — trained on your data and optimized for your workflows. Every system we deliver includes robust testing, monitoring, and the infrastructure to keep it running in production.",
    icon: "⚡",
    features: [
      "Natural language processing",
      "Computer vision systems",
      "Predictive analytics & forecasting",
      "Recommendation engines",
      "MLOps & model monitoring",
    ],
  },
  {
    id: "digital-products",
    title: "Digital Product Design",
    shortDescription:
      "End-to-end product design and development — from initial concept through launch and iteration.",
    longDescription:
      "Great products are more than features — they're experiences. We combine rigorous product thinking with world-class design and engineering to build digital products people love. Whether you're launching a new SaaS platform, mobile app, or internal tool, we handle the full lifecycle: research, design, development, and ongoing optimization.",
    icon: "✦",
    features: [
      "Product strategy & roadmapping",
      "UX research & interaction design",
      "Full-stack web & mobile development",
      "Design systems & component libraries",
      "Performance optimization",
    ],
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    shortDescription:
      "Scalable data infrastructure that turns raw information into reliable, actionable intelligence.",
    longDescription:
      "AI is only as good as the data it's built on. We design and implement modern data architectures — from ingestion pipelines and warehouses to real-time streaming and governance frameworks — that give your teams and models the clean, reliable data they need. We work across cloud providers and integrate with your existing stack.",
    icon: "◈",
    features: [
      "Data pipeline architecture",
      "Cloud data warehousing",
      "Real-time stream processing",
      "Data quality & governance",
      "ETL/ELT implementation",
    ],
  },
  {
    id: "ai-integration",
    title: "AI Integration & Automation",
    shortDescription:
      "Embed intelligence into your existing systems — automating workflows and augmenting human decision-making.",
    longDescription:
      "The real value of AI shows up when it's woven into your daily operations. We integrate AI capabilities — chatbots, document processing, intelligent routing, anomaly detection — directly into the tools and platforms your teams already use. The result: faster decisions, fewer errors, and teams freed to focus on high-value work.",
    icon: "⬡",
    features: [
      "Intelligent process automation",
      "Chatbot & conversational AI",
      "Document processing & extraction",
      "API-first AI services",
      "Legacy system modernization",
    ],
  },
  {
    id: "growth",
    title: "Growth & Optimization",
    shortDescription:
      "Data-driven experimentation to accelerate product-market fit, conversion, and retention.",
    longDescription:
      "Launching is just the beginning. We run structured growth experiments — A/B tests, funnel optimization, personalization, and retention modeling — to find what moves the needle for your product. Every decision is backed by data, every change is measured, and every insight feeds back into your roadmap.",
    icon: "△",
    features: [
      "Conversion rate optimization",
      "A/B & multivariate testing",
      "Analytics & attribution",
      "Personalization engines",
      "Retention & churn modeling",
    ],
  },
];

// ─── Blog Posts (static for now) ─────────────────────────────
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "building-ai-first-products",
    title: "Building AI-First Products: Lessons from the Field",
    excerpt:
      "What we've learned from embedding AI into products from day one — and why starting with the model is almost always the wrong move.",
    date: "2024-09-15",
    readTime: "8 min read",
    category: "Product",
    content: `
When teams set out to build "AI-powered" products, the instinct is to start with the model. Pick a foundation model, fine-tune it, build a prompt chain, and wrap a UI around it. It feels like progress — you have a demo in days.

But we've seen this pattern fail repeatedly. The model isn't the product. The product is the problem you're solving, the workflow you're improving, the decision you're making better. The model is an implementation detail.

## Start with the workflow, not the model

The most successful AI products we've built started with deep observation of how people actually work. Not how they say they work — how they *actually* work. The gap between those two things is where the real opportunities hide.

Before we write a single prompt, we map the full workflow: inputs, decisions, handoffs, exceptions, and outcomes. We identify where humans are doing work that's repetitive, error-prone, or bottlenecked by information access. Those are the intervention points.

## Design for graceful degradation

AI systems will be wrong. Not sometimes — regularly. The question isn't whether your model will make mistakes, it's whether your product handles those mistakes gracefully.

Every AI feature we ship has a fallback path. If the model is uncertain, we surface that uncertainty. If it's wrong, we make correction effortless. If it's slow, we show progress. The best AI products feel reliable not because the AI is perfect, but because the product is designed to absorb imperfection.

## Measure what matters

It's tempting to optimize for model metrics — accuracy, F1 score, latency. But those are proxy metrics. What matters is whether the product is actually helping people do their jobs better.

We instrument every AI feature with outcome metrics: time saved, decisions improved, errors prevented. These are the numbers that justify the investment and guide iteration.

## The compound effect

The real magic of AI-first products isn't any single feature — it's the compound effect. Every interaction generates data. That data improves the model. The better model improves the product. The better product attracts more users. More users generate more data.

Building for this flywheel from day one is what separates products that plateau from products that accelerate.
    `.trim(),
  },
  {
    slug: "data-quality-ai-systems",
    title: "Why Data Quality Is the Bottleneck in Every AI Project",
    excerpt:
      "Models get all the attention, but data quality is the silent determinant of whether your AI system works or doesn't.",
    date: "2024-08-28",
    readTime: "6 min read",
    category: "Engineering",
    content: `
Every AI project hits the same wall. The model architecture is sound, the training pipeline is running, the team is sharp — but the results are mediocre. The culprit, almost without exception, is data quality.

## The 80/20 of AI engineering

We estimate that 80% of the effort in a successful AI project is data work: collection, cleaning, labeling, augmentation, and validation. The remaining 20% — model selection, training, and deployment — gets 80% of the attention.

This mismatch is why so many AI initiatives stall. Teams invest in sophisticated model architectures while feeding them noisy, incomplete, or biased data. It's like putting a Formula 1 engine in a car with flat tires.

## Common data quality issues

**Inconsistent labeling.** When multiple people label training data, they inevitably apply different standards. A "positive sentiment" to one labeler is "neutral" to another. Without clear guidelines and regular calibration, your labels are noise.

**Selection bias.** Your training data reflects how data was collected, not reality. If your customer support data only includes tickets from users who bothered to write in, you're missing the silent majority. If your sales data only includes closed deals, your model has never seen a lost opportunity.

**Temporal drift.** The world changes. Models trained on last year's data may not reflect this year's reality. Customer behavior shifts, market conditions evolve, and the patterns your model learned quietly become obsolete.

## Building data quality into the pipeline

Data quality isn't a one-time cleanup — it's an ongoing discipline. We build automated quality checks into every stage of the data pipeline: validation rules on ingestion, statistical monitoring for drift, and feedback loops from production predictions back to training data.

The teams that treat data quality as infrastructure — not a project — are the ones whose AI systems actually work in production.
    `.trim(),
  },
  {
    slug: "design-systems-scale",
    title: "Design Systems That Actually Scale",
    excerpt:
      "Most design systems become shelfware within a year. Here's how to build one that your team will actually use.",
    date: "2024-08-10",
    readTime: "7 min read",
    category: "Design",
    content: `
Design systems are having a moment. Every product team wants one — a shared library of components, tokens, and patterns that ensures consistency and accelerates development. The promise is compelling: design once, use everywhere.

The reality is often different. Most design systems become shelfware within 12 months. Teams build beautiful Figma libraries and Storybook instances that nobody uses, because the system was designed for completeness rather than adoption.

## Start with what hurts

The most successful design systems we've built didn't start with a comprehensive component library. They started with a pain point: inconsistent buttons across three products, a color palette that had drifted into 47 shades of blue, or a form pattern that every team implemented differently.

Starting small and solving real problems builds credibility and adoption. Credibility and adoption create demand for more components. Demand justifies investment. It's a virtuous cycle.

## Tokens before components

Design tokens — colors, spacing, typography, shadows — are the foundation. Get these right first. A shared token system creates visual consistency even before you build a single shared component, because every team's custom components will draw from the same palette.

We define tokens at three levels: global (brand colors, type scale), semantic (surface, text, border, accent), and component-specific. This hierarchy makes the system flexible enough to support multiple themes (light/dark, brand variations) without explosion of complexity.

## Optimize for the 80%

Not every component needs to be in the design system. We aim to cover the 80% of UI patterns that appear across multiple products: buttons, inputs, cards, modals, navigation, and data display. The remaining 20% — product-specific, highly custom UI — lives in the product codebase.

Trying to systematize everything leads to over-abstraction and components so configurable they're harder to use than building from scratch.

## Documentation is the product

A design system without documentation is just a code repository. The documentation — usage guidelines, do/don't examples, interactive demos, migration guides — is what turns a library into a system.

We treat documentation as a first-class product with its own roadmap, user research, and quality standards. If the docs aren't good, the system won't be adopted, no matter how well the components are built.
    `.trim(),
  },
  {
    slug: "llm-production-lessons",
    title: "Putting LLMs in Production: What Nobody Tells You",
    excerpt:
      "The gap between an impressive LLM demo and a reliable production system is wider than most teams expect.",
    date: "2024-07-22",
    readTime: "9 min read",
    category: "AI",
    content: `
Large language models are extraordinary. In a demo, they can summarize documents, answer questions, generate code, and carry on conversations that feel genuinely intelligent. The leap from demo to production, however, is where most teams stumble.

## The demo-to-production gap

Demos are forgiving environments. You choose the inputs, you interpret the outputs, and you gloss over the occasional hallucination with "it's still learning." Production is unforgiving. Real users send unexpected inputs, expect consistent outputs, and have zero tolerance for confidently wrong answers.

We've deployed LLMs in production across dozens of use cases. Here's what we've learned about bridging that gap.

## Latency is a feature

In demos, a 3-second response time feels magical. In production, it feels slow. Users have been trained by instant search results and sub-second page loads. An LLM that takes 3 seconds to respond — especially for simple queries — creates friction.

We address this with streaming responses, intelligent caching, and model routing. Simple queries go to smaller, faster models. Complex queries go to larger models. The user sees the first token in under 500ms regardless.

## Guardrails are not optional

LLMs will occasionally produce outputs that are inappropriate, inaccurate, or simply bizarre. In a demo, this is amusing. In production, it's a liability.

We implement multiple layers of guardrails: input validation to catch adversarial prompts, output filtering to catch harmful content, confidence scoring to flag uncertain responses, and human-in-the-loop workflows for high-stakes decisions. The goal isn't to prevent all errors — it's to prevent unacceptable errors.

## Cost management

LLM inference is expensive. At demo scale, costs are trivial. At production scale — thousands or millions of requests per day — costs can escalate rapidly. We've seen teams burn through their annual AI budget in the first quarter of production.

Cost management starts with architecture: model routing, prompt optimization, response caching, and batch processing. We typically achieve 60-80% cost reduction compared to naive implementations without measurable impact on quality.

## Evaluation is continuous

You can't A/B test an LLM the same way you test a button color. Outputs are complex, subjective, and context-dependent. We build custom evaluation frameworks for every LLM deployment: automated metrics for measurable dimensions (accuracy, relevance, latency), and structured human evaluation for subjective dimensions (helpfulness, tone, completeness).

Evaluation isn't a launch gate — it's an ongoing process that runs continuously in production, catching regressions before users do.
    `.trim(),
  },
];

// ─── Testimonials ────────────────────────────────────────────
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Meleph didn't just build us an AI system — they redesigned how our team thinks about automation. The impact on our operations has been transformational.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "Axiom Health",
  },
  {
    quote:
      "The product thinking they bring to technical problems is rare. They understood our users better than we did and delivered a product that our customers genuinely love.",
    author: "Marcus Rivera",
    role: "CEO",
    company: "Lumen Analytics",
  },
  {
    quote:
      "We'd tried two other firms before Meleph. They were the first team that took the time to understand our data before proposing a solution. The difference in results was night and day.",
    author: "Aisha Patel",
    role: "Head of Data Science",
    company: "Clearpoint Financial",
  },
];

// ─── Stats ───────────────────────────────────────────────────
export const STATS = [
  { value: "40+", label: "Projects Delivered" },
  { value: "98%", label: "Client Retention" },
  { value: "12", label: "Industries Served" },
  { value: "3x", label: "Average ROI" },
];

// ─── Values ──────────────────────────────────────────────────
export const VALUES = [
  {
    title: "Substance Over Spectacle",
    description:
      "We build systems that work in production, not just in demos. Every solution we deliver is tested, monitored, and designed to operate reliably at scale.",
  },
  {
    title: "Clarity in Complexity",
    description:
      "AI is complex. Our job is to make it clear — clear strategy, clear architecture, clear communication. We don't hide behind jargon.",
  },
  {
    title: "Partnership, Not Projects",
    description:
      "We embed with your team, share context, and stay accountable to outcomes — not just deliverables. Our best work happens when we're true partners.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Ship, measure, learn, iterate. We build feedback loops into everything we do — our products, our processes, and our partnerships.",
  },
];

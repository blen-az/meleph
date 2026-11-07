// Single source of truth for site-wide content. Copy follows the
// Website Experience & Engineering Handoff (AGENTS.md).

export const SITE = {
  name: "Meleph",
  descriptor: "AI Systems & Digital Products",
  description:
    "Meleph builds AI systems and digital products that help businesses understand customer needs, capture opportunities, connect teams and move every interaction toward the right next step.",
  email: "info@melephtech.com",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://melephtech.com",
} as const;

export const SOLUTIONS = [
  {
    title: "AI Customer Agent",
    href: "/solutions/ai-customer-agent",
    description: "Our flagship customer-facing system.",
  },
  {
    title: "Custom AI Systems",
    href: "/solutions/custom-ai-systems",
    description: "Tailored workflows, internal systems and integrations.",
  },
] as const;

export const NAV = [
  { label: "Products", href: "/products" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
] as const;

// Channels shown on the site. Only channels live at launch may be
// marked `launch: true` (spec §8 and the acceptance checklist).
// Mel's system prompt makes the same promise, so keep them in step.
export const CHANNELS = [
  { name: "Website", launch: true },
  { name: "WhatsApp", launch: false },
  { name: "Instagram", launch: false },
  { name: "Email", launch: false },
] as const;

export const LAUNCH_CHANNELS = CHANNELS.filter((channel) => channel.launch);

export type WorkflowStepKey =
  | "understand"
  | "answer"
  | "capture"
  | "act"
  | "connect"
  | "follow-up";

export const AGENT_WORKFLOW: readonly {
  key: WorkflowStepKey;
  name: string;
  text: string;
}[] = [
  {
    key: "understand",
    name: "Understand",
    text: "Recognises what the customer is asking and what they are trying to achieve.",
  },
  {
    key: "answer",
    name: "Answer",
    text: "Responds using information approved by your business.",
  },
  {
    key: "capture",
    name: "Capture",
    text: "Collects the details your team needs, including contact information, requirements and customer intent.",
  },
  {
    key: "act",
    name: "Act",
    text: "Guides the customer toward a quotation, appointment, enquiry, purchase path or another relevant next step.",
  },
  {
    key: "connect",
    name: "Connect",
    text: "Keeps the conversation available to your team with the context already captured.",
  },
  {
    key: "follow-up",
    name: "Follow up",
    text: "Sends appropriate reminders, updates and follow-ups using the context already captured.",
  },
];

export const CAPABILITIES = [
  {
    key: "conversations",
    title: "Customer conversations",
    text: "Answer questions naturally using approved business information.",
  },
  {
    key: "capture",
    title: "Lead capture",
    text: "Collect customer details, requirements and intent during the conversation.",
  },
  {
    key: "inbox",
    title: "Conversation inbox",
    text: "Give the team one place to review conversations, customer information and follow-up status.",
  },
  {
    key: "channels",
    title: "Connected channels",
    text: "Keep supported conversations connected across the channels where customers reach the business.",
  },
  {
    key: "bookings",
    title: "Appointments & quotations",
    text: "Move customers directly from interest into booking, quotation or enquiry flows.",
  },
  {
    key: "proactive",
    title: "Proactive messaging",
    text: "Follow up with customers, send reminders and reconnect when appropriate.",
  },
  {
    key: "handoff",
    title: "Human handoff",
    text: "Bring a team member into the conversation when human judgment is required.",
  },
  {
    key: "integrations",
    title: "Workflows & integrations",
    text: "Connect conversations to the systems and processes the business already uses.",
  },
] as const;

export type CapabilityKey = (typeof CAPABILITIES)[number]["key"];

export const CUSTOM_SYSTEMS = [
  {
    key: "assistants",
    title: "Internal AI assistants",
    text: "Give teams faster access to company knowledge and information.",
  },
  {
    key: "automation",
    title: "Workflow automation",
    text: "Connect repetitive processes and reduce unnecessary manual work.",
  },
  {
    key: "dashboards",
    title: "Operational dashboards",
    text: "Bring important information and activity into one place.",
  },
  {
    key: "knowledge",
    title: "Knowledge systems",
    text: "Organise business knowledge so people and AI systems can use it effectively.",
  },
  {
    key: "portals",
    title: "Business portals",
    text: "Create tailored interfaces for customers, employees, partners or suppliers.",
  },
  {
    key: "integrations",
    title: "Integrations",
    text: "Connect systems so information can move where it needs to.",
  },
] as const;

export type CustomSystemKey = (typeof CUSTOM_SYSTEMS)[number]["key"];

// Home §6.6 preview.
export const PROCESS_PREVIEW = [
  { name: "Understand", text: "Learn the business, users, information and current workflow." },
  { name: "Define", text: "Identify the problem and determine what the system needs to accomplish." },
  { name: "Design", text: "Map the user experience, workflows and system behaviour." },
  { name: "Build", text: "Develop the product and connect the necessary systems." },
  { name: "Launch", text: "Test, deploy and prepare the business to use it." },
  { name: "Improve", text: "Learn from real usage and continue improving the system." },
] as const;

// How We Work §12.2.
export const PROCESS = [
  { name: "Discover", text: "Understand the business, users, information and existing process." },
  { name: "Define", text: "Identify the problem and agree on what the system needs to accomplish." },
  { name: "Design", text: "Map the experience, workflows and system behaviour." },
  { name: "Build", text: "Develop the product and necessary integrations." },
  { name: "Test & Launch", text: "Test real scenarios, refine behaviour and deploy the system." },
  { name: "Improve", text: "Review usage, identify improvements and continue evolving the product." },
] as const;

export const PRINCIPLES = [
  { name: "Practical", text: "We focus on problems that can actually be improved with better systems." },
  { name: "Thoughtful", text: "We understand the business before deciding what technology belongs inside it." },
  { name: "Connected", text: "We design systems as part of the wider business process, not isolated tools." },
  { name: "Long-term", text: "We build with the expectation that the product will evolve as the business does." },
] as const;

export const LEKIRAY_URL = "https://le-kiray.vercel.app/";

// ─── Work ────────────────────────────────────────────────────

export type ProjectLabel = "CLIENT WORK" | "MELEPH PRODUCT" | "DEMONSTRATION";
export type ProjectFamily = "ai-customer-systems" | "custom-systems" | "digital-products";

export type Project = {
  slug: string;
  title: string;
  label: ProjectLabel;
  family: ProjectFamily;
  industry: string;
  summary: string;
  problem: string;
  system: string;
  steps: readonly string[];
  experience: string;
  outcome: string;
  liveUrl?: string;
};

export const DEMONSTRATION_DISCLOSURE =
  "Demonstration — developed by Meleph to illustrate a potential application.";

export const PROJECTS: readonly Project[] = [
  {
    slug: "real-estate-ai-customer-agent",
    title: "Real Estate AI Customer Agent",
    label: "DEMONSTRATION",
    family: "ai-customer-systems",
    industry: "Real estate",
    summary:
      "Helps property visitors ask about availability, compare options, share requirements and request a viewing.",
    problem:
      "Property enquiries arrive at all hours and often start with the same questions: what is available, what it costs, and when it can be seen. Leasing teams spend their time repeating answers and chasing details instead of showing homes.",
    system:
      "An AI Customer Agent for a residential development. It answers from the approved unit list and building information, learns what the visitor needs, and moves serious enquiries toward a viewing with the leasing team.",
    steps: [
      "Visitor asks about availability for a specific unit type.",
      "The agent answers from approved availability and building information.",
      "It asks about budget, move-in date and must-haves to compare suitable options.",
      "The visitor requests a viewing; the agent captures contact details and a preferred time.",
      "The leasing team receives the conversation with requirements already summarised.",
    ],
    experience:
      "The visitor sees a calm, specific conversation that compares two suitable units and offers viewing times. The leasing team sees the same conversation in the inbox with intent, budget and timing captured as structured fields.",
    outcome:
      "The system lets a leasing team respond to every enquiry immediately, focus on qualified viewings, and start each conversation already knowing what the visitor needs.",
  },
  {
    slug: "aviation-enquiry-system",
    title: "Aviation Enquiry System",
    label: "DEMONSTRATION",
    family: "ai-customer-systems",
    industry: "Aviation",
    summary:
      "Helps customers understand services, submit enquiries and send the information needed for follow-up.",
    problem:
      "Charter and aviation service enquiries need precise details — route, dates, passengers, special requirements — before a team can respond. Incomplete enquiries lead to slow back-and-forth and lost interest.",
    system:
      "A customer-facing enquiry system that explains available services in plain language and guides customers to submit a complete, structured enquiry the operations team can act on.",
    steps: [
      "Customer asks what kinds of trips or services are available.",
      "The system explains services using approved information.",
      "It collects route, dates, passenger count and special requirements conversationally.",
      "A structured enquiry is created for the operations team.",
      "The customer receives confirmation of what was sent and what happens next.",
    ],
    experience:
      "Customers get clear answers and a short guided conversation instead of a long form. The team receives an enquiry with every required detail in a consistent format.",
    outcome:
      "The system enables complete first enquiries, fewer clarification rounds, and faster, better-informed responses from the operations team.",
  },
  {
    slug: "lekiray",
    title: "LeKiray",
    label: "MELEPH PRODUCT",
    family: "digital-products",
    industry: "Equipment rental",
    summary:
      "A digital marketplace connecting people and businesses with vehicles, machinery and equipment available for rent.",
    problem:
      "Finding a vehicle, machine or piece of equipment to rent usually means calling around, asking for photos and specifications, and comparing incomplete answers from different providers.",
    system:
      "LeKiray is a Meleph-owned marketplace. Customers search by category, location and requirement; providers list their available assets and receive enquiries directly.",
    steps: [
      "Customer searches by category, location and requirement.",
      "Listings show specifications and provider information side by side.",
      "Customer enquires about availability and rental details.",
      "Provider receives the enquiry and responds directly.",
    ],
    experience:
      "A focused search and listing experience for customers, and a simple way for providers to publish available assets and manage enquiries.",
    outcome:
      "LeKiray gives customers one place to search and compare rentals, and gives providers a structured channel for enquiries.",
    liveUrl: LEKIRAY_URL,
  },
];

export const WORK_FILTERS = [
  { value: "all", label: "All" },
  { value: "client", label: "Client Work" },
  { value: "ai-customer-systems", label: "AI Customer Systems" },
  { value: "custom-systems", label: "Custom Systems" },
  { value: "digital-products", label: "Digital Products" },
  { value: "demonstrations", label: "Demonstrations" },
] as const;

export type WorkFilter = (typeof WORK_FILTERS)[number]["value"];

export function matchesFilter(project: Project, filter: WorkFilter) {
  switch (filter) {
    case "all":
      return true;
    case "client":
      return project.label === "CLIENT WORK";
    case "demonstrations":
      return project.label === "DEMONSTRATION";
    default:
      return project.family === filter;
  }
}

// ─── Enquiries ───────────────────────────────────────────────

export const ENQUIRY_PATHS = [
  {
    value: "demo",
    title: "Request a Demo",
    text: "See the AI Customer Agent working through a relevant business scenario.",
  },
  {
    value: "project",
    title: "Discuss a Project",
    text: "Tell us about a process, product or system you want to build or improve.",
  },
] as const;

export type EnquiryPath = (typeof ENQUIRY_PATHS)[number]["value"];

export const INTERESTS = [
  { value: "ai-customer-agent", label: "AI Customer Agent" },
  { value: "custom-ai-system", label: "Custom AI System" },
  { value: "digital-product", label: "Digital Product Development" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export type Interest = (typeof INTERESTS)[number]["value"];

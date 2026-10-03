import type { Metadata } from "next";
import { SolutionDetail } from "@/components/solutions/SolutionDetail";

export const metadata: Metadata = { title: "AI Customer Agent", description: "Customer-facing AI that moves conversations toward the right next step." };

const outcomes = [
  { title: "Understand the enquiry", text: "Identify what the customer is trying to achieve and retain the context across the conversation." },
  { title: "Give a useful answer", text: "Respond using the information and boundaries defined for the business." },
  { title: "Capture what matters", text: "Collect contact details, intent and relevant requirements without turning the interaction into a rigid form." },
  { title: "Move the work forward", text: "Create a next action, support an appointment or quotation request, and hand the conversation to the right person." },
] as const;

export default function Page() { return <SolutionDetail eyebrow="AI Customer Agent" title="From customer conversation to business action." intro="A customer-facing AI system that can understand enquiries, answer useful questions, capture intent and connect customers with the right team and next step." workflow={["Understand", "Answer", "Capture", "Act", "Connect", "Follow up"]} outcomes={outcomes} />; }

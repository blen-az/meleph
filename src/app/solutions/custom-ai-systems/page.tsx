import type { Metadata } from "next";
import { SolutionDetail } from "@/components/solutions/SolutionDetail";

export const metadata: Metadata = { title: "Custom AI Systems", description: "Purpose-built AI systems for real business workflows." };

const outcomes = [
  { title: "Internal assistants", text: "Help teams find, understand and use the information already available to the business." },
  { title: "Workflow automation", text: "Reduce repetitive movement of information while keeping people in control of important decisions." },
  { title: "Operational interfaces", text: "Create dashboards, portals and tools shaped around the work teams need to complete." },
  { title: "Connected systems", text: "Join information and actions across existing tools so the process works as one system." },
] as const;

export default function Page() { return <SolutionDetail eyebrow="Custom AI Systems" title="Technology shaped around the operation." intro="We design internal assistants, workflow systems, knowledge tools, operational dashboards, portals and integrations around a specific business process." workflow={["Understand", "Define", "Connect", "Build", "Launch", "Improve"]} outcomes={outcomes} />; }

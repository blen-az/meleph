import type { Metadata } from "next";
import { AiCustomerAgentPage } from "@/components/solutions/AiCustomerAgentPage";

export const metadata: Metadata = {
  title: "AI Customer Agent | From First Question to Next Action",
  description:
    "An AI Customer Agent built around your business, capable of answering customers, understanding what they need, capturing information and moving each conversation forward.",
};

export default function Page() {
  return <AiCustomerAgentPage />;
}

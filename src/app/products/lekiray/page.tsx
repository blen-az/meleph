import type { Metadata } from "next";
import { LeKirayPage } from "@/components/products/LeKirayPage";

export const metadata: Metadata = {
  title: "LeKiray | Heavy Equipment & Vehicle Rental Marketplace",
  description:
    "Find what you need. Rent it without the unnecessary search. LeKiray connects customers looking for vehicles, machinery and industrial equipment with verified rental providers.",
};

export default function Page() {
  return <LeKirayPage />;
}

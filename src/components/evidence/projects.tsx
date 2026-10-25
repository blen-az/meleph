import { CalendarIcon, MapPinIcon, PlaneIcon, SearchIcon, UsersIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Message, MessageContent } from "@/components/ui/message";
import { DataField, EvidenceFrame } from "@/components/evidence/frame";

// Compact visuals for work cards. Each one shows the real shape of the
// system's interface rather than a decorative illustration.

function PropertyVisual() {
  return (
    <div className="flex flex-col gap-3 p-5">
      <Message align="start">
        <MessageContent>
          <Bubble variant="outline">
            <BubbleContent>Is a two-bedroom available from March?</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble align="end">
            <BubbleContent>Yes, 4B and 7A. Would you like to compare them or book a viewing?</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <div className="flex justify-end gap-2">
        <Badge variant="outline">Compare options</Badge>
        <Badge>Book a viewing</Badge>
      </div>
    </div>
  );
}

function AviationVisual() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <span className="font-serif text-3xl leading-none">ADD</span>
          <span className="text-xs text-muted-foreground">Addis Ababa</span>
        </div>
        <span className="flex flex-1 items-center gap-2 text-muted-foreground">
          <span className="h-px flex-1 bg-border" />
          <PlaneIcon aria-hidden="true" className="size-4" />
          <span className="h-px flex-1 bg-border" />
        </span>
        <div className="flex flex-col items-end">
          <span className="font-serif text-3xl leading-none">NBO</span>
          <span className="text-xs text-muted-foreground">Nairobi</span>
        </div>
      </div>
      <dl className="grid grid-cols-3 gap-3 border-t pt-4">
        <DataField label="Dates" value="12–14 Jun" />
        <DataField label="Passengers" value="6" />
        <DataField label="Needs" value="Extra baggage" />
      </dl>
      <Badge variant="secondary">Complete enquiry sent to operations</Badge>
    </div>
  );
}

const LISTINGS = [
  { name: "Hydraulic excavator", category: "Machinery", location: "Addis Ababa", detail: "20-ton class · operator available" },
  { name: "Tipper truck", category: "Vehicles", location: "Adama", detail: "6×4 · 18 m³ bed" },
  { name: "Diesel generator", category: "Industrial equipment", location: "Addis Ababa", detail: "300 kVA · silent enclosure" },
] as const;

export function LeKiraySearch({ rows = 2, className }: { rows?: number; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-4 p-5", className)}>
      <div className="flex flex-wrap items-center gap-2 rounded-full border bg-background px-4 py-2.5 text-sm">
        <SearchIcon aria-hidden="true" className="size-4 text-muted-foreground" />
        <span className="font-medium">Excavator</span>
        <span className="h-4 w-px bg-border" />
        <MapPinIcon aria-hidden="true" className="size-4 text-muted-foreground" />
        <span className="text-muted-foreground">Addis Ababa</span>
      </div>
      <ul className="flex flex-col gap-2.5">
        {LISTINGS.slice(0, rows).map((listing) => (
          <li key={listing.name} className="flex items-center gap-4 rounded-lg border bg-background p-3">
            <span aria-hidden="true" className="h-12 w-16 shrink-0 rounded-md bg-[linear-gradient(135deg,var(--taupe),var(--stone))]" />
            <div className="flex min-w-0 flex-1 flex-col">
              <span className="truncate font-medium">{listing.name}</span>
              <span className="truncate text-xs text-muted-foreground">{listing.detail}</span>
            </div>
            <Badge variant="outline" className="hidden sm:inline-flex">
              {listing.location}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectVisual({ slug, className }: { slug: string; className?: string }) {
  return (
    <div className={cn("surface-stone flex items-center justify-center p-6 sm:p-8", className)}>
      <div className="w-full max-w-md overflow-hidden rounded-xl bg-card text-sm shadow-[0_24px_50px_-30px_rgb(0_0_0/0.45)] ring-1 ring-foreground/10">
        {slug === "real-estate-ai-customer-agent" ? <PropertyVisual /> : null}
        {slug === "aviation-enquiry-system" ? <AviationVisual /> : null}
        {slug === "lekiray" ? <LeKiraySearch /> : null}
      </div>
    </div>
  );
}

// ─── LeKiray page views ──────────────────────────────────────

export function LeKirayCompare({ className }: { className?: string }) {
  const columns = [
    { label: "Operating weight", a: "21 t", b: "20 t" },
    { label: "Bucket", a: "1.2 m³", b: "1.0 m³" },
    { label: "Operator", a: "Included", b: "On request" },
    { label: "Location", a: "Bole", b: "Akaki" },
  ];
  return (
    <EvidenceFrame title="Compare listings" meta="Hydraulic excavators" className={className}>
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th scope="col" className="px-5 py-3 font-normal text-muted-foreground">
              <span className="sr-only">Specification</span>
            </th>
            <th scope="col" className="px-5 py-3 font-medium">Provider A</th>
            <th scope="col" className="px-5 py-3 font-medium">Provider B</th>
          </tr>
        </thead>
        <tbody>
          {columns.map((row) => (
            <tr key={row.label} className="border-b last:border-0">
              <th scope="row" className="px-5 py-3 font-normal text-muted-foreground">
                {row.label}
              </th>
              <td className="px-5 py-3">{row.a}</td>
              <td className="px-5 py-3">{row.b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </EvidenceFrame>
  );
}

export function LeKirayEnquiry({ className }: { className?: string }) {
  return (
    <EvidenceFrame title="Enquiry to provider" meta="Hydraulic excavator" className={className}>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-4 p-5">
        <DataField label="Start date" value={<span className="inline-flex items-center gap-1.5"><CalendarIcon aria-hidden="true" className="size-3.5" />3 March</span>} />
        <DataField label="Duration" value="2 weeks" />
        <DataField label="Site" value="Addis Ababa" />
        <DataField label="Operator" value={<span className="inline-flex items-center gap-1.5"><UsersIcon aria-hidden="true" className="size-3.5" />Required</span>} />
      </dl>
      <p className="border-t px-5 py-3.5 text-muted-foreground">
        &ldquo;Is the machine available for a foundation job starting in early March?&rdquo;
      </p>
    </EvidenceFrame>
  );
}

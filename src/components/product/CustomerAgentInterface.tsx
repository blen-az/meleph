const Icon = ({ children }: { children: React.ReactNode }) => (
  <span className="grid size-7 shrink-0 place-items-center border border-white/10 bg-white/[0.04] text-[0.62rem] text-white/60">{children}</span>
);

export function CustomerAgentInterface() {
  return (
    <div className="relative mx-auto max-w-[49rem] pb-20 pl-0 sm:pb-16 sm:pl-10 lg:pl-0">
      <div className="overflow-hidden border border-ink/15 bg-[#f7f5ef] shadow-[0_30px_80px_rgba(13,27,42,0.16)]">
        <div className="flex h-9 items-center justify-between border-b border-ink/10 px-4">
          <div className="flex gap-1.5" aria-hidden="true"><i className="size-1.5 rounded-full bg-ink/20" /><i className="size-1.5 rounded-full bg-ink/20" /><i className="size-1.5 rounded-full bg-ink/20" /></div>
          <span className="text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-ink/40">Meleph Customer Agent</span>
          <span className="flex items-center gap-1.5 text-[0.55rem] text-ink/50"><i className="size-1.5 rounded-full bg-[#5f8d72]" /> Live</span>
        </div>

        <div className="grid h-[30rem] grid-cols-[3.1rem_minmax(0,1fr)] sm:grid-cols-[11.5rem_minmax(0,1fr)]">
          <aside className="flex min-w-0 flex-col bg-ink text-white">
            <div className="flex h-14 items-center gap-2 border-b border-white/10 px-3 sm:px-4"><span className="font-serif text-xl font-semibold">M</span><span className="hidden text-xs font-medium tracking-wide sm:block">Inbox</span><span className="ml-auto hidden rounded-full bg-gold px-1.5 py-0.5 text-[0.5rem] text-ink sm:block">4</span></div>
            <div className="space-y-1 p-2">
              <div className="flex gap-2 border-l-2 border-gold bg-white/[0.08] p-2"><Icon>AK</Icon><div className="hidden min-w-0 sm:block"><p className="truncate text-[0.63rem] font-medium">Alex Kim</p><p className="mt-1 truncate text-[0.5rem] text-white/45">Enterprise package...</p></div></div>
              <div className="flex gap-2 p-2"><Icon>SM</Icon><div className="hidden min-w-0 sm:block"><p className="text-[0.63rem]">Sofia Martin</p><p className="mt-1 truncate text-[0.5rem] text-white/35">Pricing request</p></div></div>
              <div className="flex gap-2 p-2"><Icon>RB</Icon><div className="hidden min-w-0 sm:block"><p className="text-[0.63rem]">Robert Bell</p><p className="mt-1 truncate text-[0.5rem] text-white/35">Appointment updated</p></div></div>
            </div>
            <div className="mt-auto border-t border-white/10 p-3"><p className="hidden text-[0.5rem] uppercase tracking-[0.14em] text-white/30 sm:block">Today</p><div className="mt-2 hidden items-end justify-between sm:flex"><strong className="font-serif text-2xl font-medium">18</strong><span className="text-[0.5rem] text-[#8bb99b]">↑ 24%</span></div></div>
          </aside>

          <div className="grid min-w-0 grid-cols-1 md:grid-cols-[minmax(0,1fr)_12.2rem]">
            <div className="flex min-w-0 flex-col border-r border-ink/10">
              <header className="flex h-14 items-center justify-between border-b border-ink/10 px-4"><div><p className="text-[0.68rem] font-semibold text-ink">Alex Kim</p><p className="text-[0.5rem] text-ink/40">Web conversation · 2 min ago</p></div><button className="border border-ink/10 px-2.5 py-1 text-[0.5rem] text-ink/60">Assign</button></header>
              <div className="flex-1 space-y-4 overflow-hidden p-4 text-[0.6rem] leading-[1.55]">
                <div className="max-w-[80%]"><p className="mb-1 text-[0.48rem] uppercase tracking-wider text-ink/35">Customer</p><div className="border border-ink/10 bg-white p-3 text-ink/70">I&apos;m interested in your enterprise package. Can someone walk me through what would fit our team?</div></div>
                <div className="ml-auto max-w-[84%]"><p className="mb-1 text-right text-[0.48rem] uppercase tracking-wider text-ink/35">Meleph Agent</p><div className="bg-ink p-3 text-white/80">Of course. I can ask a few questions about your requirements and connect you with the appropriate team member.</div></div>
                <div className="max-w-[80%]"><div className="border border-ink/10 bg-white p-3 text-ink/70">We&apos;re a team of around 75. We need help qualifying and routing inbound enquiries.</div></div>
              </div>
              <div className="m-3 flex items-center border border-ink/15 bg-white px-3 py-2.5 text-[0.55rem] text-ink/30"><span>Reply or let the agent continue...</span><span className="ml-auto text-gold">→</span></div>
            </div>

            <aside className="hidden bg-white/40 p-4 md:block">
              <p className="text-[0.52rem] font-semibold uppercase tracking-[0.16em] text-ink/40">Customer context</p>
              <div className="mt-4 flex items-center gap-2.5"><span className="grid size-8 place-items-center bg-taupe/45 text-[0.62rem] font-semibold text-ink">AK</span><div><p className="text-[0.62rem] font-semibold">Alex Kim</p><p className="text-[0.48rem] text-ink/40">Northstar Labs</p></div></div>
              <dl className="mt-5 space-y-3 border-t border-ink/10 pt-4">
                <Detail label="Intent" value="Enterprise enquiry" />
                <Detail label="Team size" value="50–100" />
                <Detail label="Status" value="Qualified" accent />
                <Detail label="Assigned" value="Maya · Enterprise" />
              </dl>
              <div className="mt-5 border-l-2 border-gold bg-gold/10 p-3"><p className="text-[0.46rem] uppercase tracking-wider text-ink/45">Next action</p><p className="mt-1 text-[0.59rem] font-semibold text-ink">Schedule consultation</p><p className="mt-1 text-[0.48rem] text-ink/45">Thu, 10 Oct · 14:30</p></div>
              <div className="mt-4 flex justify-between border-t border-ink/10 pt-3 text-[0.46rem] uppercase tracking-wider text-ink/35"><span>CRM synced</span><span>98% confidence</span></div>
            </aside>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-2 w-[12rem] overflow-hidden rounded-[1.35rem] border-[5px] border-ink bg-white shadow-[0_24px_55px_rgba(13,27,42,0.24)] sm:right-8 sm:w-[13.5rem] lg:-right-2">
        <div className="flex h-9 items-center border-b border-ink/10 px-3"><span className="size-1.5 rounded-full bg-[#5f8d72]" /><span className="ml-2 text-[0.52rem] font-semibold text-ink">Meleph Assistant</span><span className="ml-auto text-[0.65rem] text-ink/30">•••</span></div>
        <div className="space-y-2.5 bg-[#faf8f3] p-3 text-[0.5rem] leading-relaxed"><div className="ml-5 bg-ink p-2.5 text-white/80">What size is your team?</div><div className="mr-5 border border-ink/10 bg-white p-2.5 text-ink/65">We&apos;re approximately 75 people.</div><div className="ml-5 bg-ink p-2.5 text-white/80">Great — I&apos;ve found the right team. Shall I book a consultation?</div></div>
        <div className="flex items-center border-t border-ink/10 px-3 py-2 text-[0.48rem] text-ink/30">Write a message...<span className="ml-auto grid size-5 place-items-center rounded-full bg-gold text-ink">↑</span></div>
      </div>
    </div>
  );
}

function Detail({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return <div><dt className="text-[0.45rem] uppercase tracking-wider text-ink/35">{label}</dt><dd className={`mt-0.5 text-[0.58rem] font-medium ${accent ? "text-[#47735b]" : "text-ink/75"}`}>{value}</dd></div>;
}

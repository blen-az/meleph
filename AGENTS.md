
AI SYSTEMS & DIGITAL PRODUCTS
Website Experience &
Engineering Handoff
Version 1.0  |  September 2026
Purpose of this document
This document defines the intended website structure, content hierarchy, copy direction, visual language, interaction model and implementation requirements for the first public Meleph website. It is written to be handed directly to the software engineer and used as the build reference.
The central idea
Meleph should feel like a serious product and systems company — not a generic AI agency and not a chatbot template website.
The website combines editorial restraint with clear software evidence: strong serif headlines, simple explanations, real interface examples, business workflows and large product imagery.


DOCUMENT MAP
Contents
01	Project objective and product definition
02	Brand and visual system
03	Approved homepage reference
04	Information architecture and navigation
05	Global interaction and component rules
06	Home page specification
07	Solutions page
08	AI Customer Agent page
09	Custom AI Systems page
10	Products and LeKiray
11	Work / case studies
12	About and How We Work
13	Get Started / conversion flow
14	Responsive, accessibility and performance requirements
15	Implementation checklist and acceptance criteria
Build principle
At every major section the visitor should receive three things in this order: a distinctive headline, a plain-language explanation, and visual evidence of the product or workflow. Avoid abstract AI claims without showing how the system actually works.


WHAT THE SITE MUST COMMUNICATE
1. Project objective and product definition
Meleph is an AI systems and digital products company. The website must present one flagship client-facing system — the AI Customer Agent — while also making clear that Meleph builds custom AI systems and its own digital products.
Core offer
Item	Required content	Engineering / UX requirement
AI Customer Agent	A customer-facing AI system built around a business.	Present as the flagship solution, not as a “chatbot”.
Custom AI Systems	Tailored AI-powered systems for workflows, internal operations, knowledge, dashboards and integrations.	Present as a separate solution family for needs beyond the standard customer-agent setup.
Digital Products	Products developed and operated by Meleph.	Start with LeKiray; structure the page so more products can be added later.

AI Customer Agent: product model
The AI Customer Agent is the product. The capabilities below are features inside that product, not separate products or top-level navigation items.
Customer conversations and approved-knowledge answers
Lead capture and qualification
Conversation inbox / team workspace
Connected channels
Appointment and quotation flows
Proactive follow-up and outbound messaging
Human handoff
Business workflows and integrations
Customer records / conversation history
Reporting and analytics as the product matures
Terminology rule
Do not market the product as a “chatbot”. Use “AI Customer Agent”, “AI system”, “customer system” or “customer-facing AI” depending on context. “Inbox”, “connected channels”, “proactive messaging” and similar terms describe capabilities within the AI Customer Agent.


LOOK, FEEL AND TONE
2. Brand and visual system

Primary brand expression: the Meleph wordmark. Do not force a separate M symbol into the main identity. The name itself should carry the brand.
Item	Required content	Engineering / UX requirement
Visual character	Editorial, architectural, precise, quietly premium, contemporary.	Avoid the visual language of luxury hotels, spas, generic SaaS gradients or sci-fi AI.
Primary background	Warm ivory / soft white.	Use large areas of negative space; pages should breathe.
Primary text	Ink navy / near-black.	Use for wordmark, navigation, headings and primary CTAs.
Accent	Muted warm gold.	Use sparingly: small rules, eyebrow text, indicators, subtle selected states. Never use gold as a dominant UI color.
Headline typography	Refined high-contrast serif, similar to the approved wordmark/hero style.	Examples: Editorial New, Canela, Instrument Serif or a production-safe alternative chosen by design/engineering.
Body / UI typography	Clean sans-serif.	Inter, Neue Montreal, Söhne, Manrope or comparable. Prioritize readability.
Imagery	Warm architectural/product photography plus real interface screenshots.	No robots, circuit-brain icons, glowing AI heads, neon blue clouds or generic stock “technology” images.

Brand palette
Color	Reference value	Use
Ink Navy	#0D1B2A	Primary text, buttons, dark sections.
Warm Ivory	#FAF8F3	Primary page background.
Stone	#E8E1D6	Cards, dividers, muted surfaces.
Muted Gold	#C9A968	Small accent only.
Taupe	#C8B8A7	Secondary surfaces / imagery support.

Writing voice
Clear before clever. The headline may be expressive; the sentence below it must explain exactly what it means.
Use business language, not AI jargon. Avoid phrases such as “revolutionize”, “unlock the power of AI”, “next-generation intelligence” and “transformative ecosystem”.
Do not overclaim capabilities, performance, integrations or client outcomes that are not yet delivered.
Use short paragraphs. Let product UI, workflows and examples carry the proof.


PRIMARY VISUAL DIRECTION
3. Approved homepage reference
The image below is the approved reference for the first screen of the website. It establishes the defining visual language for the rest of the product: editorial typography, architectural imagery, generous whitespace, simple navigation, restrained calls to action and a closed chat launcher.

Figure 1 — Approved Home hero reference.
Decision status
LOCKED / APPROVED	Wordmark “Meleph”; descriptor “AI Systems & Digital Products”; hero headline “Give your business a system that listens, understands and acts.”; navbar structure; Get Started CTA; closed chat icon on initial load; overall visual direction shown above.
RECOMMENDED FINAL CONTENT	Exact body copy and section copy specified in this document should be implemented unless changed during content review.
ENGINEERING FLEXIBLE	Exact spacing values, transition timing, image crop behaviour and micro-animation details may be refined during implementation provided the overall composition and hierarchy remain faithful to this reference.


WEBSITE LAYERS
4. Information architecture and navigation
Keep the public navigation intentionally small. Complexity belongs inside the relevant product pages, not in the top navigation.
Page	Suggested route	Purpose
Home	/	Company summary, flagship product preview, proof, work, process and conversion.
Solutions	/solutions	Landing page for the two client solution families.
AI Customer Agent	/solutions/ai-customer-agent	Flagship product page and deepest commercial page.
Custom AI Systems	/solutions/custom-ai-systems	Tailored systems beyond the standard customer-agent setup.
Products	/products	Meleph-owned products.
LeKiray	/products/lekiray	Dedicated LeKiray product page.
Work	/work	Case studies, products and clearly labeled demonstrations.
Project detail	/work/[slug]	Problem → system → how it works → experience → outcome.
About	/about	Company, philosophy and concise background.
How We Work	/about/how-we-work	Delivery process; linked from About and contextual CTAs.
Get Started	/get-started	Demo request and project enquiry flow.

Top navigation
Desktop navigation
Meleph  |  Solutions ▾  |  Products  |  Work  |  About  |  Get Started →
Solutions dropdown
AI Customer Agent — flagship system
Custom AI Systems — tailored workflows, internal systems and integrations
Do not include Insights, Pricing, Careers, Partners, Support, Login or Industries in V1 unless there is real content or functionality to justify them.


SHARED ACROSS EVERY PAGE
5. Global interaction and component rules
Item	Required content	Engineering / UX requirement
Header	Sticky or lightly persistent header on desktop; compact header on mobile.	Logo left; primary navigation centered/right; Get Started button remains visually dominant.
Primary CTA	Dark navy filled button.	Use for Get Started, Request a Demo, Discuss a Project and primary page action.
Secondary CTA	Outlined / text button.	Use for Talk to Us, See How It Works, View Project.
Chat launcher	Closed circular chat icon, bottom-right.	Must NOT auto-open on first load. Open only after explicit click/tap. Preserve state during page navigation when practical.
Section rhythm	Large whitespace; strong headline; brief explanation; visual evidence.	Avoid dense grids or long uninterrupted text.
Cards	Subtle borders, warm neutral surfaces, minimal shadow.	Use only where cards help scanning; avoid “dashboard-card everywhere” SaaS look.
Product UI	Realistic interface mockups or actual product screenshots.	Use product visuals to explain capabilities; avoid decorative fake UI with meaningless data.
Animation	Restrained: fade/slide, progressive workflow lines, subtle hover states.	No constant floating elements, heavy parallax or distracting 3D effects.
Footer	Simple, editorial and useful.	Brand descriptor, main pages, contact details/socials if approved, legal links when available.

Closed chat behaviour
Initial state: only the circular chat launcher is visible.
No auto-open, no timed popup, no welcome bubble covering the hero.
On click: open the Meleph AI Customer Agent panel.
On close: return to launcher-only state.
On mobile: panel should open as a full-height or near-full-height sheet; the launcher must not obstruct navigation or CTAs.


EXACT CONTENT HIERARCHY
6. Home page specification
Goal: in the first 30 seconds, a visitor should understand what Meleph is, what it builds, why the AI Customer Agent is different from a basic chatbot, what else Meleph can build, and how to start a conversation.
6.1 Hero — first screen
Item	Required content	Engineering / UX requirement
Eyebrow	AI SYSTEMS & DIGITAL PRODUCTS	Small uppercase, tracked lettering in muted gold/navy.
Headline	Give your business a system that listens, understands and acts.	Large serif; 3–4 lines on desktop; this is approved/locked.
Support copy	Meleph builds AI systems and digital products that help businesses understand customer needs, capture opportunities, connect teams and move every interaction toward the right next step.	Keep to ~3 lines on desktop. Do not use a long paragraph.
Primary CTA	Explore Our Work →	Links to /work.
Secondary CTA	Talk to Us	Links to /get-started or scrolls to contact route.
Hero visual	Warm architectural image consistent with approved reference.	The visual sets tone; do not auto-overlay an open chat window.
Chat launcher	Closed circular icon, bottom-right.	Open only on user action.

6.2 What we build
Eyebrow: WHAT WE BUILD
One company. Three ways we build.
Block	Copy	What to show
AI Customer Agent	An AI system that handles customer conversations, understands intent, captures information and moves customers toward the right next step.	Capability chips: Answers questions / Captures leads / Books appointments / Supports quotations / Connects channels / Hands conversations to your team.
Custom AI Systems	AI-powered systems designed around the way your business actually operates.	Examples: internal AI assistants / workflow automation / operational dashboards / knowledge systems / portals / integrations.
Digital Products	Products developed by Meleph to solve specific market and business problems.	Add “Starting with LeKiray.” and CTA “Explore Our Products →”.

6.3 Flagship product preview
Eyebrow: AI CUSTOMER AGENT
From conversation to action.
Your customers ask questions, request information and show intent every day. The Meleph AI Customer Agent understands those conversations, responds using your business information and connects each customer to the next appropriate action.
Step	Copy	Presentation
01 Understand	Recognises what the customer is asking and what they are trying to achieve.	Use a simple horizontal/scrolling workflow with icon + one sentence.
02 Answer	Responds using information approved by your business.	Use a simple horizontal/scrolling workflow with icon + one sentence.
03 Capture	Collects the details your team needs, including contact information, requirements and customer intent.	Use a simple horizontal/scrolling workflow with icon + one sentence.
04 Act	Guides the customer toward a quotation, appointment, enquiry, purchase path or another relevant next step.	Use a simple horizontal/scrolling workflow with icon + one sentence.
05 Connect	Keeps the conversation available to your team with the context already captured.	Use a simple horizontal/scrolling workflow with icon + one sentence.

6.4 Capabilities preview
Headline: One agent. Every part of the conversation connected.
Capability	Copy	Presentation
Customer conversations	Answer questions naturally using approved business information.	Compact icon/card; 2 columns desktop, 1 column mobile.
Lead capture	Collect customer details, requirements and intent during the conversation.	Compact icon/card; 2 columns desktop, 1 column mobile.
Conversation inbox	Give the team one place to review conversations, customer information and follow-up status.	Compact icon/card; 2 columns desktop, 1 column mobile.
Connected channels	Keep supported conversations connected across the channels where customers reach the business.	Compact icon/card; 2 columns desktop, 1 column mobile.
Appointments & quotations	Move customers directly from interest into booking, quotation or enquiry flows.	Compact icon/card; 2 columns desktop, 1 column mobile.
Proactive messaging	Follow up with customers, send reminders and reconnect when appropriate.	Compact icon/card; 2 columns desktop, 1 column mobile.
Human handoff	Bring a team member into the conversation when human judgment is required.	Compact icon/card; 2 columns desktop, 1 column mobile.
Workflows & integrations	Connect conversations to the systems and processes the business already uses.	Compact icon/card; 2 columns desktop, 1 column mobile.

6.5 Selected work
Headline: See what we build.
Project	Label	Description
Real Estate AI Customer Agent	DEMONSTRATION	Helps property visitors ask about availability, compare options, share requirements and request a viewing.
Aviation Enquiry System	DEMONSTRATION	Helps customers understand services, submit enquiries and send the information needed for follow-up.
LeKiray	MELEPH PRODUCT	A digital marketplace connecting people and businesses with vehicles, machinery and equipment available for rent.

6.6 How we work preview
Headline: Understand first. Build second.
01 Understand — Learn the business, users, information and current workflow.
02 Define — Identify the problem and determine what the system needs to accomplish.
03 Design — Map the user experience, workflows and system behaviour.
04 Build — Develop the product and connect the necessary systems.
05 Launch — Test, deploy and prepare the business to use it.
06 Improve — Learn from real usage and continue improving the system.
6.7 Final CTA
Have a process that should work better?
Tell us what is happening today and what you want to improve. You do not need to arrive with a technical specification.

Primary: Discuss a Project    Secondary: Request a Demo


TWO WAYS MELEPH BUILDS FOR CLIENTS
7. Solutions page
Purpose: route a prospective client into the correct solution family without turning the page into a feature catalogue.
Item	Required content	Engineering / UX requirement
Eyebrow	SOLUTIONS	Small uppercase.
Headline	Systems built around how your business actually works.	Large serif.
Support copy	From customer-facing AI to custom operational systems, we design technology around the problem, workflow and people it needs to support.	One short paragraph.

Solution 1 — AI Customer Agent
Turn customer conversations into business action.
An AI Customer Agent that answers questions, understands intent, captures opportunities and connects customers to your team and business processes.

Preview capabilities: customer conversations, lead capture, conversation inbox, connected channels, appointments, quotations, proactive messaging, human handoff, workflows and reporting.

CTA: Explore AI Customer Agent →
Solution 2 — Custom AI Systems
When your workflow does not fit a template.
We design and build AI-powered systems around your processes, information and business goals.

Examples: internal AI assistants, knowledge systems, workflow automation, operational dashboards, business portals, data integrations, employee tools and customer portals.

CTA: Explore Custom AI Systems →


FLAGSHIP PRODUCT PAGE
8. AI Customer Agent page
This is the deepest commercial page on the website. It should feel like a real product, not a service brochure. Show realistic conversations, inbox views, channel states, forms, workflow diagrams and data handoff.
Element	Exact copy	Notes
Eyebrow	AI CUSTOMER AGENT	Product identifier.
Headline	From first question to next action.	Primary product promise.
Support copy	An AI Customer Agent built around your business, capable of answering customers, understanding what they need, capturing information and moving each conversation forward.	Keep concise.
Primary CTA	Request a Demo	Links to Get Started with intent preselected.
Secondary CTA	See How It Works	Scroll to product workflow section.

Section headline	Required message	Visual / implementation
A conversation that actually goes somewhere.	Show a realistic customer asking a specific question and the agent offering a relevant next action. Example: apartment availability → compare options / schedule a viewing.	Large conversation UI; use company-specific example data.
It understands more than keywords.	The agent follows the conversation, asks relevant questions and identifies what the customer is trying to accomplish.	Show intent fields or context tags such as service interest, budget, location, urgency, time preference.
Built around what your business knows.	The agent responds using information approved by your business, including services, products, policies, availability, frequently asked questions and other relevant knowledge.	Show knowledge source / content management UI.
Capture the opportunity while the customer is interested.	The agent can collect the information your team needs during the conversation instead of sending customers to a generic contact form.	Show name, phone, email, interest, requirement, location, preferred time and notes.
Every conversation in one place.	Your team can review conversations, customer information, intent, assigned staff and follow-up status from one workspace.	Show conversation list, conversation pane, customer profile, status, owner, timestamp, internal note.
One customer experience across every connected channel.	Customers should not have to start from zero every time they reach your business. Meleph keeps supported conversations and customer context connected.	Only show channels actually supported at launch. Candidate labels: Website, WhatsApp, Instagram, Email.
The conversation can trigger the next step.	Appointments, quotation requests, lead creation, notifications and connected-system updates can happen from the conversation.	Use a flow visual from conversation → action → business system.
Not every conversation has to start with the customer.	Use customer context to send appropriate follow-ups, reminders, updates and re-engagement messages.	Examples: appointment reminder, quotation follow-up, availability update, request follow-up.
AI when it helps. People when they matter.	When a conversation requires judgment, negotiation or personal attention, the agent can hand it to your team with the context already captured.	Visually demonstrate handoff to a staff member.
See what customers are actually asking for.	Reporting should reveal conversations, qualified leads, appointments, common questions, customer interests, handoffs and follow-up status.	Do not publish fake ROI or accuracy claims; use clearly illustrative UI until real data exists.

Product workflow
Understand → Answer → Capture → Act → Connect → Follow up
Use this sequence as the recurring mental model across the page. The exact UI may differ by client, but the product story should consistently show that the AI moves beyond answering into action and team context.


TAILORED SOLUTION FAMILY
9. Custom AI Systems page
Element	Exact copy	Notes
Eyebrow	CUSTOM AI SYSTEMS	Solution identifier.
Headline	When your workflow does not fit a template.	Approved direction.
Support copy	Some business problems need more than another piece of off-the-shelf software. We design systems around the way your organisation actually operates.	Plain-language explanation.
CTA	Discuss Your Project	Primary conversion.

What we build
Internal AI Assistants — Give teams faster access to company knowledge and information.
Workflow Automation — Connect repetitive processes and reduce unnecessary manual work.
Operational Dashboards — Bring important information and activity into one place.
Knowledge Systems — Organise business knowledge so people and AI systems can use it effectively.
Business Portals — Create tailored interfaces for customers, employees, partners or suppliers.
Integrations — Connect systems so information can move where it needs to.
How the page should explain custom work
Headline: We do not start with the technology.
We first understand the workflow, the people involved, the information being used and where the current process breaks down.
Example workflow
Enquiry arrives → AI classifies request → relevant data is saved → task is created → responsible staff member is notified → customer is updated → dashboard is updated.


MELEPH-OWNED DIGITAL PRODUCTS
10. Products and LeKiray
10.1 Products landing page
Element	Copy	Implementation
Eyebrow	OUR PRODUCTS	Small uppercase.
Headline	Digital products built to solve real problems.	Main product-page headline.
Support copy	Alongside client systems, Meleph develops and operates its own digital products.	Short intro.
First product	LeKiray	Large product card with real product visuals and dedicated CTA.

10.2 LeKiray page
Element	Exact copy	Notes
Eyebrow	LEKIRAY	Product identifier.
Headline	Find what you need. Rent it without the unnecessary search.	Product promise.
Support copy	LeKiray connects customers looking for vehicles, machinery and industrial equipment with providers offering them for rent.	Clear category description.
Primary CTA	Browse Listings	Link to product experience when available.
Secondary CTA	List Your Equipment	Provider route.

Core sections
Search — Search by category, location and requirement.
Compare — Review listings, specifications and provider information.
Enquire — Contact providers about availability and rental details.
For providers — List available assets and receive enquiries from potential customers.
Important product separation
LeKiray is a Meleph-owned digital product, not a feature of the AI Customer Agent and not automatically part of a client solution package. The website should make this distinction visually and in copy.


EVIDENCE, NOT DECORATION
11. Work / case studies
Element	Copy	Notes
Eyebrow	OUR WORK	Small uppercase.
Headline	See what we build.	Keep direct.
Support copy	Real systems, Meleph products and developed demonstrations showing how we approach business problems.	Do not imply all demonstrations are client deployments.
Filters	All / Client Work / AI Customer Systems / Custom Systems / Digital Products / Demonstrations	Desktop tabs; mobile dropdown or horizontally scrollable chips.

Project card requirements
Project name
Project type label: CLIENT WORK / MELEPH PRODUCT / DEMONSTRATION
Industry
One-sentence problem or purpose
Large screenshot or product image
View project →
Individual project page structure
Section	Required content	Rule
The problem	What was happening and what needed to change.	Do not begin with technologies.
The system	What Meleph designed or built.	Summarize the product/system.
How it works	Workflow and system logic.	Use diagram or sequence.
The experience	Actual screens and user interactions.	Large UI images.
The outcome	What the system enables.	Use real results only when documented; otherwise describe enabled capability.
Demonstration disclosure	“Demonstration — developed by Meleph to illustrate a potential application.”	Required whenever work was not commissioned/deployed for a client.



COMPANY TRUST
12. About and How We Work
12.1 About page
Element	Exact copy	Notes
Eyebrow	ABOUT MELEPH	Small uppercase.
Headline	Technology should fit the business, not the other way around.	Main statement.
Support copy	Meleph is an AI systems and digital product company focused on building practical technology around real business needs.	Concise company definition.

Principles
Practical — We focus on problems that can actually be improved with better systems.
Thoughtful — We understand the business before deciding what technology belongs inside it.
Connected — We design systems as part of the wider business process, not isolated tools.
Long-term — We build with the expectation that the product will evolve as the business does.
Avoid a bloated Mission / Vision / Values / History layout unless there is meaningful content. Keep About credible and restrained.
12.2 How We Work
Stage	Copy	Notes
Hero headline	Understand first. Build second.	Main process statement.
Discover	Understand the business, users, information and existing process.	Step 1
Define	Identify the problem and agree on what the system needs to accomplish.	Step 2
Design	Map the experience, workflows and system behaviour.	Step 3
Build	Develop the product and necessary integrations.	Step 4
Test & Launch	Test real scenarios, refine behaviour and deploy the system.	Step 5
Improve	Review usage, identify improvements and continue evolving the product.	Step 6

Client inputs / Meleph outputs
Group	Content	Rule
What we need from the client	Business information; existing workflow; people involved; systems currently used; desired outcome.	Present as a short checklist.
What the client receives	Defined solution; interface design; working system; integrations; testing; deployment; ongoing support where agreed.	Do not promise support terms that are not part of the commercial agreement.



SIMPLE, LOW-FRICTION ENQUIRY
13. Get Started / conversion flow
Element	Exact copy	Notes
Headline	Tell us what you are trying to improve.	Direct and non-technical.
Support copy	You do not need to know what technology you need. Tell us about the problem, process or opportunity and we will help determine the right starting point.	Avoid procurement-style language.
Path 1	Request a Demo	See the AI Customer Agent working through a relevant business scenario.
Path 2	Discuss a Project	Tell us about a process, product or system you want to build or improve.

Form fields
Name — required
Company — required
Phone — required or optional based on sales process; decide before build
Email — required
What are you interested in? — AI Customer Agent / Custom AI System / Digital Product Development / Not sure yet
Tell us briefly what you want to improve — multi-line text
Submit button: Send Enquiry →
Submission behaviour
Validate required fields inline.
On success, show a clear confirmation state without losing the submitted context.
Send the enquiry to the designated team route and store it in the agreed lead system/database.
Preserve source/intent (Request a Demo vs Discuss a Project) as structured data.
Do not expose internal system names to the visitor.
Provide a fallback contact route if submission fails.


ENGINEERING QUALITY BAR
14. Responsive, accessibility and performance requirements
Responsive behaviour
Viewport	Expected layout	Requirement
Desktop	Wide editorial layout; hero copy and image share the viewport; navigation visible.	Target reference: 1440px+ but layout must remain sound at 1280px.
Tablet	Reduce typography scale, preserve whitespace, move dense card grids to 2 columns.	Keep CTA hierarchy intact.
Mobile	Single-column composition; hamburger/compact nav; hero image follows headline/content; CTAs stack or use full-width buttons.	Chat launcher must not cover content or browser controls.
Product UI	Scale via responsive crops, horizontal overflow only where intentional.	Avoid illegible full-desktop screenshots shrunk to phone width.

Accessibility
Semantic heading order (one H1 per page; logical H2/H3 hierarchy).
Visible keyboard focus states for navigation, buttons, forms and chat launcher.
All interactive controls keyboard accessible.
Color contrast should meet WCAG AA for body text and actionable elements.
Images and screenshots require meaningful alt text; decorative images should use empty alt text.
Form fields need persistent labels, not placeholder-only labeling.
Respect prefers-reduced-motion for nonessential animation.
Performance and SEO
Optimize hero and architectural imagery (responsive srcset / modern formats).
Lazy-load below-the-fold imagery and heavy product screenshots.
Avoid large animation libraries if CSS/native browser effects are sufficient.
Each page requires a unique title, meta description and canonical URL.
Use structured internal linking between Solutions, Work and Get Started.
Do not render critical page copy only inside images or canvas elements.
Aim for fast first paint and stable layout; reserve space for images to prevent layout shift.


BEFORE THE WEBSITE IS CONSIDERED READY
15. Implementation checklist and acceptance criteria
Locked decisions
Brand name displayed as “Meleph” (no “& Co.” in primary site identity).
Descriptor: “AI Systems & Digital Products”.
Home hero headline: “Give your business a system that listens, understands and acts.”
Top navigation: Solutions / Products / Work / About / Get Started.
AI Customer Agent is the product; inbox, channels, proactive messaging, lead capture and workflows are capabilities within it.
Chat widget is closed by default and opens only by explicit user action.
Visual direction follows the approved Home reference included in this document.
Demonstrations must never be represented as deployed client work.
Engineering acceptance checklist
☐	All routes in the sitemap exist or are intentionally deferred with no broken navigation.
☐	Header and Get Started CTA work across desktop, tablet and mobile.
☐	Home hero matches the approved hierarchy and visual tone.
☐	Chat launcher is closed on first load; open/close behaviour works across breakpoints.
☐	Solutions page routes correctly to AI Customer Agent and Custom AI Systems.
☐	AI Customer Agent page contains real explanatory UI/workflow visuals rather than generic AI art.
☐	Connected-channel labels only include supported channels.
☐	Products clearly distinguishes Meleph-owned products from client solutions.
☐	Work cards and project pages have correct CLIENT WORK / MELEPH PRODUCT / DEMONSTRATION labels.
☐	Get Started form validates, submits, confirms success and preserves enquiry intent.
☐	No lorem ipsum, placeholder names, fake testimonials, fake customer logos or unsupported performance claims remain.
☐	Images are optimized and layout does not visibly shift during load.
☐	Keyboard navigation, focus states, contrast and form labels pass accessibility review.
☐	Mobile screens maintain hierarchy, readable typography and unobstructed CTAs.
☐	Page metadata is present for all production routes.
Final build principle
Headline → explanation → evidence
Every major page should first say something worth reading, then explain it plainly, then show the system, interface or workflow that proves the point. If a section cannot show evidence, keep the copy short rather than filling space with generic marketing language.

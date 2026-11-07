import { PrimaryCta, SecondaryCta } from "@/components/site/section";

export default function NotFound() {
  return (
    <section className="section-y">
      <div className="page-container flex max-w-3xl flex-col gap-7">
        <p className="eyebrow">Page not found</p>
        <h1 className="display-page">This page does not exist.</h1>
        <p className="lede">The link may be out of date. Start from the home page, or tell us what you were looking for.</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <PrimaryCta href="/">Go to the home page</PrimaryCta>
          <SecondaryCta href="/get-started">Contact us</SecondaryCta>
        </div>
      </div>
    </section>
  );
}

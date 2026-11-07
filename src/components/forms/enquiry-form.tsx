"use client";

import { useState } from "react";
import { ArrowRightIcon, CheckIcon, TriangleAlertIcon } from "lucide-react";
import {
  ENQUIRY_PATHS,
  INTERESTS,
  SITE,
  type EnquiryPath,
  type Interest,
} from "@/lib/site";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type Values = {
  name: string;
  company: string;
  phone: string;
  email: string;
  interest: Interest | "";
  message: string;
};

type Errors = Partial<Record<keyof Values, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.company.trim()) errors.company = "Enter your company or organisation.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = "Enter an email address like name@company.com.";
  if (values.phone.trim() && values.phone.replace(/[^\d]/g, "").length < 7)
    errors.phone = "Enter a phone number with country code, or leave it blank.";
  if (!values.interest) errors.interest = "Choose what you are interested in.";
  if (values.message.trim().length < 10) errors.message = "Tell us a little more, at least a sentence.";
  return errors;
}

export function EnquiryForm({
  defaultPath,
  defaultInterest,
}: {
  defaultPath: EnquiryPath;
  defaultInterest?: Interest;
}) {
  const [path, setPath] = useState<EnquiryPath>(defaultPath);
  const [values, setValues] = useState<Values>({
    name: "",
    company: "",
    phone: "",
    email: "",
    interest: defaultInterest ?? "",
    message: "",
  });
  const [touched, setTouched] = useState<Partial<Record<keyof Values, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");

  const errors = validate(values);
  const show = (key: keyof Values) => (touched[key] ? errors[key] : undefined);
  const set = (key: keyof Values) => (value: string) => setValues((v) => ({ ...v, [key]: value }));
  const touch = (key: keyof Values) => () => setTouched((t) => ({ ...t, [key]: true }));

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched({ name: true, company: true, phone: true, email: true, interest: true, message: true });
    const firstInvalid = (Object.keys(errors) as (keyof Values)[])[0];
    if (firstInvalid) {
      document.getElementById(`enquiry-${firstInvalid}`)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, path, source: window.location.pathname + window.location.search }),
      });
      setStatus(res.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  }

  const pathTitle = ENQUIRY_PATHS.find((p) => p.value === path)?.title;
  const interestLabel = INTERESTS.find((i) => i.value === values.interest)?.label;

  if (status === "sent") {
    return (
      <div className="flex flex-col gap-8 rounded-2xl bg-card p-8 ring-1 ring-foreground/10 sm:p-10" role="status">
        <span className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground">
          <CheckIcon aria-hidden="true" />
        </span>
        <div className="flex flex-col gap-3">
          <h2 className="display-section">Thank you, {values.name.split(" ")[0]}.</h2>
          <p className="lede">
            We have your enquiry and will reply to {values.email}. Here is what you sent, so you have it
            for reference.
          </p>
        </div>
        <dl className="grid gap-x-8 gap-y-5 border-t pt-6 sm:grid-cols-2">
          <Summary label="Request" value={pathTitle} />
          <Summary label="Interest" value={interestLabel} />
          <Summary label="Company" value={values.company} />
          <Summary label="Phone" value={values.phone || "Not provided"} />
          <Summary label="What you want to improve" value={values.message} wide />
        </dl>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-10">
      <FieldSet>
        <FieldLegend className="sr-only">What would you like to do?</FieldLegend>
        <ToggleGroup
          type="single"
          value={path}
          onValueChange={(value) => value && setPath(value as EnquiryPath)}
          spacing={3}
          className="grid w-full grid-cols-1 sm:grid-cols-2"
        >
          {ENQUIRY_PATHS.map((option) => (
            <ToggleGroupItem
              key={option.value}
              value={option.value}
              className="h-auto flex-col items-start justify-start gap-2 rounded-xl border bg-card p-5 text-left whitespace-normal hover:bg-card data-[state=on]:border-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
            >
              <span className="font-serif text-2xl leading-tight">{option.title}</span>
              <span className="text-sm font-normal opacity-75">{option.text}</span>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </FieldSet>

      <FieldGroup>
        <div className="grid gap-6 sm:grid-cols-2">
          <TextField id="name" label="Name" autoComplete="name" value={values.name} onChange={set("name")} onBlur={touch("name")} error={show("name")} />
          <TextField id="company" label="Company" autoComplete="organization" value={values.company} onChange={set("company")} onBlur={touch("company")} error={show("company")} />
          <TextField id="email" label="Email" type="email" autoComplete="email" value={values.email} onChange={set("email")} onBlur={touch("email")} error={show("email")} />
          <TextField id="phone" label="Phone" optional type="tel" autoComplete="tel" value={values.phone} onChange={set("phone")} onBlur={touch("phone")} error={show("phone")} />
        </div>

        <Field data-invalid={!!show("interest") || undefined}>
          <FieldLabel htmlFor="enquiry-interest">What are you interested in?</FieldLabel>
          <Select
            value={values.interest || undefined}
            onValueChange={(value) => {
              set("interest")(value);
              touch("interest")();
            }}
          >
            <SelectTrigger id="enquiry-interest" className="w-full" aria-invalid={!!show("interest") || undefined}>
              <SelectValue placeholder="Choose one" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectGroup>
                {INTERESTS.map((interest) => (
                  <SelectItem key={interest.value} value={interest.value}>
                    {interest.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {show("interest") ? <FieldError>{show("interest")}</FieldError> : null}
        </Field>

        <Field data-invalid={!!show("message") || undefined}>
          <FieldLabel htmlFor="enquiry-message">Tell us briefly what you want to improve</FieldLabel>
          <Textarea
            id="enquiry-message"
            rows={5}
            maxLength={4000}
            value={values.message}
            onChange={(event) => set("message")(event.target.value)}
            onBlur={touch("message")}
            aria-invalid={!!show("message") || undefined}
            className="min-h-36"
          />
          {show("message") ? (
            <FieldError>{show("message")}</FieldError>
          ) : (
            <FieldDescription>What happens today, and what would better look like?</FieldDescription>
          )}
        </Field>
      </FieldGroup>

      {status === "failed" ? (
        <Alert variant="destructive">
          <TriangleAlertIcon />
          <AlertTitle>Your enquiry was not sent.</AlertTitle>
          <AlertDescription>
            Try again, or email us at{" "}
            <a href={`mailto:${SITE.email}`} className="underline underline-offset-4">
              {SITE.email}
            </a>
            . Your answers are still here.
          </AlertDescription>
        </Alert>
      ) : null}

      <div>
        <Button type="submit" size="cta" disabled={status === "sending"}>
          {status === "sending" ? <Spinner data-icon="inline-start" /> : null}
          {status === "sending" ? "Sending…" : "Send Enquiry"}
          {status === "sending" ? null : <ArrowRightIcon data-icon="inline-end" />}
        </Button>
      </div>
    </form>
  );
}

function TextField({
  id,
  label,
  optional = false,
  error,
  onChange,
  ...props
}: {
  id: keyof Values;
  label: string;
  optional?: boolean;
  error?: string;
  onChange: (value: string) => void;
} & Omit<React.ComponentProps<"input">, "id" | "onChange">) {
  return (
    <Field data-invalid={!!error || undefined}>
      <FieldLabel htmlFor={`enquiry-${id}`}>
        {label}
        {optional ? <span className="font-normal text-muted-foreground">(optional)</span> : null}
      </FieldLabel>
      <Input
        id={`enquiry-${id}`}
        name={id}
        required={!optional}
        aria-invalid={!!error || undefined}
        onChange={(event) => onChange(event.target.value)}
        {...props}
      />
      {error ? <FieldError>{error}</FieldError> : null}
    </Field>
  );
}

function Summary({ label, value, wide = false }: { label: string; value?: string; wide?: boolean }) {
  return (
    <div className={wide ? "flex flex-col gap-1 sm:col-span-2" : "flex flex-col gap-1"}>
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="whitespace-pre-wrap">{value}</dd>
    </div>
  );
}

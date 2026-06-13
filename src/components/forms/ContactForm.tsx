"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { cityNames } from "@/data/locations";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const serviceOptions = [
  ...services.map((s) => s.name),
  "Other",
];

const usPhoneRegex = /^[\s.()+-]*(\d[\s.()+-]*){10,}$/;

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  phone: z
    .string()
    .min(1, "Phone number is required.")
    .regex(usPhoneRegex, "Please enter a valid US phone number."),
  email: z.string().min(1, "Email is required.").email("Please enter a valid email address."),
  city: z.string().min(1, "Please select your city."),
  service: z.string().min(1, "Please select a service."),
  description: z
    .string()
    .min(20, "Please tell us a little more (at least 20 characters)."),
  referral: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

interface ContactFormProps {
  /** Pre-select a city in the dropdown (used on location pages). */
  defaultCity?: string;
}

export function ContactForm({ defaultCity }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      city: defaultCity && cityNames.includes(defaultCity) ? defaultCity : "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      const json = await res.json();
      if (!json.success) throw new Error("Submission failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-lg border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-600" aria-hidden="true" />
        <h3 className="mt-4 font-display text-2xl font-semibold text-dark">
          Thank you!
        </h3>
        <p className="mt-2 text-mid">
          We&apos;ll be in touch within 1 business day!
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 font-display text-sm font-medium uppercase tracking-wide text-accent hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <Field label="Full Name" htmlFor="name" error={errors.name?.message}>
        <input
          id="name"
          type="text"
          autoComplete="name"
          {...register("name")}
          className={inputCls(!!errors.name)}
        />
      </Field>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Phone Number" htmlFor="phone" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            className={inputCls(!!errors.phone)}
          />
        </Field>
        <Field label="Email Address" htmlFor="email" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
            className={inputCls(!!errors.email)}
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Service Area / City" htmlFor="city" error={errors.city?.message}>
          <select id="city" {...register("city")} className={inputCls(!!errors.city)}>
            <option value="">Select your city…</option>
            {cityNames.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label="Service Needed"
          htmlFor="service"
          error={errors.service?.message}
        >
          <select
            id="service"
            {...register("service")}
            className={inputCls(!!errors.service)}
          >
            <option value="">Select a service…</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        label="Project Description"
        htmlFor="description"
        error={errors.description?.message}
      >
        <textarea
          id="description"
          rows={5}
          {...register("description")}
          className={inputCls(!!errors.description)}
          placeholder="Tell us about your project — size, finish, timeline, anything we should know."
        />
      </Field>

      <Field
        label="How did you hear about us?"
        htmlFor="referral"
        optional
        error={errors.referral?.message}
      >
        <select id="referral" {...register("referral")} className={inputCls(false)}>
          <option value="">Select one…</option>
          <option value="Google">Google</option>
          <option value="Facebook">Facebook</option>
          <option value="Referral">Referral</option>
          <option value="Yard Sign">Yard Sign</option>
          <option value="Other">Other</option>
        </select>
      </Field>

      {status === "error" && (
        <p className="flex items-center gap-2 rounded-md bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 shrink-0" />
          Something went wrong sending your request. Please try again or call us
          directly.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 font-display font-medium uppercase tracking-wide text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting && <Loader2 className="h-5 w-5 animate-spin" />}
        {isSubmitting ? "Sending…" : "Send My Request"}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block font-body text-sm font-medium text-dark"
      >
        {label}
        {optional && <span className="ml-1 text-mid">(optional)</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function inputCls(hasError: boolean): string {
  return cn(
    "w-full rounded-lg border bg-white px-4 py-3 text-base text-dark shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent/40",
    hasError ? "border-red-400" : "border-border focus:border-accent",
  );
}

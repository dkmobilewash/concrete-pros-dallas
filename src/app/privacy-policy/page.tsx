import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy | Concrete Pros Of Dallas",
  description:
    "Read the Concrete Pros Of Dallas privacy policy — what information we collect through our contact form, how we use it, and how to request removal.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <Section background="white">
      <div className="prose-legal mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-dark">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-mid">Last updated: January 2024</p>

        <p className="mt-6">
          Concrete Pros Of Dallas (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
          respects your privacy. This Privacy Policy explains what information we
          collect when you use our website, how we use it, and the choices you
          have. By using our website or submitting our contact form, you agree to
          the practices described below.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We only collect the information you choose to provide. When you submit
          our contact or estimate request form, we collect your name, phone
          number, email address, the city you&apos;re in, the type of concrete
          service you need, a description of your project, and optionally how you
          heard about us. We do not ask for or collect sensitive personal or
          financial information through this website.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          We use the information you submit for one purpose: to respond to your
          inquiry and provide you with an estimate or the information you
          requested. A member of our team may contact you by phone or email to
          discuss your project, schedule a site visit, or follow up on a quote.
          We do not use your information for unrelated marketing without your
          consent.
        </p>

        <h2>How We Share Your Information</h2>
        <p>
          We do not sell, rent, or trade your personal information to any third
          party. We may share information only with trusted service providers who
          help us operate our website or communicate with you (for example, an
          email delivery service), and only to the extent necessary for them to
          perform that function. We may also disclose information if required to
          do so by law.
        </p>

        <h2>Cookies and Analytics</h2>
        <p>
          Our website does not use cookies beyond what may be required by basic,
          privacy-respecting analytics used to understand general site traffic
          and improve our content. These analytics do not personally identify you
          and are not used for advertising. Most web browsers allow you to refuse
          or delete cookies through your browser settings.
        </p>

        <h2>Data Security and Retention</h2>
        <p>
          We take reasonable measures to protect the information you submit
          against unauthorized access, loss, or misuse. We retain contact form
          submissions only as long as needed to respond to your request and
          maintain a record of our communications.
        </p>

        <h2>Your Choices and Data Removal</h2>
        <p>
          You may request that we correct or delete the information you have
          submitted at any time. To do so, contact us at{" "}
          <a href={SITE.emailHref}>{SITE.email}</a> or call{" "}
          <a href={SITE.phoneHref}>{SITE.phone}</a>, and we will promptly honor
          reasonable requests.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be
          posted on this page with an updated revision date. We encourage you to
          review this page periodically.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or how we handle your
          information, please reach out to Concrete Pros Of Dallas at{" "}
          <a href={SITE.emailHref}>{SITE.email}</a> or{" "}
          <a href={SITE.phoneHref}>{SITE.phone}</a>.
        </p>
      </div>
    </Section>
  );
}

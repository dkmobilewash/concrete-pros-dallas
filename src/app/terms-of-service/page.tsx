import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms of Service | Concrete Pros Of Dallas",
  description:
    "The terms of service governing use of the Concrete Pros Of Dallas website, including disclaimers, limitation of liability, and governing law.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <Section background="white">
      <div className="prose-legal mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold text-dark">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-mid">Last updated: January 2024</p>

        <p className="mt-6">
          These Terms of Service (&quot;Terms&quot;) govern your use of the website
          operated by Concrete Pros Of Dallas (&quot;we,&quot; &quot;us,&quot; or
          &quot;our&quot;). By accessing or using this website, you agree to be
          bound by these Terms. If you do not agree, please do not use the site.
        </p>

        <h2>Use of the Website</h2>
        <p>
          This website is provided for general informational purposes about our
          concrete services in the Dallas–Fort Worth area. You agree to use the
          website only for lawful purposes and not to interfere with its
          operation, attempt to gain unauthorized access to any portion of it, or
          use it in any way that could damage or impair the site. Submitting an
          inquiry through our contact form does not create a contract for services;
          any work is subject to a separate written estimate and agreement.
        </p>

        <h2>No Warranties</h2>
        <p>
          The content on this website is provided &quot;as is&quot; without
          warranties of any kind, express or implied. While we strive to keep
          information accurate and current, we make no warranty that the content
          is complete, reliable, or error-free. Service descriptions, timelines,
          and any pricing references are general and may vary based on the
          specifics of your project. Nothing on this website should be relied upon
          as professional engineering or construction advice.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Concrete Pros Of Dallas shall
          not be liable for any direct, indirect, incidental, consequential, or
          special damages arising out of or related to your use of, or inability
          to use, this website. This includes, without limitation, any damages
          resulting from reliance on information presented on the site.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites or services that
          are not owned or controlled by us. We are not responsible for the
          content, privacy practices, or availability of any third-party sites.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of
          the State of Texas, without regard to its conflict of law provisions.
          Any disputes arising under these Terms shall be subject to the
          jurisdiction of the courts located in the State of Texas.
        </p>

        <h2>Changes to These Terms</h2>
        <p>
          We may revise these Terms at any time by updating this page. Your
          continued use of the website after changes are posted constitutes your
          acceptance of the revised Terms.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about these Terms, contact Concrete Pros Of Dallas
          at <a href={SITE.emailHref}>{SITE.email}</a> or{" "}
          <a href={SITE.phoneHref}>{SITE.phone}</a>.
        </p>
      </div>
    </Section>
  );
}

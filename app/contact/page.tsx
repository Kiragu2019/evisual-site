import CtaSection from "../components/CtaSection";

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Let's Talk</h1>
        <p className="text-slate-500 mb-8">Have a project in mind? Reach out via WhatsApp or email.</p>
      </section>
      <CtaSection />
    </div>
  );
}
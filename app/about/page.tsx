import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-20 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">About Visual Studios</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          We are a creative agency dedicated to bringing your visual ideas to life.
        </p>
      </section>
      <Stats />
      <Testimonials />
    </div>
  );
}
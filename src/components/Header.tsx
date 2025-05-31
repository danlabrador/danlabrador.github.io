import Navigation from "./Navigation";
import Socials from "./Socials";

export default function Header() {
  return (
    <header className="sticky top-0 flex max-h-screen flex-col justify-between pt-24 pb-24 lg:pt-0 lg:pb-0 lg:relative">
      <section className="hero">
        <h1 className="font-figtree text-5xl font-bold hero-title-shine sm:text-4xl">
          Dan Labrador
        </h1>
        <p className="font-figtree text-xl font-semibold mt-2.5">
          Analytics Engineer
        </p>
        <p className="text-slate-400 text-sm leading-6 mt-4 w-3/4">
          Delivering Python / SQL-driven ETL pipelines that provide business
          teams with reliable, real-time insights
        </p>
        <Navigation />
      </section>
      <Socials />
    </header>
  );
}

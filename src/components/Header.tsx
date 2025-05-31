import Navigation from "./Navigation";
import Socials from "./Socials";

export default function Header() {
  return (
    <header className="header">
      <section className="hero">
        <h1 className="hero__title hero__title--shine">Dan Labrador</h1>
        <p className="hero__subtitle">Analytics Engineer</p>
        <p className="hero__message">
          Delivering Python / SQL-driven ETL pipelines that provide business
          teams with reliable, real-time insights
        </p>
        <Navigation />
      </section>
      <Socials />
    </header>
  );
}

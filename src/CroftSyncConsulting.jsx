// CroftSyncConsulting.jsx
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import PricingCarousel from "./PricingCarousel";
import "./index.css";

export default function CroftSyncConsulting() {
  return (
    <div className="cs-root">
      <header className="cs-hero">
        <div className="cs-hero__content">
          <img
            src={`../assets/logo-full.png`}
            alt="CroftSync Consulting logo"
            className="cs-logo"
          />
          <h1 className="cs-hero__title">
            Connect Your HR, Identity, and Business Systems — Automatically.
          </h1>
          <p className="cs-hero__subtitle">
            Helping organizations eliminate manual onboarding and
            HRIS-to-identity integration bottlenecks with secure, scalable
            integrations that just work.
          </p>
        </div>
      </header>

      <main className="cs-main">
        <section className="cs-section">
          <h2 className="cs-h2">About CroftSync</h2>
          <p className="cs-p">
            CroftSync is a consulting partner focused on helping organizations
            bridge the gap between people, data, and technology. We design and
            implement intelligent integrations that unify human resources,
            customer operations, and enterprise systems into a cohesive digital
            ecosystem.
            <br />
            <br />
          </p>
          <p className="cs-p">
            Our mission is to simplify complexity. We work with IT, HR, and
            business operations teams to automate repetitive tasks, ensure data
            consistency, and enhance system reliability. Whether integrating
            HRIS with identity and access management, connecting finance with
            operations through ERP automation, or establishing unified data
            pipelines, CroftSync brings precision and clarity to every
            engagement.
            <br />
            <br />
          </p>
          <p className="cs-p">
            Each integration we build is designed with scalability, governance,
            and compliance in mind. Our solutions reduce manual effort, improve
            security posture, and create the operational transparency modern
            teams need to grow efficiently.
            <br />
            <br />
          </p>
        </section>

        <section className="cs-section">
          <h2 className="cs-h2">
            Specialized in HR, Identity, and Application Integrations
          </h2>
          <ul className="cs-list">
            <li>
              <strong>Integration Strategy & Design</strong> — Identify
              opportunities to connect HR, IT, and identity systems securely for
              cleaner data, fewer manual tasks, and stronger compliance.
            </li>
            <li>
              <strong>Automation Pilots</strong> — Two-week, fixed-scope
              projects that deliver a working integration — not just diagrams.
            </li>
            <li>
              <strong>Identity & Access Provisioning</strong> — Automate account
              creation and removal across your stack using SSO and SCIM-based
              flows.
            </li>
            <li>
              <strong>Managed Integration Support</strong> — Ongoing monitoring,
              documentation, and small improvements that keep everything in sync
              as your systems evolve.
            </li>
          </ul>
        </section>

        <PricingCarousel />

        <section className="cs-section">
          <h2 className="cs-h2">What We Integrate</h2>
          <p className="cs-p">
            <strong>Your data should flow like your organization.</strong> From
            hiring to offboarding, CroftSync ensures your people data moves
            seamlessly across every system — securely, accurately, and
            automatically.
          </p>
          <div className="cs-figure">
            {/* Replace with your generated diagram asset */}
            <img
              src={`${process.env.PUBLIC_URL}/assets/diagram.png`}
              alt="CroftSync three-column integration flow: HR & People Systems → Identity & Access → Business Applications (and more!)"
              className="cs-section__image"
              loading="lazy"
            />
          </div>
          <div className="cs-disclaimer-container">
            <p className="cs-disclaimer">
              All product names and brands are property of their respective
              owners. CroftSync is an independent consulting firm and is not
              affiliated with or endorsed by these companies.
            </p>
          </div>
        </section>

        {/* WHY CROFTSYNC */}
        <section className="cs-section">
          <h2 className="cs-h2">Why CroftSync</h2>

          <p className="cs-p">
            CroftSync was founded to bridge the gap between HR, IT, and
            Operations teams. Most organizations rely on dozens of disconnected
            systems — from HR platforms to identity providers and business
            applications — that don’t talk to each other. We make them work
            together.
          </p>

          <p className="cs-p">
            Unlike large consultancies that deliver reports and roadmaps, we
            focus on fast, functional outcomes. Our two-week automation pilots
            turn ideas into live integrations, helping you eliminate manual
            onboarding, strengthen compliance, and keep every system in sync.
          </p>

          <p className="cs-p">
            Every engagement is built around three principles:
          </p>

          <ul className="cs-list">
            <li>
              <strong>Deep Integration Expertise —</strong> We specialize in
              HRIS and identity integrations — including BambooHR, Workday, and
              Okta through secure, scalable automation.
            </li>
            <li>
              <strong>Fast, Fixed-Scope Delivery —</strong> Two-week pilots that
              move from discovery to deployment without open-ended timelines or
              surprise costs.
            </li>
            <li>
              <strong>Security-First by Design —</strong> Every integration
              follows best practices for SSO, SCIM, and least-privilege access
              to keep your data protected.
            </li>
          </ul>

          <p className="cs-p">
            CroftSync exists to make your data flow the way your organization
            does — smoothly, securely, and automatically.
          </p>
        </section>

        <section className="cs-cta">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}

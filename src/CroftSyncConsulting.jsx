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

        {/* WHY CROFTSYNC */}
        <section class="cs-section">
          <h2 class="cs-h2">Why CroftSync</h2>
          <div class="cs-before-after-grid">
            <div class="cs-before">
              <h3 class="cs-subheading">
                <span class="cs-icon">⚠️</span> Before CroftSync
              </h3>
              <ul class="cs-list">
                <li>
                  <strong>Disconnected systems</strong> — HR, IT, and operations
                  platforms don’t communicate, creating data silos.
                </li>
                <li>
                  <strong>Manual provisioning</strong> — User access and account
                  setup depend on spreadsheets or ticket queues.
                </li>
                <li>
                  <strong>Inconsistent updates</strong> — HR changes aren’t
                  reflected in downstream apps, leading to compliance risks.
                </li>
                <li>
                  <strong>Limited visibility</strong> — Teams can’t track
                  workflow status or access changes in one place.
                </li>
              </ul>
            </div>

            <div class="cs-after">
              <h3 class="cs-subheading">
                <span class="cs-icon">✅</span> After CroftSync
              </h3>
              <ul class="cs-list">
                <li>
                  <strong>Connected ecosystem</strong> — HR, identity, and
                  business systems stay perfectly in sync.
                </li>
                <li>
                  <strong>Automated lifecycle management</strong> — Onboarding
                  and offboarding trigger across every platform instantly.
                </li>
                <li>
                  <strong>Process-level intelligence</strong> — Conditional
                  rules and business logic ensure secure, context-aware access.
                </li>
                <li>
                  <strong>Visibility and control</strong> — Centralized
                  monitoring and audit-ready logging for every integration.
                </li>
              </ul>
            </div>
          </div>
          <br/>

          <p class="cs-p">
            Most HR, IT, and business platforms already come with “native”
            integrations — but those built-in connectors only go so far. They
            can sync basic data between systems, yet every organization’s
            reality is more complex: unique workflows, conditional access rules,
            and tools that don’t talk to each other out of the box.
          </p>
          <br />

          <p class="cs-p">
            That’s where CroftSync comes in. We design secure, custom
            integration logic that extends beyond what default HRIS or identity
            provider connections can handle. From onboarding workflows and
            conditional provisioning to automating approvals and multi-system
            orchestration, CroftSync connects your technology to the way your
            business actually operates.
          </p>
          <br />

          <p class="cs-p">
            <strong>
              Native integrations move data — CroftSync moves processes.
            </strong>
            <br />
            <br />
            Our consulting and automation services close the gap between HR, IT,
            and operations, delivering solutions that reduce manual effort,
            improve compliance, and scale with your organization’s growth.
          </p>
          <br />

          <ul class="cs-list">
            <li>
              <strong>Custom Integration Logic —</strong> Implement rules,
              filters, and sequencing that pre-built connectors can’t support.
            </li>
            <li>
              <strong>Cross-System Automation —</strong> Extend provisioning
              events to CRMs, project tools, communication platforms, and more.
            </li>
            <li>
              <strong>Scalable Architecture —</strong> Build workflows that
              evolve with your systems, not around their limitations.
            </li>
            <li>
              <strong>Security & Compliance —</strong> Maintain least-privilege
              access, auditability, and seamless deactivation across every
              system.
            </li>
          </ul>
          <br />

          <p class="cs-p">
            CroftSync turns disconnected tools into an integrated ecosystem —
            one where new hires are productive on day one, departures are
            handled securely, and every system stays in sync automatically.
          </p>
        </section>

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

        <PricingCarousel />

        <section className="cs-cta">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
}

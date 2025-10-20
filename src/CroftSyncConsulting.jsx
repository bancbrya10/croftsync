// CroftSyncConsulting.jsx
import React from "react";
import ContactSection from "./ContactSection";
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
            Seamless Integration and Automation Consulting for Modern
            Enterprises
          </h1>
          <p className="cs-hero__subtitle">
            Helping organizations connect HR, identity, and business
            systems through secure, scalable integration frameworks that drive
            efficiency, compliance, and growth.
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
          <h2 className="cs-h2">Services</h2>
          <ul className="cs-list">
            <li>
              <strong>Custom API Integrations</strong> – Build secure,
              maintainable connections between your customer relationship
              management (CRM), enterprise resource planning (ERP), and human
              resources information systems (HRIS). CroftSync unifies data
              across departments, ensuring accuracy from finance to HR.
              <br />
              <br />
            </li>
            <li>
              <strong>Automation Workflows</strong> – Replace manual tasks with
              AI-powered automations that synchronize data between business
              systems. We streamline onboarding, payroll updates, and
              offboarding processes by connecting your HR, identity, and
              productivity platforms.
              <br />
              <br />
            </li>
            <li>
              <strong>Cloud Deployments</strong> – Deploy, scale, and monitor
              integrations across cloud environments with built-in observability
              and compliance. CroftSync ensures secure, auditable handling of
              sensitive business and employee data.
              <br />
              <br />
            </li>
            <li>
              <strong>SSO & Identity Integrations</strong> – Implement
              enterprise-grade Single Sign-On using modern authentication
              standards such as SAML, OAuth 2.0, and OpenID Connect. We create
              unified, secure access experiences across your business
              applications and HR systems.
              <br />
              <br />
            </li>
            <li>
              <strong>User Provisioning & Lifecycle Management</strong> –
              Automate employee onboarding, role changes, and deactivation
              across systems. CroftSync designs workflows that maintain identity
              and access alignment throughout the entire employment lifecycle.
              <br />
              <br />
            </li>
            <li>
              <strong>HRIS Integration Consulting</strong> – Connect your HR
              data with the rest of your operational ecosystem. We help
              organizations sync employee information between HR platforms,
              identity providers, and downstream tools to maintain a single,
              accurate source of truth.
              <br />
              <br />
            </li>
            <li>
              <strong>Consulting & Architecture</strong> – Tailored guidance on
              integration design, data governance, and automation strategy.
              CroftSync helps you modernize legacy systems and establish
              scalable, maintainable integration frameworks.
              <br />
              <br />
            </li>
          </ul>

          <img
            src="../assets/diagram.png"
            alt="Integration Diagram"
            className="cs-section__image"
          />
        </section>

        <section className="cs-section cs-offers">
          <h2 className="cs-h2 text-center mb-10">Current Offers</h2>
          <div className="cs-offer-grid">
            {/* Offer 1 — Integration Audit */}
            <div className="cs-offer">
              <h3 className="cs-offer__title">Free Integration Audit</h3>
              <p className="cs-offer__text">
                Identify inefficiencies in your HR, identity, and business
                systems with a complimentary 30-minute audit. Receive a concise
                summary outlining automation opportunities and quick wins.
              </p>
              <ul className="cs-offer__list">
                <li>30-minute consultation</li>
                <li>Findings summary & next steps</li>
                <li>No obligation or sales pitch</li>
              </ul>
              <a href="#contact" className="cs-btn">
                Book Your Free Audit
              </a>
            </div>

            {/* Offer 2 — Automation Pilot */}
            <div className="cs-offer">
              <h3 className="cs-offer__title">2-Week Automation Pilot</h3>
              <p className="cs-offer__text">
                Deliver a working integration in just two weeks. CroftSync
                designs and implements automation that connects your HR,
                identity, and business tools for measurable efficiency gains.
              </p>
              <ul className="cs-offer__list">
                <li>Discovery & system mapping</li>
                <li>Integration build & testing</li>
                <li>Documentation & deployment</li>
              </ul>
              <a href="#contact" className="cs-btn">
                Start Your Pilot
              </a>
            </div>
          </div>
        </section>

        <section className="cs-section">
          <h2 className="cs-h2">Specialized Integration Expertise</h2>
          <ul className="cs-list">
            <li>
              <b>Human Resources and Identity Systems</b> – Seamlessly connect
              HRIS, payroll, benefits, and identity platforms to automate
              employee lifecycle management. CroftSync designs secure
              integrations that synchronize employee data, roles, and
              permissions across your organization while maintaining compliance
              and auditability.
              <br />
              <br />
            </li>
            <li>
              <b>Customer Relationship Management (CRM) Platforms</b> –
              Integrate customer data, sales pipelines, and marketing automation
              systems to ensure your teams operate from a single, accurate
              source of truth. Our integrations enable real-time visibility and
              eliminate data silos between departments.
              <br />
              <br />
            </li>
            <li>
              <b>Enterprise Resource Planning (ERP) Solutions</b> – Streamline
              financial, supply chain, and operations workflows by connecting
              ERP systems with your other core business tools. CroftSync ensures
              consistent, reliable data transfer to support analytics,
              reporting, and forecasting.
              <br />
              <br />
            </li>
            <li>
              <b>Identity and Access Management (IAM)</b> – Implement and
              connect secure access controls across your enterprise. We
              specialize in integrating identity providers, SSO protocols, and
              provisioning tools to unify authentication and authorization
              across all connected systems.
              <br />
              <br />
            </li>
            <li>
              <b>Cloud and Automation Environments</b> – Build resilient,
              event-driven workflows using modern cloud platforms and automation
              frameworks. CroftSync helps you deploy scalable integrations with
              monitoring, alerting, and performance insights built in.
              <br />
              <br />
            </li>
            <li>
              <b>Data Integration and Analytics</b> – Unify data across your
              organization for reporting and analytics. We connect structured
              and unstructured data sources to enable actionable insights and
              business intelligence, ensuring clean, accurate information flows
              through every system.
              <br />
              <br />
            </li>
          </ul>
        </section>

        <section className="cs-section">
          <h2 className="cs-h2">Our Process</h2>
          <ol className="cs-ol">
            <li>
              🧩 <strong>Discovery</strong> – We assess your tech stack and
              identify integration opportunities.
            </li>
            <li>
              ⚙️ <strong>Design</strong> – We map out system connections, APIs,
              and data flows.
            </li>
            <li>
              🚀 <strong>Build</strong> – We develop and test high-quality
              integrations.
            </li>
            <li>
              📈 <strong>Support</strong> – We monitor, maintain, and optimize
              for long-term performance.
            </li>
          </ol>
        </section>

        <section className="cs-cta">
          <ContactSection />
        </section>
      </main>

      <footer className="cs-footer">
        © 2025 CroftSync Consulting. All rights reserved.
      </footer>
    </div>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function PricingCarousel() {
  return (
    <section className="cs-section cs-pricing">
      <h2 className="cs-h2 text-center mb-10">Packages</h2>
      <div className="cs-pricing-swiper-wrapper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 }, // small tablets
            768: { slidesPerView: 1 }, // medium screens
            1024: { slidesPerView: 1 }, // laptops
            1280: { slidesPerView: 1 }, // large desktops
          }}
          centeredSlides={true}
          grabCursor={true}
          loop={false}
          className="cs-swiper"
        >
          {/* Integration Audit */}
          <SwiperSlide>
            <div className="cs-pricing-card">
              <h3 className="cs-pricing__title">Integration Audit</h3>
              <p className="cs-pricing__desc">
                Evaluate your HR, identity, and business systems to uncover
                automation opportunities. Includes a 30-minute consultation and
                summary of findings.
              </p>
              <p className="cs-pricing__desc">
                Includes one 30-minute follow-up session for clarification or
                next-step recommendations. No ongoing support or implementation
                changes included.
              </p>
              <ul className="cs-pricing__list">
                <li>System & process review</li>
                <li>Prioritized recommendations</li>
                <li>No-obligation roadmap</li>
              </ul>
              <button
                onClick={() => {
                  window.location.hash = `contact?package=integration-audit`;
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="cs-btn"
              >
                Book an Audit
              </button>
            </div>
          </SwiperSlide>

          {/* 2-Week Automation Pilot */}
          <SwiperSlide>
            <div className="cs-pricing-card cs-pricing-card--highlight">
              <h3 className="cs-pricing__title">2-Week Automation Pilot</h3>
              <p className="cs-pricing__desc">
                A fixed-scope engagement delivering a working integration in
                just two weeks. Ideal for teams ready to see measurable results
                fast.
              </p>
              <p className="cs-pricing__desc">
                Includes 30 days of post-implementation support for bug fixes
                and configuration adjustments related to the delivered workflow.
                Continued optimization available through our Managed Integration
                Support plan.
              </p>
              <ul className="cs-pricing__list">
                <li>Discovery & system mapping</li>
                <li>Integration design & implementation</li>
                <li>Testing, documentation & handover</li>
              </ul>
              <button
                onClick={() => {
                  // Update the URL hash so the contact form preselects the package
                  window.location.hash = `contact?package=automation-pilot`;

                  // Smooth scroll into view
                  const contactEl = document.getElementById("contact");
                  if (contactEl)
                    contactEl.scrollIntoView({ behavior: "smooth" });
                }}
                className="cs-btn cs-btn--accent"
              >
                Start Your Pilot
              </button>
            </div>
          </SwiperSlide>

          {/* Managed Integration Support */}
          <SwiperSlide>
            <div className="cs-pricing-card">
              <h3 className="cs-pricing__title">Managed Integration Support</h3>
              <p className="cs-pricing__desc">
                Ongoing management, monitoring, and updates to keep your
                integrations secure and efficient.
              </p>
              <p className="cs-pricing__desc">
                Continuous integration management, monitoring, and optimization.
                Covers system updates, API changes, and proactive improvements
                to keep your automations secure and reliable.
              </p>
              <ul className="cs-pricing__list">
                <li>Continuous monitoring & support</li>
                <li>Feature updates & improvements</li>
                <li>Dedicated contact & SLA options</li>
              </ul>

              <button
                onClick={() => {
                  window.location.hash = `contact?package=managed-support`;
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="cs-btn"
              >
                Discuss Options
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

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
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.1, spaceBetween: 20 },
            768: { slidesPerView: 1.6, spaceBetween: 24 },
            1024: { slidesPerView: 2.1, spaceBetween: 32 }, // 👈 slightly wider cards
            1280: { slidesPerView: 2.5, spaceBetween: 36 },
            1440: { slidesPerView: 2.8, spaceBetween: 40 },
            1600: { slidesPerView: 3, spaceBetween: 44 }, // 👈 fully wide cards on ultra-wide screens
          }}
          className="cs-pricing-swiper"
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
              <ul className="cs-pricing__list">
                <li>System & process review</li>
                <li>Prioritized recommendations</li>
                <li>No-obligation roadmap</li>
              </ul>
              <a href="#contact" className="cs-btn">
                Book a Free Audit
              </a>
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
              <ul className="cs-pricing__list">
                <li>Discovery & system mapping</li>
                <li>Integration design & implementation</li>
                <li>Testing, documentation & handover</li>
              </ul>
              <a href="#contact" className="cs-btn">
                Start Your Pilot
              </a>
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
              <ul className="cs-pricing__list">
                <li>Continuous monitoring & support</li>
                <li>Feature updates & improvements</li>
                <li>Dedicated contact & SLA options</li>
              </ul>
              <a href="#contact" className="cs-btn">
                Discuss Options
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

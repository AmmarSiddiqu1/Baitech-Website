import type { FC } from "react";

const AppScreens: FC = () => {
  return (
    <section className="app-screenshot position-relative z-1 overflow-hidden" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f5f5fd 25.08%, #d7f2ff 100%)", height: "100vh", display: "flex", flexDirection: "column", padding: "80px 0 0 0" }}>
      <div className="container" style={{ flex: "0 0 auto" }}>
        <div className="text-center mx-auto tw-pb-15 max-w-910-px">
          {/* Badge */}
          <div
            className="bg-white tw-py-2 tw-px-7 rounded-pill fw-bold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max common-shadow-twentyNine"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="600"
            style={{
              color: "#666666",
            }}
          >
            What We Offering
          </div>
          {/* Headline */}
          <h2
            className="splitTextStyleOne text-heading text-capitalize tw-leading-none"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              color: "#002B49",
              lineHeight: 1.2,
              marginTop: "1rem",
            }}
          >
            Experience the future of property management
          </h2>
          {/* Description */}
          <p
            className="splitTextStyleOne text-neutral-500 max-w-602-px tw-text-lg mx-auto fw-medium tw-mt-5"
            style={{
              color: "#002B49",
              opacity: 0.8,
            }}
          >
            Discover how Baitech not only simplifies your management process but also empowers you to make smarter, data-driven decisions.
          </p>
        </div>
      </div>

      {/* App Showcase Image - Simple structure matching template */}
      <div className="text-center" style={{ flex: "1 1 auto", display: "flex", alignItems: "flex-end", justifyContent: "center", minHeight: "0" }}>
        <img
          src="/assets/images/app_showcase3/Experience_the_future_of_property_management.png"
          alt="Experience the future of property management"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1200"
          style={{
            width: "100%",
            maxWidth: "70%",
            height: "auto",
            display: "block",
            objectFit: "contain",
            objectPosition: "bottom",
          }}
        />
      </div>
    </section>
  );
};

export default AppScreens;

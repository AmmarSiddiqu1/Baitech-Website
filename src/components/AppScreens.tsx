import type { FC } from "react";

const AppScreens: FC = () => {
  return (
    <section className="app-screenshot position-relative z-1 overflow-hidden" style={{ background: "linear-gradient(180deg, rgba(0, 153, 168, 0.08) 0%, rgba(132, 218, 222, 0.12) 50%, rgba(30, 202, 211, 0.08) 100%)", padding: "120px 0" }}>
      <div className="container">
        <div className="text-center mx-auto tw-pb-15 max-w-910-px">
          {/* Badge */}
          <div
            className="tw-py-2 tw-px-7 rounded-pill fw-bold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="600"
            style={{
              background: "linear-gradient(135deg, #0099A8 0%, #002B49 100%)",
              color: "#FFFFFF",
              boxShadow: "0 8px 24px rgba(0, 153, 168, 0.3)",
            }}
          >
            app showcase
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
            className="splitTextStyleOne tw-text-lg mx-auto fw-medium tw-mt-5"
            style={{
              fontSize: "18px",
              color: "#002B49",
              marginTop: "1rem",
              maxWidth: "602px",
              opacity: 0.8,
            }}
          >
            Discover how Baitech not only simplifies your management process but also empowers you to make smarter, data-driven decisions.
          </p>
        </div>

        {/* Centered Screenshot Placeholder */}
        <div className="text-center">
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1200"
            style={{
              width: "100%",
              maxWidth: "1100px",
              height: "650px",
              margin: "0 auto",
              background: "linear-gradient(135deg, #FF4438 0%, #FF6B5E 50%, #1ECAD3 100%)",
              borderRadius: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 32px 80px rgba(30, 202, 211, 0.4)",
              border: "4px dashed #FFFFFF",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative circles */}
            <div
              style={{
                position: "absolute",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.1)",
                top: "-50px",
                right: "-50px",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.1)",
                bottom: "-30px",
                left: "-30px",
              }}
            />
            <div style={{ textAlign: "center", color: "#FFFFFF", position: "relative", zIndex: 1 }}>
              <i className="ph-bold ph-image" style={{ fontSize: "100px", marginBottom: "24px", display: "block" }} />
              <div style={{ fontSize: "42px", fontWeight: 700 }}>IMAGE HERE</div>
              <div style={{ fontSize: "20px", marginTop: "12px" }}>App Screenshots</div>
              <div style={{ fontSize: "16px", marginTop: "8px", opacity: 0.9 }}>1100x650px recommended</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppScreens;

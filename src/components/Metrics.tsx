import type { FC } from "react";

const Metrics: FC = () => {
  return (
    <section className="pt-120" style={{ background: "linear-gradient(180deg, rgba(0, 153, 168, 0.05) 0%, rgba(132, 218, 222, 0.08) 100%)" }}>
      <div className="container">
        <div className="text-center mx-auto tw-pb-15 max-w-548-px">
          {/* Badge */}
          <div
            className="tw-py-2 tw-px-7 rounded-pill fw-bold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="600"
            style={{
              background: "linear-gradient(135deg, #84DADE 0%, #1ECAD3 100%)",
              color: "#FFFFFF",
              boxShadow: "0 8px 24px rgba(132, 218, 222, 0.3)",
            }}
          >
            our impact
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
            Trusted by property managers across the GCC
          </h2>
        </div>

        {/* Stats with Dividers */}
        <div
          className="d-flex justify-content-center flex-sm-nowrap flex-wrap tw-gap-148-px"
          style={{
            borderTop: "3px solid #1ECAD3",
            borderBottom: "3px solid #1ECAD3",
            gap: "80px",
            padding: "60px 0",
          }}
        >
          {/* Stat 1 */}
          <div
            className="text-center d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-duration="800"
            style={{
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <h2
              style={{
                fontSize: "clamp(40px, 6vw, 68px)",
                fontWeight: 700,
                background: "linear-gradient(135deg, #1ECAD3 0%, #0099A8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "0.5rem",
              }}
            >
              <span className="counter">500</span>
              <span>+</span>
            </h2>
            <span
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#002B49",
                textTransform: "uppercase",
                marginTop: "0.5rem",
                letterSpacing: "1px",
              }}
            >
              Properties Managed
            </span>
          </div>

          {/* Divider 1 */}
          <div className="d-flex">
            <div style={{ width: "3px", height: "100%", background: "linear-gradient(180deg, #1ECAD3 0%, #0099A8 100%)" }} />
          </div>

          {/* Stat 2 */}
          <div
            className="text-center d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <h2
              style={{
                fontSize: "clamp(40px, 6vw, 68px)",
                fontWeight: 700,
                background: "linear-gradient(135deg, #FF4438 0%, #FF6B5E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "0.5rem",
              }}
            >
              <span className="counter">98</span>
              <span>%</span>
            </h2>
            <span
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#002B49",
                textTransform: "uppercase",
                marginTop: "0.5rem",
                letterSpacing: "1px",
              }}
            >
              Client Satisfaction
            </span>
          </div>

          {/* Divider 2 */}
          <div className="d-flex">
            <div style={{ width: "3px", height: "100%", background: "linear-gradient(180deg, #FF4438 0%, #FF6B5E 100%)" }} />
          </div>

          {/* Stat 3 */}
          <div
            className="text-center d-flex flex-column justify-content-center align-items-center"
            data-aos="fade-up"
            data-aos-duration="1200"
            style={{
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <h2
              style={{
                fontSize: "clamp(40px, 6vw, 68px)",
                fontWeight: 700,
                background: "linear-gradient(135deg, #0099A8 0%, #002B49 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                marginBottom: "0.5rem",
              }}
            >
              <span className="counter">24</span>
              <span>/7</span>
            </h2>
            <span
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#002B49",
                textTransform: "uppercase",
                marginTop: "0.5rem",
                letterSpacing: "1px",
              }}
            >
              AI Support Available
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;

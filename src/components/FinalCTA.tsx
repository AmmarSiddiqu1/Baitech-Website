import type { FC } from "react";

const FinalCTA: FC = () => {
  return (
    <section className="download-app py-120" style={{ background: "#FFFFFF" }}>
      <div className="container">
        <div className="row gy-4 align-items-center">
          {/* Left Image Placeholder */}
          <div className="col-md-6">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              style={{
                width: "100%",
                height: "550px",
                background: "linear-gradient(135deg, #1ECAD3 0%, #0099A8 50%, #002B49 100%)",
                borderRadius: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 20px 60px rgba(30, 202, 211, 0.3)",
                border: "3px dashed #84DADE",
              }}
            >
              <div style={{ textAlign: "center", color: "#FFFFFF" }}>
                <i className="ph-bold ph-image" style={{ fontSize: "80px", marginBottom: "20px", display: "block" }} />
                <div style={{ fontSize: "32px", fontWeight: 700 }}>IMAGE HERE</div>
                <div style={{ fontSize: "18px", marginTop: "8px" }}>Download App Image</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-md-6">
            <div className="">
              <div className="max-w-780-px text-start mx-auto">
                {/* Badge */}
                <div
                  className="tw-py-2 tw-px-7 rounded-pill fw-bold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-6 min-w-max"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="600"
                  style={{
                    background: "linear-gradient(135deg, #FF4438 0%, #FF6B5E 100%)",
                    color: "#FFFFFF",
                    boxShadow: "0 8px 24px rgba(255, 68, 56, 0.3)",
                  }}
                >
                  get started today
                </div>
                {/* Headline */}
                <h2
                  className="splitTextStyleOne text-heading text-capitalize tw-leading-none"
                  style={{
                    fontSize: "clamp(28px, 4vw, 42px)",
                    fontWeight: 700,
                    color: "#002B49",
                    lineHeight: 1.2,
                  }}
                >
                  Ready to transform your property management?
                </h2>
                {/* Description */}
                <p
                  className="tw-text-lg tw-mt-605 splitTextStyleOne max-w-5 fw-medium tw-leading-145 max-w-570-px"
                  style={{
                    fontSize: "18px",
                    color: "#002B49",
                    marginTop: "1rem",
                    opacity: 0.8,
                  }}
                >
                  Join hundreds of property managers in Bahrain and across the GCC who trust Baitech for their daily operations.
                </p>
              </div>

              {/* Checkmark List */}
              <div className="d-flex flex-column tw-gap-5 tw-mt-12" style={{ gap: "20px", marginTop: "3rem" }}>
                {[
                  { text: "Quick onboarding and setup", color: "#1ECAD3" },
                  { text: "Local payment integration", color: "#0099A8" },
                  { text: "24/7 AI-powered support", color: "#FF4438" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="d-flex align-items-center tw-gap-205"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration={700 + idx * 200}
                    style={{ gap: "12px" }}
                  >
                    <span
                      style={{
                        width: "36px",
                        height: "36px",
                        background: item.color,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: `0 4px 16px ${item.color}40`,
                      }}
                    >
                      <i className="ph-bold ph-check" style={{ fontSize: "20px", color: "#FFFFFF" }} />
                    </span>
                    <span
                      style={{
                        fontSize: "19px",
                        fontWeight: 600,
                        color: "#002B49",
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* App Store Buttons */}
              <div
                className="tw-mt-13 d-flex align-items-center tw-gap-3 flex-wrap"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1200"
                style={{ marginTop: "3rem", gap: "12px" }}
              >
                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps"
                  style={{
                    display: "inline-block",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(30, 202, 211, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      background: "linear-gradient(135deg, #1ECAD3 0%, #0099A8 100%)",
                      padding: "14px 28px",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="#FFFFFF" />
                    </svg>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: "10px", color: "#FFFFFF" }}>GET IT ON</div>
                      <div style={{ fontSize: "16px", color: "#FFFFFF", fontWeight: 600 }}>Google Play</div>
                    </div>
                  </div>
                </a>

                {/* App Store */}
                <a
                  href="https://www.apple.com/app-store"
                  style={{
                    display: "inline-block",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(0, 43, 73, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      background: "linear-gradient(135deg, #002B49 0%, #0099A8 100%)",
                      padding: "14px 28px",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="#FFFFFF" />
                    </svg>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontSize: "10px", color: "#FFFFFF" }}>Download on the</div>
                      <div style={{ fontSize: "16px", color: "#FFFFFF", fontWeight: 600 }}>App Store</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

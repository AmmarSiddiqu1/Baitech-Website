import type { FC } from "react";

const HowItWorks: FC = () => {
  return (
    <section id="how-it-works" className="work-process-five py-120">
      <div className="container">
        <div className="text-center mx-auto tw-pb-15">
          {/* Badge */}
          <div
            className="tw-py-2 tw-px-7 rounded-pill fw-bold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="600"
            style={{
              background: "linear-gradient(135deg, #FF4438 0%, #FF6B5E 100%)",
              color: "#FFFFFF",
              boxShadow: "0 8px 24px rgba(255, 68, 56, 0.3)",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            how it works
          </div>
          {/* Headline */}
          <h2
            className="splitTextStyleOne text-heading text-capitalize tw-leading-none"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              color: "#002B49",
              lineHeight: 1.2,
            }}
          >
            Simplifying your property management journey
          </h2>
        </div>

        <div className="position-relative tw-mt-17">
          <div className="tw-px-40-px d-flex tw-pt-14 gradient-bg-how-it-works tw-rounded-28-px position-relative flex-md-nowrap flex-wrap tw-gap-6" style={{ padding: "60px 40px" }}>
            <div className="max-w-780-px mx-auto">
              <div className="text-center">
                {/* Inner Badge */}
                <div
                  className="border tw-py-2 tw-px-7 rounded-pill fw-bold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="600"
                  style={{
                    borderColor: "#1ECAD3",
                    color: "#1ECAD3",
                    background: "rgba(30, 202, 211, 0.1)",
                    borderWidth: "2px",
                  }}
                >
                  Getting Started
                </div>
                {/* Title */}
                <h2
                  className="splitTextStyleOne text-heading text-capitalize tw-leading-none max-w-500-px mx-auto"
                  style={{
                    fontSize: "clamp(24px, 3vw, 36px)",
                    fontWeight: 700,
                    color: "#002B49",
                    marginBottom: "1rem",
                  }}
                >
                  Sign up and secure your account
                </h2>
                {/* Description */}
                <p
                  className="tw-text-xl tw-mt-605 splitTextStyleOne max-w-5 mx-auto fw-medium tw-leading-145 max-w-548-px"
                  style={{
                    fontSize: "18px",
                    color: "#002B49",
                    opacity: 0.8,
                  }}
                >
                  In today's competitive business, the demand for efficient and cost-effective property management solutions has never been more critical.
                </p>
              </div>

              {/* 3 Steps */}
              <div className="tw-mt-80-px d-flex justify-content-between position-relative z-1 tw-gap-2 tw-pb-10">
                {/* Connecting Line */}
                <span
                  className="position-absolute tw-start-50 translate-middle-x z-n1"
                  style={{
                    width: "calc(100% - 40px)",
                    height: "3px",
                    background: "linear-gradient(90deg, #84DADE 0%, #1ECAD3 50%, #0099A8 100%)",
                    top: "12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                />

                {/* Step 1 */}
                <div className="text-center" style={{ flex: 1 }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: "28px",
                      height: "28px",
                      background: "linear-gradient(135deg, #1ECAD3 0%, #0099A8 100%)",
                      borderRadius: "50%",
                      boxShadow: "0 4px 16px rgba(30, 202, 211, 0.4)",
                    }}
                  />
                  <span
                    className="d-block tw-mt-4 text-capitalize"
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#002B49",
                    }}
                  >
                    Sign up
                  </span>
                </div>

                {/* Step 2 */}
                <div className="text-center" style={{ flex: 1 }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: "28px",
                      height: "28px",
                      background: "linear-gradient(135deg, #FF4438 0%, #FF6B5E 100%)",
                      borderRadius: "50%",
                      boxShadow: "0 4px 16px rgba(255, 68, 56, 0.4)",
                    }}
                  />
                  <span
                    className="d-block tw-mt-4 text-capitalize"
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#002B49",
                    }}
                  >
                    Set preferences
                  </span>
                </div>

                {/* Step 3 */}
                <div className="text-center" style={{ flex: 1 }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: "28px",
                      height: "28px",
                      background: "linear-gradient(135deg, #0099A8 0%, #002B49 100%)",
                      borderRadius: "50%",
                      boxShadow: "0 4px 16px rgba(0, 153, 168, 0.4)",
                    }}
                  />
                  <span
                    className="d-block tw-mt-4 text-capitalize"
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#002B49",
                    }}
                  >
                    Start managing
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side Image Placeholder */}
            <div className="d-flex flex-column justify-content-end">
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1200"
                style={{
                  width: "100%",
                  minWidth: "300px",
                  height: "400px",
                  background: "linear-gradient(135deg, #84DADE 0%, #1ECAD3 100%)",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 16px 48px rgba(30, 202, 211, 0.3)",
                  border: "3px dashed #FFFFFF",
                }}
              >
                <div style={{ textAlign: "center", color: "#FFFFFF" }}>
                  <i className="ph-bold ph-image" style={{ fontSize: "60px", marginBottom: "16px", display: "block" }} />
                  <div style={{ fontSize: "24px", fontWeight: 700 }}>IMAGE HERE</div>
                  <div style={{ fontSize: "14px", marginTop: "8px" }}>How It Works Image</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

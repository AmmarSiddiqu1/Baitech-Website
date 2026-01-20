import type { FC } from "react";

const Hero: FC = () => {
  return (
    <section id="home" className="banner-five" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <div className="tw-pt-100-px tw-mx-48-px position-relative gradient-bg-seven rounded-top-30-px z-1" style={{ width: "100%" }}>
        <img src="/assets/images/hero/wave-line-shadow.png" alt="Wave Line shape" className="position-absolute tw-start-0 w-100 bottom-0 z-n1 pb-120" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-10">
              <div className="text-center">
                <div className="max-w-780-px text-center mx-auto">
                  {/* Headline */}
                  <h1
                    className="splitTextStyleOne text-heading text-capitalize tw-leading-none"
                    style={{
                      fontSize: "clamp(36px, 6vw, 72px)",
                      fontWeight: 700,
                      color: "#002B49",
                      marginBottom: "1rem",
                      lineHeight: 1.1,
                    }}
                  >
                    AI-first property management for landlords & tenants
                  </h1>
                  
                  {/* Subheadline */}
                  <p className="text-neutral-600 tw-text-xl tw-mt-605 splitTextStyleOne max-w-5 mx-auto fw-medium tw-leading-145 max-w-548-px">
                    Automate rent reminders, maintenance, and WhatsApp updates—built in Bahrain, ready for the GCC.
                  </p>
                  
                  {/* App Store Buttons */}
                  <div className="d-flex align-items-center justify-content-center tw-gap-405 tw-mt-10">
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="800">
                      <a
                        href="https://play.google.com/store/apps"
                        className="hover--translate-y-1 active--translate-y-scale-9 tw-rounded-2xl common-shadow-twentyEight"
                        style={{
                          display: "inline-block",
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
                            <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="#FFFFFF"/>
                          </svg>
                          <div style={{ textAlign: "left" }}>
                            <div style={{ fontSize: "10px", color: "#FFFFFF" }}>GET IT ON</div>
                            <div style={{ fontSize: "16px", color: "#FFFFFF", fontWeight: 600 }}>Google Play</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="800">
                      <a
                        href="https://www.apple.com/app-store"
                        className="hover--translate-y-1 active--translate-y-scale-9 tw-rounded-2xl common-shadow-twentyEight"
                        style={{
                          display: "inline-block",
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
                            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill="#FFFFFF"/>
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

                {/* Hero Image */}
                <div className="tw-mt-14 d-inline-flex">
                  <img
                    src="/assets/images/hero/hero_banner.png"
                    alt="Hero Banner"
                    data-aos="zoom-in"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1200"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

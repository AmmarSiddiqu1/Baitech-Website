import type { FC } from "react";

const Hero: FC = () => {
  return (
    <section id="home" className="banner-five" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <div className="tw-pt-100-px tw-mx-48-px position-relative gradient-bg-hero rounded-top-30-px z-1" style={{ width: "100%" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-10">
              <div className="text-center">
                <div className="max-w-780-px text-center mx-auto">
                  {/* Badge */}
                  <div
                    className="bg-white tw-py-2 tw-px-7 rounded-pill fw-bold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="600"
                    style={{
                      color: "#1ECAD3",
                      boxShadow: "0 8px 24px rgba(30, 202, 211, 0.2)",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    what we offering
                  </div>
                  
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
                  <p
                    className="tw-text-xl tw-mt-605 splitTextStyleOne max-w-5 mx-auto fw-medium tw-leading-145 max-w-548-px"
                    style={{
                      fontSize: "20px",
                      color: "#002B49",
                      marginTop: "1rem",
                      marginBottom: "2rem",
                      opacity: 0.8,
                    }}
                  >
                    Automate rent reminders, maintenance, and WhatsApp updates—built in Bahrain, ready for the GCC.
                  </p>
                  
                  {/* App Store Buttons */}
                  <div className="d-flex align-items-center justify-content-center tw-gap-405 tw-mt-10">
                    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="800">
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

                {/* Hero Image Placeholder */}
                <div className="tw-mt-14 d-inline-flex">
                  <div
                    data-aos="zoom-in"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="1200"
                    style={{
                      width: "100%",
                      maxWidth: "800px",
                      height: "500px",
                      background: "linear-gradient(135deg, #84DADE 0%, #1ECAD3 50%, #0099A8 100%)",
                      borderRadius: "24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 20px 60px rgba(30, 202, 211, 0.3)",
                      border: "3px dashed #FFFFFF",
                    }}
                  >
                    <div style={{ textAlign: "center", color: "#FFFFFF" }}>
                      <i className="ph-bold ph-image" style={{ fontSize: "80px", marginBottom: "20px", display: "block" }} />
                      <div style={{ fontSize: "32px", fontWeight: 700 }}>IMAGE HERE</div>
                      <div style={{ fontSize: "18px", marginTop: "8px" }}>Hero Section Image</div>
                      <div style={{ fontSize: "14px", marginTop: "4px", opacity: 0.8 }}>800x500px recommended</div>
                    </div>
                  </div>
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

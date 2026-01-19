import type { FC } from "react";

const Hero: FC = () => {
  return (
    <section
      id='home'
      className='banner tw-py-80-px overflow-hidden section-bg-three position-relative geometric-pattern'
      style={{
        background: "linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Geometric Pattern SVG Background */}
      <div
        className='position-absolute'
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('/assets/images/hero/hero-background.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
        }}
      />

      <div className='container max-w-1400-px position-relative' style={{ zIndex: 1 }}>
        <div className='row gy-4 align-items-center'>
          <div className='col-lg-6'>
            <div data-aos='fade-up' data-aos-duration={800}>
              {/* Main Headline */}
              <h1
                className='fw-light tw-leading-104 tw-mb-4'
                style={{
                  fontSize: "clamp(32px, 5vw, 64px)",
                  fontWeight: 400,
                  color: "#002B49",
                  lineHeight: "1.2",
                }}
              >
                AI-first property management for{" "}
                <span style={{ fontWeight: 700 }}>landlords & tenants</span>
              </h1>

              {/* Subheadline */}
              <p
                className='text-neutral-500 tw-text-lg max-w-500-px fw-medium tw-mb-4'
                style={{
                  fontSize: "20px",
                  color: "#666",
                  lineHeight: "1.6",
                }}
              >
                Automate rent reminders, maintenance, and WhatsApp updates—built
                in Bahrain, ready for the GCC.
              </p>

              {/* Micro trust (icons row) */}
              <div
                className='d-flex align-items-end tw-gap-4 tw-mb-6 flex-wrap'
                data-aos='fade-up'
                data-aos-delay={150}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#002B49",
                    marginBottom: "4px",
                  }}
                >
                  Trusted By:
                </span>
                <div className='d-flex flex-column align-items-center' style={{ gap: "2px" }}>
                  <img
                    src='/assets/images/logo/benefitpay-download.png'
                    alt='BenefitPay'
                    style={{ height: "40px", width: "auto" }}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#002B49",
                      fontFamily: "'Filson Pro', sans-serif",
                    }}
                  >
                    Benefit Pay
                  </span>
                </div>
                <span
                  style={{
                    color: "#84DADE",
                    fontSize: "18px",
                    marginBottom: "4px",
                  }}
                >
                  •
                </span>
                <div className='d-flex flex-column align-items-center' style={{ gap: "4px" }}>
                  <img
                    src='/assets/images/logo/Tap Payments_logo.svg'
                    alt='Tap Payments'
                    style={{ height: "32px", width: "auto" }}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#002B49",
                      fontFamily: "'Filson Pro', sans-serif",
                    }}
                  >
                    1 tap
                  </span>
                </div>
                <span
                  style={{
                    color: "#84DADE",
                    fontSize: "18px",
                    marginBottom: "4px",
                  }}
                >
                  •
                </span>
                <div className='d-flex flex-column align-items-center' style={{ gap: "4px" }}>
                  <img
                    src='/assets/images/logo/whatsapp-business.svg'
                    alt='WhatsApp Business API'
                    style={{ height: "32px", width: "auto" }}
                  />
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#002B49",
                      fontFamily: "'Filson Pro', sans-serif",
                    }}
                  >
                    WhatsApp Business API
                  </span>
                </div>
              </div>

              {/* App Store Buttons */}
              <div
                className='tw-mb-6'
                data-aos='fade-up'
                data-aos-delay={100}
              >
                <div className='d-flex align-items-center tw-gap-3 flex-wrap'>
                  {/* App Store Button */}
                  <a
                    href='https://apps.apple.com/app/baitech'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      textDecoration: "none",
                      height: "60px",
                      padding: "0 20px",
                      background: "#000000",
                      borderRadius: "8px",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ marginRight: "12px" }}
                    >
                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                    </svg>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                      <span style={{ fontSize: "10px", color: "#FFFFFF", lineHeight: "1.2" }}>
                        Download on the
                      </span>
                      <span style={{ fontSize: "18px", color: "#FFFFFF", fontWeight: 600, lineHeight: "1.2" }}>
                        App Store
                      </span>
                    </div>
                  </a>

                  {/* Google Play Button */}
                  <a
                    href='https://play.google.com/store/apps/details?id=com.baitech'
                    target='_blank'
                    rel='noopener noreferrer'
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      textDecoration: "none",
                      height: "60px",
                      padding: "0 20px",
                      background: "#000000",
                      borderRadius: "8px",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ marginRight: "12px" }}
                    >
                      <path
                        d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z"
                        fill="#00D9FF"
                      />
                      <path
                        d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z"
                        fill="#00FF88"
                      />
                      <path
                        d="M3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15Z"
                        fill="#FF3A44"
                      />
                      <path
                        d="M16.81 15.12L14.54 12.85L6.05 21.34L16.81 15.12Z"
                        fill="#FFD700"
                      />
                      <path
                        d="M16.81 8.88L6.05 2.66L14.54 11.15L16.81 8.88Z"
                        fill="#00FF88"
                      />
                      <path
                        d="M16.81 8.88L14.54 11.15L6.05 2.66L16.81 8.88Z"
                        fill="#00D9FF"
                      />
                    </svg>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                      <span style={{ fontSize: "10px", color: "#FFFFFF", lineHeight: "1.2" }}>
                        GET IT ON
                      </span>
                      <span style={{ fontSize: "18px", color: "#FFFFFF", fontWeight: 600, lineHeight: "1.2" }}>
                        Google Play
                      </span>
                    </div>
                  </a>
                </div>
              </div>


              {/* Arabic Tagline */}
              <div
                className='tw-mt-6'
                style={{
                  fontSize: "20px",
                  color: "#FF4438",
                  fontFamily: "Nastaliq, 'Filson Pro', sans-serif",
                  fontStyle: "italic",
                }}
                data-aos='fade-up'
                data-aos-delay={500}
              >
                حل ذكي لإدارة العقارات في البحرين والخليج
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          {/* REPLACE: Place your SVG image at: public/assets/images/hero/hero-visual.svg */}
          {/* Recommended dimensions: 800px × 600px (4:3 aspect ratio) or 900px × 600px (3:2 aspect ratio) */}
          <div className='col-lg-6' data-aos='fade-left' data-aos-duration={800}>
            <img
              src='/assets/images/hero/hero-visual.svg'
              alt='Baitech App Visual'
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

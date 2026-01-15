import type { FC } from "react";

const FinalCTA: FC = () => {
  return (
    <section
      className='tw-py-80-px'
      style={{
        background: "linear-gradient(135deg, #002B49 0%, #0099A8 100%)",
        color: "#FFFFFF",
      }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 mx-auto text-center'>
            <h2
              className='tw-mb-4'
              style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 700,
                color: "#FFFFFF",
                fontFamily: "'Filson Pro', sans-serif",
              }}
              data-aos='fade-up'
            >
              Ready to modernize your portfolio?
            </h2>
            <p
              className='tw-mb-6'
              style={{
                fontSize: "20px",
                color: "rgba(255, 255, 255, 0.9)",
                fontFamily: "'Filson Pro', sans-serif",
                lineHeight: "1.6",
              }}
              data-aos='fade-up'
              data-aos-delay={100}
            >
              Start in Bahrain. Expand across the GCC.
            </p>
            <div
              className='d-flex align-items-center justify-content-center tw-gap-4 flex-wrap tw-mb-6'
              data-aos='fade-up'
              data-aos-delay={200}
            >
              <a
                href='#contact'
                className='btn-baitech-secondary'
                style={{
                  textDecoration: "none",
                  background: "transparent",
                  color: "#FFFFFF",
                  borderColor: "#FFFFFF",
                }}
              >
                Book a Demo
              </a>
              <a
                href='https://wa.me/97312345678'
                target='_blank'
                rel='noopener noreferrer'
                className='d-flex align-items-center tw-gap-2'
                style={{
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontFamily: "'Filson Pro', sans-serif",
                  fontWeight: 600,
                }}
              >
                <i className='ph ph-whatsapp-logo' style={{ fontSize: "24px" }} />
                Chat on WhatsApp
              </a>
            </div>
            {/* App Store Buttons */}
            <div
              className='d-flex align-items-center justify-content-center tw-gap-3 flex-wrap'
              data-aos='fade-up'
              data-aos-delay={300}
            >
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
                  transition: "all 0.3s ease",
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
                  transition: "all 0.3s ease",
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
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

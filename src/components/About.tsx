import type { FC } from "react";

const About: FC = () => {
  const bulletPoints = [
    "Role-based approvals and full audit trail",
    "EN/AR UI with RTL support",
    "Multi-property, multi-currency ready",
  ];

  return (
    <section className='tw-py-80-px bg-light'>
      <div className='container'>
        <div className='row align-items-center gy-5'>
          <div className='col-lg-6' data-aos='fade-right'>
            <h2
              className='tw-mb-4'
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 700,
                color: "#002B49",
                fontFamily: "'Filson Pro'",
              }}
            >
              Built in Bahrain. Made for the GCC.
            </h2>
            <p
              className='tw-mb-4'
              style={{
                fontSize: "18px",
                color: "#666",
                fontFamily: "'Filson Pro'",
                lineHeight: "1.8",
              }}
            >
              Baitech combines a friendly, elderly-aware interface with powerful
              backend automation. Manage units, leases, invoices, and maintenance
              history in one place—while our AI agents and n8n workflows handle
              the routine.
            </p>
            <div className='d-flex flex-column tw-gap-3'>
              {bulletPoints.map((point) => (
                <div
                  key={point}
                  className='d-flex align-items-center tw-gap-3'
                  data-aos='fade-up'
                  data-aos-delay={bulletPoints.indexOf(point) * 100}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: "#1ECAD3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i
                      className='ph ph-check'
                      style={{ color: "#FFFFFF", fontSize: "16px" }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#002B49",
                      fontFamily: "'Filson Pro'",
                    }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* REPLACE: Replace this placeholder with your about/company image */}
          {/* Place image at: public/assets/images/about/about-image.png or about-image.jpg */}
          {/* Then replace this div with: <img src="/assets/images/about/about-image.png" alt="About Baitech" style={{ width: "100%", height: "auto", borderRadius: "20px" }} /> */}
          <div className='col-lg-6' data-aos='fade-left'>
            <div
              style={{
                width: "100%",
                height: "400px",
                background: "linear-gradient(135deg, #84DADE 0%, #1ECAD3 50%, #0099A8 100%)",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  color: "white",
                  fontWeight: 700,
                  fontFamily: "'Filson Pro'",
                }}
              >
                About Image
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

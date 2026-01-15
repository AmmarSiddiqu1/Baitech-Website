import type { FC } from "react";

const ForLandlords: FC = () => {
  const benefits = [
    "Faster collections with BenefitPay/Tap",
    "Role-based approvals and vendor assignment",
    "Full maintenance history per unit",
    "Exportable reports and audit logs",
  ];

  return (
    <section
      id='for-landlords'
      className='tw-py-80-px bg-light'
    >
      <div className='container'>
        <div className='row align-items-center gy-5'>
          <div className='col-lg-6' data-aos='fade-right'>
            <h2
              className='tw-mb-4'
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 700,
                color: "#002B49",
                fontFamily: "'Filson Pro', sans-serif",
              }}
            >
              Built for portfolios
            </h2>
            <div className='d-flex flex-column tw-gap-4'>
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className='d-flex align-items-start tw-gap-3'
                  data-aos='fade-up'
                  data-aos-delay={index * 100}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      background: "#1ECAD315",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i
                      className='ph ph-check'
                      style={{
                        color: "#1ECAD3",
                        fontSize: "18px",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: "18px",
                      color: "#002B49",
                      fontFamily: "'Filson Pro', sans-serif",
                      lineHeight: "1.6",
                    }}
                  >
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* REPLACE: Replace this placeholder with image for landlords section */}
          {/* Place image at: public/assets/images/landlords/landlords-image.png or landlords-image.jpg */}
          {/* Then replace this div with: <img src="/assets/images/landlords/landlords-image.png" alt="For Landlords" style={{ width: "100%", height: "auto", borderRadius: "20px" }} /> */}
          <div className='col-lg-6' data-aos='fade-left'>
            <div
              style={{
                width: "100%",
                height: "400px",
                background: "linear-gradient(135deg, #1ECAD3 0%, #0099A8 100%)",
                borderRadius: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "32px",
                  color: "white",
                  fontWeight: 700,
                  fontFamily: "'Filson Pro', sans-serif",
                }}
              >
                Landlords Image
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForLandlords;

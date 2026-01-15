import type { FC } from "react";

const ForTenants: FC = () => {
  const benefits = [
    "Pay rent in seconds via BenefitPay/Tap",
    "Report issues with photos/video",
    "Get status updates on WhatsApp—no app hopping",
  ];

  return (
    <section className='tw-py-80-px'>
      <div className='container'>
        <div className='row align-items-center gy-5'>
          <div className='col-lg-6 order-lg-2' data-aos='fade-left'>
            <h2
              className='tw-mb-4'
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 700,
                color: "#002B49",
                fontFamily: "'Filson Pro', sans-serif",
              }}
            >
              Delight your tenants
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
                      background: "#FF443815",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <i
                      className='ph ph-check'
                      style={{
                        color: "#FF4438",
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
          {/* REPLACE: Replace this placeholder with image for tenants section */}
          {/* Place image at: public/assets/images/tenants/tenants-image.png or tenants-image.jpg */}
          {/* Then replace this div with: <img src="/assets/images/tenants/tenants-image.png" alt="For Tenants" style={{ width: "100%", height: "auto", borderRadius: "20px" }} /> */}
          <div className='col-lg-6 order-lg-1' data-aos='fade-right'>
            <div
              style={{
                width: "100%",
                height: "400px",
                background: "linear-gradient(135deg, #FF4438 0%, #84DADE 100%)",
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
                Tenants Image
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForTenants;

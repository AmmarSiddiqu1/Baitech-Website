import type { FC } from "react";

const HowItWorks: FC = () => {
  const steps = [
    {
      number: "01",
      title: "Onboard",
      description:
        "Concierge import, Assisted self-serve, or CSV for large portfolios.",
      icon: "ph-upload",
    },
    {
      number: "02",
      title: "Automate",
      description:
        "n8n flows manage rent cycles, approvals, and WhatsApp updates.",
      icon: "ph-gear",
    },
    {
      number: "03",
      title: "Grow",
      description:
        "AI agents reduce tickets and speed collections across the GCC.",
      icon: "ph-trend-up",
    },
  ];

  return (
    <section
      id='how-it-works'
      className='tw-py-80-px bg-light'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center tw-mb-12'>
            <h2
              className='tw-mb-4'
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 700,
                color: "#002B49",
                fontFamily: "'Filson Pro', sans-serif",
              }}
              data-aos='fade-up'
            >
              How it works
            </h2>
          </div>
        </div>

        <div className='row gy-5'>
          {steps.map((step, index) => (
            <div
              key={step.number}
              className='col-md-4'
              data-aos='fade-up'
              data-aos-delay={index * 150}
            >
              <div className='text-center'>
                <div
                  className='tw-mb-4 mx-auto'
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${index === 0 ? "#84DADE" : index === 1 ? "#1ECAD3" : "#FF4438"} 0%, ${index === 0 ? "#1ECAD3" : index === 1 ? "#0099A8" : "#FF4438"} 100%)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <i
                    className={`ph ${step.icon}`}
                    style={{
                      fontSize: "40px",
                      color: "#FFFFFF",
                    }}
                  />
                  <div
                    className='position-absolute'
                    style={{
                      top: "-10px",
                      right: "-10px",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "#002B49",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      fontFamily: "'Filson Pro', sans-serif",
                    }}
                  >
                    {step.number}
                  </div>
                </div>
                <h3
                  className='tw-mb-3'
                  style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#002B49",
                    fontFamily: "'Filson Pro', sans-serif",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#666",
                    fontFamily: "'Filson Pro', sans-serif",
                    lineHeight: "1.6",
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

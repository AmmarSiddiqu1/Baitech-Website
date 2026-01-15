import type { FC } from "react";

const Features: FC = () => {
  const features = [
    {
      title: "AI Ops Assistant",
      description:
        "Answers landlord & tenant queries, drafts reminders and notices in EN/AR.",
      icon: "ph-brain",
      color: "#1ECAD3",
    },
    {
      title: "Maintenance Triage",
      description:
        "Auto-categorizes requests, requests approval when needed, assigns vendors.",
      icon: "ph-wrench",
      color: "#84DADE",
    },
    {
      title: "WhatsApp-first Comms",
      description:
        "OTP, reminders, and updates over WhatsApp/SMS with quiet hours.",
      icon: "ph-whatsapp-logo",
      color: "#0099A8",
    },
    {
      title: "Local Payments",
      description:
        "BenefitPay (Bahrain) and Tap (GCC) with webhook reconciliation & receipts.",
      icon: "ph-credit-card",
      color: "#FF4438",
    },
  ];

  return (
    <section id='features' className='tw-py-80-px'>
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
              Why Baitech
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#666",
                fontFamily: "'Filson Pro', sans-serif",
                maxWidth: "600px",
                margin: "0 auto",
              }}
              data-aos='fade-up'
              data-aos-delay={100}
            >
              Reduce manual work with AI agents and n8n automations.
            </p>
          </div>
        </div>

        <div className='row gy-4'>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className='col-md-6 col-lg-3'
              data-aos='fade-up'
              data-aos-delay={index * 100}
            >
              <div
                className='h-100 p-4'
                style={{
                  background: "#FFFFFF",
                  borderRadius: "16px",
                  border: "1px solid #E9ECEF",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  className='tw-mb-4'
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "12px",
                    background: `${feature.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i
                    className={`ph ${feature.icon}`}
                    style={{
                      fontSize: "32px",
                      color: feature.color,
                    }}
                  />
                </div>
                <h3
                  className='tw-mb-3'
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#002B49",
                    fontFamily: "'Filson Pro', sans-serif",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#666",
                    fontFamily: "'Filson Pro', sans-serif",
                    lineHeight: "1.6",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import type { FC } from "react";

const Pricing: FC = () => {
  const plans = [
    {
      name: "Starter",
      subtitle: "For pilots and small buildings",
      price: "Free",
      unitLimit: "Up to 10 units",
      features: [
        "WhatsApp/SMS alerts",
        "Email support",
        "Basic dashboard",
        "Tenant portal",
      ],
      cta: "Start Free",
      ctaStyle: "primary",
      popular: false,
    },
    {
      name: "Growth",
      subtitle: "For landlords with 50+ units",
      price: "Custom",
      unitLimit: "50+ units",
      features: [
        "Everything in Starter",
        "Maintenance triage",
        "Tap/BenefitPay integration",
        "CSV import",
        "Priority support",
      ],
      cta: "Talk to Sales",
      ctaStyle: "secondary",
      popular: true,
    },
    {
      name: "Enterprise",
      subtitle: "For portfolios across GCC",
      price: "Custom",
      unitLimit: "Unlimited",
      features: [
        "Everything in Growth",
        "Dedicated support",
        "Custom workflows",
        "SSO integration",
        "Audit exports",
        "Multi-currency",
      ],
      cta: "Contact Us",
      ctaStyle: "secondary",
      popular: false,
    },
  ];

  return (
    <section id='pricing' className='tw-py-80-px'>
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
              Simple pricing that scales with you
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
              Start free. Upgrade as your portfolio grows.
            </p>
          </div>
        </div>

        <div className='row gy-4'>
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className='col-md-6 col-lg-4'
              data-aos='fade-up'
              data-aos-delay={index * 150}
            >
              <div
                className='h-100 p-4'
                style={{
                  background: plan.popular ? "#FFFFFF" : "#F8F9FA",
                  borderRadius: "20px",
                  border: plan.popular
                    ? "2px solid #1ECAD3"
                    : "1px solid #E9ECEF",
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {plan.popular && (
                  <div
                    className='position-absolute'
                    style={{
                      top: "-15px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#1ECAD3",
                      color: "#FFFFFF",
                      padding: "6px 20px",
                      borderRadius: "50px",
                      fontSize: "14px",
                      fontWeight: 600,
                      fontFamily: "'Filson Pro', sans-serif",
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <div className='text-center tw-mb-4'>
                  <h3
                    className='tw-mb-2'
                    style={{
                      fontSize: "28px",
                      fontWeight: 700,
                      color: "#002B49",
                      fontFamily: "'Filson Pro', sans-serif",
                    }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      fontFamily: "'Filson Pro', sans-serif",
                    }}
                  >
                    {plan.subtitle}
                  </p>
                </div>
                <div className='text-center tw-mb-4'>
                  <div
                    style={{
                      fontSize: "clamp(32px, 5vw, 48px)",
                      fontWeight: 700,
                      color: "#1ECAD3",
                      fontFamily: "'Filson Pro', sans-serif",
                    }}
                  >
                    {plan.price}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      fontFamily: "'Filson Pro', sans-serif",
                    }}
                  >
                    {plan.unitLimit}
                  </div>
                </div>
                <ul
                  className='tw-mb-4'
                  style={{
                    listStyle: "none",
                    padding: 0,
                    flexGrow: 1,
                  }}
                >
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className='d-flex align-items-center tw-gap-2 tw-mb-3'
                    >
                      <i
                        className='ph ph-check'
                        style={{
                          color: "#1ECAD3",
                          fontSize: "20px",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "16px",
                          color: "#002B49",
                          fontFamily: "'Filson Pro', sans-serif",
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href='#contact'
                  className={
                    plan.ctaStyle === "primary"
                      ? "btn-baitech-primary"
                      : "btn-baitech-secondary"
                  }
                  style={{
                    textDecoration: "none",
                    width: "100%",
                    textAlign: "center",
                    display: "block",
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

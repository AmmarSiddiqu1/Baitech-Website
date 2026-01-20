import type { FC } from "react";

const Services: FC = () => {
  const services = [
    {
      title: "Landlord dashboard",
      description: "units, leases, invoices, arrears",
      icon: "ph-buildings",
    },
    {
      title: "Tenant portal",
      description: "pay rent, request maintenance with photos/video",
      icon: "ph-users",
    },
    {
      title: "EWA over-cap detection",
      description: "configurable caps & overage billing",
      icon: "ph-warning",
    },
    {
      title: "Bulk CSV import",
      description: "fast onboarding for 50+ units",
      icon: "ph-file-csv",
    },
    {
      title: "Notifications",
      description: "WhatsApp, SMS, and email with quiet hours",
      icon: "ph-bell",
    },
  ];

  return (
    <section className='tw-py-80-px'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center tw-mb-12'>
            <h2
              className='tw-mb-4'
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 700,
                color: "#002B49",
                fontFamily: "'Filson Pro'",
              }}
              data-aos='fade-up'
            >
              Everything you need to run your portfolio
            </h2>
          </div>
        </div>

        <div className='row gy-4'>
          {services.map((service, index) => (
            <div
              key={service.title}
              className='col-md-6 col-lg-4'
              data-aos='fade-up'
              data-aos-delay={index * 100}
            >
              <div className='d-flex align-items-start tw-gap-4'>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "12px",
                    background: "#1ECAD315",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <i
                    className={`ph ${service.icon}`}
                    style={{
                      fontSize: "24px",
                      color: "#1ECAD3",
                    }}
                  />
                </div>
                <div>
                  <h3
                    className='tw-mb-2'
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "#002B49",
                      fontFamily: "'Filson Pro'",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#666",
                      fontFamily: "'Filson Pro'",
                      lineHeight: "1.6",
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

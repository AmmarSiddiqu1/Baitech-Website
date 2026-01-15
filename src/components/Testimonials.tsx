import type { FC } from "react";

const Testimonials: FC = () => {
  const testimonials = [
    {
      quote:
        "Collections improved in month one, and tenants love WhatsApp updates.",
      author: "Property Manager",
      location: "Manama",
    },
    {
      quote:
        "Onboarding 120 units via CSV took less than an hour.",
      author: "Portfolio Owner",
      location: "Bahrain",
    },
  ];

  return (
    <section className='tw-py-80-px bg-light'>
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
              What our clients say
            </h2>
          </div>
        </div>

        <div className='row gy-4'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='col-md-6'
              data-aos='fade-up'
              data-aos-delay={index * 150}
            >
              <div
                className='p-5 h-100'
                style={{
                  background: "#FFFFFF",
                  borderRadius: "20px",
                  border: "1px solid #E9ECEF",
                  height: "100%",
                }}
              >
                <div
                  className='tw-mb-4'
                  style={{
                    fontSize: "48px",
                    color: "#1ECAD3",
                    lineHeight: 1,
                  }}
                >
                  "
                </div>
                <p
                  className='tw-mb-4'
                  style={{
                    fontSize: "18px",
                    color: "#002B49",
                    fontFamily: "'Filson Pro', sans-serif",
                    lineHeight: "1.8",
                    fontStyle: "italic",
                  }}
                >
                  {testimonial.quote}
                </p>
                <div>
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#002B49",
                      fontFamily: "'Filson Pro', sans-serif",
                    }}
                  >
                    — {testimonial.author}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      fontFamily: "'Filson Pro', sans-serif",
                    }}
                  >
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

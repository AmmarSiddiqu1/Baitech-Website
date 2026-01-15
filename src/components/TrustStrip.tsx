import type { FC } from "react";

const TrustStrip: FC = () => {
  return (
    <section
      className='tw-py-12 bg-light'
      style={{
        background: "#F8F9FA",
        padding: "60px 0",
      }}
    >
      <div className='container'>
        <p
          className='text-center tw-mb-4'
          style={{
            fontSize: "16px",
            color: "#666",
            fontFamily: "'Filson Pro', sans-serif",
            marginBottom: "40px",
          }}
        >
          Trusted by property owners and operators across Bahrain and the GCC.
        </p>
        <div className='row align-items-center justify-content-center'>
          {/* REPLACE: Replace these placeholders with actual client/partner logos */}
          {/* Place logo files at: public/assets/images/clients/client-logo-1.png, client-logo-2.png, etc. */}
          {/* Then replace the divs with: <img src="/assets/images/clients/client-logo-1.png" alt="Client Name" style={{ maxHeight: "80px", width: "auto" }} /> */}
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className='col-6 col-md-4 col-lg-2 text-center tw-mb-4'
              data-aos='fade-up'
              data-aos-delay={item * 100}
            >
              <div
                style={{
                  height: "80px",
                  background: "#E9ECEF",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  color: "#666",
                  fontFamily: "'Filson Pro', sans-serif",
                }}
              >
                Client Logo {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;

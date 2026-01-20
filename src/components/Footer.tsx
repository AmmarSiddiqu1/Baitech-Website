import type { FC } from "react";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="footer-five">
      <div className="tw-mx-48-px position-relative gradient-bg-70-top-bottom z-1 rounded-top-30-px">
        {/* Top CTA Section */}
        <div className="row justify-content-center">
          <div className="col-xxl-11">
            <div
              className="tw-rounded-28-px tw-py-100-px"
              style={{
                background: "#1ECAD3",
                borderRadius: "28px",
                padding: "100px 60px",
              }}
            >
              <div className="text-center mx-auto max-w-724-px">
                {/* Badge */}
                <div
                  className="bg-white-13 tw-py-2 tw-px-7 rounded-pill text-white fw-semibold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max common-shadow-twentyNine"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="600"
                >
                  get started now
                </div>
                {/* Headline */}
                <h2
                  className="text-56-px splitTextStyleOne text-white text-capitalize tw-leading-none fw-medium"
                  style={{
                    fontSize: "clamp(32px, 5vw, 56px)",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    lineHeight: 1.1,
                    marginTop: "1.5rem",
                  }}
                >
                  Transform Your Property Management Today
                </h2>
                {/* CTA Button */}
                <div
                  className="tw-mt-9"
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom"
                  data-aos-duration="1200"
                  style={{ marginTop: "2rem" }}
                >
                  <a
                    href="https://wa.me/97312345678"
                    className="hover--translate-y-1 active--translate-y-scale-9 btn btn-white hover-style-one button--stroke d-sm-inline-flex d-none align-items-center justify-content-center tw-gap-5 group active--translate-y-2 tw-px-14 rounded-pill tw-py-505 fw-semibold common-shadow-inset-one"
                    data-block="button"
                    style={{
                      backgroundColor: "#FFFFFF",
                      color: "#002B49",
                      textDecoration: "none",
                    }}
                  >
                    <span className="button__flair"></span>
                    <span className="button__label">Sign up Now</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div className="pt-120 tw-mx-48-px position-relative" style={{ paddingTop: "120px" }}>
          <div className="container">
            <div
              className="d-flex tw-gap-6 d-flex justify-content-between flex-lg-nowrap flex-wrap"
              style={{
                borderTop: "3px solid #1ECAD3",
                borderBottom: "3px solid #1ECAD3",
                gap: "24px",
                padding: "80px 0",
              }}
            >
              {/* Column 1 - Logo and Contact */}
              <div>
                <a
                  href="#home"
                  style={{ marginBottom: "1.5rem", display: "inline-block" }}
                >
                  <img
                    src="/assets/images/logo/Logo.svg"
                    alt="Baitech Logo"
                    style={{ height: "60px", width: "auto" }}
                  />
                </a>
                <p
                  style={{
                    maxWidth: "250px",
                    fontSize: "18px",
                    color: "#002B49",
                    marginBottom: "1.5rem",
                    opacity: 0.8,
                  }}
                >
                  AI-first property management built in Bahrain for the GCC
                </p>
                <div className="d-flex flex-column" style={{ gap: "16px", marginTop: "1.5rem" }}>
                  <div className="d-flex align-items-center" style={{ gap: "12px" }}>
                    <span
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "linear-gradient(135deg, #1ECAD3 0%, #0099A8 100%)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i className="ph-bold ph-phone" style={{ fontSize: "20px", color: "#FFFFFF" }} />
                    </span>
                    <span style={{ fontWeight: 600, color: "#002B49", fontSize: "16px" }}>
                      +973 1234 5678
                    </span>
                  </div>
                  <div className="d-flex align-items-center" style={{ gap: "12px" }}>
                    <span
                      style={{
                        width: "40px",
                        height: "40px",
                        background: "linear-gradient(135deg, #FF4438 0%, #FF6B5E 100%)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i className="ph-bold ph-envelope-simple" style={{ fontSize: "20px", color: "#FFFFFF" }} />
                    </span>
                    <span style={{ fontWeight: 600, color: "#002B49", fontSize: "16px" }}>
                      contact@baitech.app
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider 1 */}
              <div className="d-lg-flex d-none">
                <div style={{ width: "2px", height: "100%", background: "linear-gradient(180deg, #84DADE 0%, #1ECAD3 50%, #0099A8 100%)" }} />
              </div>

              {/* Column 2 - Navigation */}
              <div>
                <h5
                  style={{
                    fontWeight: 700,
                    color: "#002B49",
                    marginBottom: "2rem",
                    fontSize: "18px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Quick Links
                </h5>
                <ul style={{ gap: "16px", listStyle: "none", padding: 0, display: "flex", flexDirection: "column" }}>
                  {["Home", "Features", "How It Works", "FAQ", "Contact"].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                        style={{
                          color: "#002B49",
                          textDecoration: "none",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          fontSize: "16px",
                          fontWeight: 500,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#1ECAD3";
                          e.currentTarget.style.paddingLeft = "8px";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#002B49";
                          e.currentTarget.style.paddingLeft = "0";
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider 2 */}
              <div className="d-lg-flex d-none">
                <div style={{ width: "2px", height: "100%", background: "linear-gradient(180deg, #84DADE 0%, #1ECAD3 50%, #0099A8 100%)" }} />
              </div>

              {/* Column 3 - Newsletter */}
              <div>
                <h5
                  style={{
                    fontWeight: 700,
                    color: "#002B49",
                    marginBottom: "2rem",
                    fontSize: "18px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Newsletter
                </h5>
                <form
                  action="#"
                  style={{
                    position: "relative",
                    boxShadow: "0 4px 12px rgba(30, 202, 211, 0.2)",
                    borderRadius: "50px",
                  }}
                >
                  <input
                    type="email"
                    placeholder="Enter your e-mail"
                    style={{
                      padding: "16px 56px 16px 48px",
                      border: "2px solid #84DADE",
                      borderRadius: "50px",
                      fontSize: "16px",
                      outline: "none",
                      width: "100%",
                      background: "#FFFFFF",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      left: "20px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: "20px",
                      color: "#1ECAD3",
                    }}
                  >
                    <i className="ph-bold ph-envelope-simple" />
                  </span>
                  <button
                    type="button"
                    style={{
                      position: "absolute",
                      right: "8px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "44px",
                      height: "44px",
                      background: "linear-gradient(135deg, #1ECAD3 0%, #0099A8 100%)",
                      border: "none",
                      borderRadius: "50%",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      color: "#FFFFFF",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "linear-gradient(135deg, #FF4438 0%, #FF6B5E 100%)";
                      e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "linear-gradient(135deg, #1ECAD3 0%, #0099A8 100%)";
                      e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                    }}
                  >
                    <i className="ph-bold ph-arrow-up-right" />
                  </button>
                </form>
              </div>
            </div>

            {/* Footer Bottom */}
            <div style={{ padding: "32px 0" }}>
              <div className="container">
                <div className="d-flex align-items-center justify-content-between tw-gap-4 flex-wrap" style={{ gap: "16px" }}>
                  <p style={{ fontWeight: 600, color: "#002B49", margin: 0, fontSize: "16px" }}>
                    Copyright &copy; {currentYear}{" "}
                    <a href="#home" style={{ color: "#1ECAD3", textDecoration: "none", fontWeight: 700 }}>
                      Baitech
                    </a>
                    . All Rights Reserved
                  </p>
                  <div className="d-flex align-items-center" style={{ gap: "12px" }}>
                    {[
                      { icon: "ph-facebook-logo", color: "#1ECAD3" },
                      { icon: "ph-twitter-logo", color: "#0099A8" },
                      { icon: "ph-instagram-logo", color: "#FF4438" },
                    ].map((social, idx) => (
                      <button
                        key={idx}
                        type="button"
                        style={{
                          width: "48px",
                          height: "48px",
                          border: `2px solid ${social.color}`,
                          background: "#FFFFFF",
                          borderRadius: "50%",
                          fontSize: "22px",
                          color: social.color,
                          cursor: "pointer",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = social.color;
                          e.currentTarget.style.color = "#FFFFFF";
                          e.currentTarget.style.transform = "translateY(-4px) rotate(360deg)";
                          e.currentTarget.style.boxShadow = `0 8px 24px ${social.color}40`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "#FFFFFF";
                          e.currentTarget.style.color = social.color;
                          e.currentTarget.style.transform = "translateY(0) rotate(0deg)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <i className={`ph-fill ${social.icon}`} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

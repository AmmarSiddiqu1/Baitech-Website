import { useState, type FC } from "react";

const FAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you support Bahrain payments?",
      answer:
        "Yes—BenefitPay for Bahrain and Tap for GCC. Both payment methods are fully integrated with webhook reconciliation and instant receipts.",
    },
    {
      question: "Do you work without WhatsApp?",
      answer:
        "Yes—SMS/email fallback is available. While WhatsApp is our primary communication channel, we support multiple notification methods.",
    },
    {
      question: "Arabic support?",
      answer:
        "Full EN/AR UI, RTL support, and large text options for elderly-friendly interface. All content can be displayed in both languages.",
    },
    {
      question: "Security?",
      answer:
        "Role-based access control, comprehensive audit logs, and encrypted data storage. We follow industry best practices for data security.",
    },
    {
      question: "Who is Baitech for?",
      answer:
        "Landlords and operators managing 50+ units. Our platform scales from small portfolios to enterprise-level property management across the GCC.",
    },
  ];

  return (
    <section id='faq' className='tw-py-80-px'>
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
              Frequently Asked Questions
            </h2>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-8 mx-auto'>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className='tw-mb-3'
                data-aos='fade-up'
                data-aos-delay={index * 100}
              >
                <div
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "12px",
                    border: "1px solid #E9ECEF",
                    overflow: "hidden",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 43, 73, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className='w-100 p-4 d-flex align-items-center justify-content-between'
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 600,
                        color: "#002B49",
                        fontFamily: "'Filson Pro'",
                        margin: 0,
                      }}
                    >
                      {faq.question}
                    </h3>
                    <div
                      style={{
                        flexShrink: 0,
                        marginLeft: "16px",
                        width: "24px",
                        height: "24px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <i
                        className={`ph ph-${openIndex === index ? "minus" : "plus"}`}
                        style={{
                          fontSize: "24px",
                          color: "#1ECAD3",
                          transition: "opacity 0.2s ease",
                        }}
                      />
                    </div>
                  </button>
                  <div
                    style={{
                      maxHeight: openIndex === index ? "500px" : "0",
                      overflow: "hidden",
                      transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease",
                      opacity: openIndex === index ? 1 : 0,
                    }}
                  >
                    <div
                      className='p-4'
                      style={{
                        borderTop: "1px solid #E9ECEF",
                        background: "#F8F9FA",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "16px",
                          color: "#666",
                          fontFamily: "'Filson Pro'",
                          lineHeight: "1.8",
                          margin: 0,
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

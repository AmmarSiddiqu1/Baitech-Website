import type { FC } from "react";

const HowItWorks: FC = () => {
  return (
    <section id="how-it-works" className="work-process-five py-120">
      <div className="container">
        <div className="text-center mx-auto tw-pb-15">
          {/* Badge */}
          <div
            className="tw-py-2 tw-px-7 rounded-pill fw-bold text-capitalize tw-leading-none d-inline-flex align-items-center tw-gap-2 tw-mb-405 min-w-max common-shadow-twentyNine"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="600"
            style={{
              backgroundColor: "#FF4438",
              color: "#FFFFFF",
            }}
          >
            How It Works
          </div>
          {/* Headline */}
          <h2
            className="splitTextStyleOne text-heading text-capitalize tw-leading-none"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              color: "#002B49",
              lineHeight: 1.2,
            }}
          >
            Simplifying your property management journey
          </h2>
        </div>

        <div className="position-relative tw-mt-17 stair-bg tw-rounded-28-px" style={{ marginTop: "clamp(2rem, 4vw, 4rem)" }}>
          <div className="tw-px-40-px d-flex tw-pt-14 gradient-bg-seven tw-rounded-28-px position-relative flex-md-nowrap flex-wrap tw-gap-6" style={{ paddingTop: "clamp(2rem, 4vw, 3.5rem)", paddingLeft: "clamp(1rem, 2.5vw, 2.5rem)", paddingRight: "clamp(1rem, 2.5vw, 2.5rem)", paddingBottom: 0 }}>
            <div className="max-w-780-px mx-auto">
              <div className="text-center">
                {/* Title */}
                <h2
                  className="splitTextStyleOne text-heading text-capitalize tw-leading-none max-w-500-px mx-auto"
                  style={{
                    fontSize: "clamp(24px, 3vw, 36px)",
                    fontWeight: 700,
                    color: "#002B49",
                    marginBottom: "1rem",
                  }}
                >
                  Sign up and secure your account
                </h2>
                {/* Description */}
                <p className="text-neutral-600 tw-text-xl tw-mt-605 splitTextStyleOne max-w-5 mx-auto fw-medium tw-leading-145 max-w-548-px">
                  In today's competitive business, the demand for efficient and cost-effective property management solutions has never been more critical.
                </p>
              </div>

              {/* 3 Steps */}
              <div className="tw-mt-80-px d-flex justify-content-center position-relative z-1 tw-gap-2 tw-pb-6" style={{ gap: "clamp(3rem, 10vw, 6rem)" }}>
                {/* Connecting Line */}
                <span className="tw-h-px how-it-works-connecting-line position-absolute z-n1" style={{ top: "12px", left: "47%", transform: "translateX(-50%)", width: "calc(80% - 12px)" }}></span>

                {/* Step 1 */}
                <div className="text-center">
                  <span className="tw-w-405 tw-h-405 bg-deep-green rounded-circle"></span>
                  <span className="text-heading fw-semibold d-block tw-mt-4 text-capitalize">Sign up</span>
                </div>

                {/* Step 2 */}
                <div className="text-center" style={{ marginLeft: "1rem" }}>
                  <span className="tw-w-405 tw-h-405 rounded-circle bg-white common-shadow-twentyEight"></span>
                  <span className="text-heading fw-semibold d-block tw-mt-4 text-capitalize">Set preferences</span>
                </div>

                {/* Step 3 */}
                <div className="text-center">
                  <span className="tw-w-405 tw-h-405 rounded-circle how-it-works-step3-circle"></span>
                  <span className="text-heading fw-semibold d-block tw-mt-4 text-capitalize">Start managing</span>
                </div>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="d-flex flex-column justify-content-end" style={{ alignSelf: "flex-end" }}>
              <img
                src="/assets/images/work_process/work-process-five-thumb.png"
                alt="How It Works"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1200"
                style={{ display: "block", marginBottom: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

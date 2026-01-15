import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { FC } from "react";

const AppScreens: FC = () => {
  const screens = [
    {
      title: "Dashboard",
      description: "See dues, arrears, and open tickets at a glance.",
      color: "#84DADE",
    },
    {
      title: "Maintenance",
      description: "Log issues with photos/video and track vendor progress.",
      color: "#1ECAD3",
    },
    {
      title: "Payments",
      description: "Pay in seconds via BenefitPay or Tap; instant receipts.",
      color: "#0099A8",
    },
    {
      title: "Chat",
      description: "Ask Baitech anything—EN/AR, 24/7.",
      color: "#FF4438",
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
                fontFamily: "'Filson Pro', sans-serif",
              }}
              data-aos='fade-up'
            >
              App Screens
            </h2>
          </div>
        </div>

        <div className='position-relative' style={{ padding: "0 60px" }}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            direction="horizontal"
            navigation={{
              nextEl: '.app-screens-next',
              prevEl: '.app-screens-prev',
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className='app-screens-swiper'
          >
          {screens.map((screen, index) => (
            <SwiperSlide key={screen.title} style={{ height: "auto" }}>
              <div
                className='p-4'
                style={{
                  background: "#FFFFFF",
                  borderRadius: "20px",
                  border: "1px solid #E9ECEF",
                  height: "100%",
                  minHeight: "450px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
                data-aos='fade-up'
                data-aos-delay={index * 100}
              >
                {/* REPLACE: Replace this placeholder with actual app screenshots */}
                {/* Place screenshots at: public/assets/images/app-screens/dashboard.png, maintenance.png, payments.png, chat.png */}
                {/* Then replace this div with: <img src={`/assets/images/app-screens/${screen.title.toLowerCase()}.png`} alt={screen.title} style={{ width: "100%", height: "auto", borderRadius: "12px" }} /> */}
                <div
                  style={{
                    width: "100%",
                    height: "250px",
                    minHeight: "250px",
                    background: `linear-gradient(135deg, ${screen.color} 0%, ${screen.color}dd 100%)`,
                    borderRadius: "12px",
                    marginBottom: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
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
                    {screen.title}
                  </div>
                </div>
                <h3
                  className='text-center'
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#002B49",
                    fontFamily: "'Filson Pro', sans-serif",
                    marginBottom: "12px",
                    flexShrink: 0,
                  }}
                >
                  {screen.title}
                </h3>
                <p
                  className='text-center'
                  style={{
                    fontSize: "16px",
                    color: "#666",
                    fontFamily: "'Filson Pro', sans-serif",
                    lineHeight: "1.6",
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {screen.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
          </Swiper>
          {/* Custom Navigation Arrows - Outside Carousel */}
          <button
            className='app-screens-prev'
            aria-label='Previous slide'
            style={{
              position: "absolute",
              left: "-50px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "#002B49",
              border: "none",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              transition: "all 0.3s ease",
              boxShadow: "0 4px 12px rgba(0, 43, 73, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0099A8";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#002B49";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className='app-screens-next'
            aria-label='Next slide'
            style={{
              position: "absolute",
              right: "-50px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "#002B49",
              border: "none",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 10,
              transition: "all 0.3s ease",
              boxShadow: "0 4px 12px rgba(0, 43, 73, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0099A8";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#002B49";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppScreens;

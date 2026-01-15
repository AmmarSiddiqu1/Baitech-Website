import type { FC } from "react";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className='tw-py-12'
      style={{
        background: "#002B49",
        color: "#FFFFFF",
      }}
    >
      <div className='container'>
        <div className='row gy-4 align-items-center'>
          <div className='col-md-6'>
            <div className='d-flex align-items-center tw-mb-4'>
              <img
                src='/assets/images/logo/Logo-White-Background.svg'
                alt='Baitech Logo'
                style={{ height: "60px", width: "auto" }}
              />
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.7)",
                fontFamily: "'Filson Pro', sans-serif",
                margin: 0,
              }}
            >
              Built in Bahrain • EN/AR • WhatsApp-first
            </p>
          </div>
          <div className='col-md-6 text-md-end'>
            <div className='d-flex align-items-center justify-content-md-end tw-gap-4 flex-wrap'>
              <a
                href='#'
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontFamily: "'Filson Pro', sans-serif",
                }}
              >
                Terms
              </a>
              <a
                href='#'
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontFamily: "'Filson Pro', sans-serif",
                }}
              >
                Privacy
              </a>
              <a
                href='#contact'
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontFamily: "'Filson Pro', sans-serif",
                }}
              >
                Contact
              </a>
            </div>
            <p
              className='tw-mt-4 tw-mb-0'
              style={{
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.7)",
                fontFamily: "'Filson Pro', sans-serif",
              }}
            >
              © {currentYear} Baitech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

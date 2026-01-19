import { useEffect, useState, type FC } from "react";
import { throttle } from "lodash";

const Header: FC = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = throttle(() => {
      const y = window.scrollY;
      setScroll(y >= 150);

      // Update active section based on scroll position
      const sections = ["home", "features", "how-it-works", "faq", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    }, 150);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel();
    };
  }, []);

  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`header bg-white transition-all ${
          scroll && "fixed-header"
        }`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          boxShadow: scroll ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className='container container-two'>
          <nav className='d-flex align-items-center justify-content-between'>
            {/* Logo Start */}
            <div className='logo'>
              <a
                href='#home'
                className='link hover--translate-y-1 active--translate-y-scale-9'
                style={{ textDecoration: "none" }}
              >
                <img
                  src='/assets/images/logo/Logo.svg'
                  alt='Baitech Logo'
                  style={{ height: "60px", width: "auto" }}
                />
              </a>
            </div>

            {/* Menu Start */}
            <div className='header-menu d-lg-block d-none'>
              <ul className='nav-menu d-lg-flex align-items-center tw-gap-7'>
                {navItems.map((item) => {
                  const sectionId = item.href.substring(1);
                  const isActive = activeSection === sectionId;
                  return (
                    <li
                      key={item.label}
                      className={`nav-menu__item ${
                        isActive ? "activePage" : ""
                      }`}
                    >
                      <a
                        href={item.href}
                        className='nav-menu__link text-heading tw-py-9 fw-semibold w-100'
                        style={{
                          color: isActive ? "#1ECAD3" : "#002B49",
                          textDecoration: "none",
                          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                          position: "relative",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-2px)";
                          e.currentTarget.style.color = "#1ECAD3";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.color = isActive ? "#1ECAD3" : "#002B49";
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Header Right start */}
            <div className='d-flex align-items-center tw-gap-6'>
              {/* REPLACE: Replace with official WhatsApp logo/icon (newer version) */}
              {/* Place official WhatsApp logo at: public/assets/images/partners/whatsapp-logo.png */}
              {/* Then use: <img src="/assets/images/partners/whatsapp-logo.png" alt="WhatsApp" style={{ height: "32px", width: "auto" }} /> */}
              <a
                href='https://wa.me/97312345678'
                target='_blank'
                rel='noopener noreferrer'
                className='d-flex align-items-center justify-content-center'
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#25D366",
                  textDecoration: "none",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.1) translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 211, 102, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1) translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Using newer WhatsApp icon - replace with official logo image when available */}
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'
                    fill='#FFFFFF'
                  />
                </svg>
              </a>
              <button
                onClick={handleMobileMenu}
                type='button'
                className='toggle-mobileMenu leading-none d-lg-none text-neutral-800 tw-text-9'
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "24px",
                  cursor: "pointer",
                }}
              >
                <i className='ph ph-list' />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`mobile-menu d-lg-none d-block scroll-sm position-fixed bg-white tw-w-300-px tw-h-screen overflow-y-auto tw-p-6 tw-z-999 tw--translate-x-full tw-pb-68 ${
          mobileMenu && "active"
        }`}
        style={{
          transform: mobileMenu ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <button
          onClick={handleMobileMenu}
          type='button'
          className='close-button position-absolute tw-end-0 top-0 tw-me-2 tw-mt-2 rounded-circle d-flex justify-content-center align-items-center'
          style={{
            background: "#f0f0f0",
            border: "none",
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
        >
          <i className='ph ph-x' />
        </button>
        <div className='mobile-menu__inner'>
          <a href='#home' className='mobile-menu__logo' onClick={handleMobileMenu}>
            <img
              src='/assets/images/logo/Logo.svg'
              alt='Baitech Logo'
              style={{ height: "50px", width: "auto" }}
            />
          </a>

          <div className='mobile-menu__menu'>
            <ul className='nav-menu d-lg-flex align-items-center nav-menu--mobile d-block tw-mt-8'>
              {navItems.map((item) => (
                <li key={item.label} className='nav-menu__item'>
                  <a
                    href={item.href}
                    onClick={handleMobileMenu}
                    className='nav-menu__link text-heading tw-py-9 fw-semibold w-100'
                    style={{
                      color: "#002B49",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a
            href='https://wa.me/97312345678'
            target='_blank'
            rel='noopener noreferrer'
            onClick={handleMobileMenu}
            className='d-sm-none d-inline-flex align-items-center justify-content-center tw-gap-2 tw-mt-6'
            style={{
              textDecoration: "none",
              width: "100%",
              padding: "12px",
              borderRadius: "50px",
              background: "#25D366",
              color: "#FFFFFF",
              fontWeight: 700,
            }}
          >
            {/* Using newer WhatsApp icon */}
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'
                fill='#FFFFFF'
              />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;

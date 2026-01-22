import type { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";

const TermsAndConditions: FC = () => {
  return (
    <div>
      <Header />
      <section style={{ padding: "120px 0", minHeight: "80vh", background: "#F5F8FC" }}>
        <div className="container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 700,
                color: "#002B49",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              Terms and Conditions
            </h1>
            <div style={{ background: "#FFFFFF", padding: "3rem", borderRadius: "16px", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)" }}>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "16px" }}>
                <strong style={{ color: "#002B49" }}>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#002B49", marginTop: "2rem", marginBottom: "1rem" }}>
                1. Acceptance of Terms
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "16px" }}>
                By accessing and using Baitech's property management platform and services, you accept and agree to be bound by 
                these Terms and Conditions. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#002B49", marginTop: "2rem", marginBottom: "1rem" }}>
                2. Description of Services
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "16px" }}>
                Baitech provides a comprehensive property management platform that enables users to manage properties, tenants, 
                payments, maintenance, and other property-related activities. Our services include software applications, web 
                platforms, and related support services.
              </p>

              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#002B49", marginTop: "2rem", marginBottom: "1rem" }}>
                3. User Accounts
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "1rem", fontSize: "16px" }}>
                To access certain features of our services, you must create an account. You agree to:
              </p>
              <ul style={{ color: "#666", lineHeight: 1.8, marginBottom: "1.5rem", paddingLeft: "2rem", fontSize: "16px" }}>
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>

              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#002B49", marginTop: "2rem", marginBottom: "1rem" }}>
                4. Payment Terms
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "1rem", fontSize: "16px" }}>
                If you purchase a subscription or use paid features:
              </p>
              <ul style={{ color: "#666", lineHeight: 1.8, marginBottom: "1.5rem", paddingLeft: "2rem", fontSize: "16px" }}>
                <li>You agree to pay all fees associated with your subscription</li>
                <li>Fees are billed in advance on a recurring basis</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>We reserve the right to change our pricing with prior notice</li>
                <li>Failure to pay may result in suspension or termination of services</li>
              </ul>

              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#002B49", marginTop: "2rem", marginBottom: "1rem" }}>
                5. User Conduct
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "1rem", fontSize: "16px" }}>
                You agree not to:
              </p>
              <ul style={{ color: "#666", lineHeight: 1.8, marginBottom: "1.5rem", paddingLeft: "2rem", fontSize: "16px" }}>
                <li>Use the services for any illegal or unauthorized purpose</li>
                <li>Violate any laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Transmit viruses, malware, or harmful code</li>
                <li>Interfere with or disrupt the services</li>
                <li>Attempt to gain unauthorized access to our systems</li>
              </ul>

              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#002B49", marginTop: "2rem", marginBottom: "1rem" }}>
                6. Intellectual Property
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "16px" }}>
                All content, features, and functionality of the services, including but not limited to text, graphics, logos, 
                icons, images, and software, are the exclusive property of Baitech and are protected by copyright, trademark, 
                and other intellectual property laws.
              </p>

              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#002B49", marginTop: "2rem", marginBottom: "1rem" }}>
                7. Limitation of Liability
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "16px" }}>
                To the maximum extent permitted by law, Baitech shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, 
                or any loss of data, use, goodwill, or other intangible losses resulting from your use of the services.
              </p>

              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#002B49", marginTop: "2rem", marginBottom: "1rem" }}>
                8. Termination
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "16px" }}>
                We may terminate or suspend your account and access to the services immediately, without prior notice, for any 
                breach of these Terms and Conditions. Upon termination, your right to use the services will cease immediately.
              </p>

              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#002B49", marginTop: "2rem", marginBottom: "1rem" }}>
                9. Contact Information
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "16px" }}>
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <p style={{ color: "#1ECAD3", lineHeight: 1.8, fontSize: "16px", fontWeight: 600 }}>
                Email: legal@baitech.com<br />
                Phone: +973 1234 5678
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;

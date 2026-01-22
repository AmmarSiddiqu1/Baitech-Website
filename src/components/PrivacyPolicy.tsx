import type { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";

const PrivacyPolicy: FC = () => {
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
              Privacy Policy
            </h1>
            <div style={{ background: "#FFFFFF", padding: "3rem", borderRadius: "16px", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)" }}>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "16px" }}>
                <strong style={{ color: "#002B49" }}>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#002B49", marginTop: "2rem", marginBottom: "1rem" }}>
                1. Introduction
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "16px" }}>
                Welcome to Baitech. We are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our property 
                management platform and services.
              </p>

              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#002B49", marginTop: "2rem", marginBottom: "1rem" }}>
                2. Information We Collect
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "1rem", fontSize: "16px" }}>
                We collect information that you provide directly to us, including:
              </p>
              <ul style={{ color: "#666", lineHeight: 1.8, marginBottom: "1.5rem", paddingLeft: "2rem", fontSize: "16px" }}>
                <li>Name, email address, phone number, and contact information</li>
                <li>Property information and management data</li>
                <li>Payment and billing information</li>
                <li>Account credentials and authentication data</li>
              </ul>

              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#002B49", marginTop: "2rem", marginBottom: "1rem" }}>
                3. How We Use Your Information
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "1rem", fontSize: "16px" }}>
                We use the information we collect to:
              </p>
              <ul style={{ color: "#666", lineHeight: 1.8, marginBottom: "1.5rem", paddingLeft: "2rem", fontSize: "16px" }}>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
              </ul>

              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#002B49", marginTop: "2rem", marginBottom: "1rem" }}>
                4. Information Sharing and Disclosure
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "16px" }}>
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the 
                following circumstances:
              </p>
              <ul style={{ color: "#666", lineHeight: 1.8, marginBottom: "1.5rem", paddingLeft: "2rem", fontSize: "16px" }}>
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With service providers who assist in our operations</li>
              </ul>

              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#002B49", marginTop: "2rem", marginBottom: "1rem" }}>
                5. Data Security
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "16px" }}>
                We implement appropriate technical and organizational security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
                or electronic storage is 100% secure.
              </p>

              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#002B49", marginTop: "2rem", marginBottom: "1rem" }}>
                6. Your Rights
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "1rem", fontSize: "16px" }}>
                You have the right to:
              </p>
              <ul style={{ color: "#666", lineHeight: 1.8, marginBottom: "1.5rem", paddingLeft: "2rem", fontSize: "16px" }}>
                <li>Access and receive a copy of your personal information</li>
                <li>Rectify inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#002B49", marginTop: "2rem", marginBottom: "1rem" }}>
                7. Contact Us
              </h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "16px" }}>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p style={{ color: "#1ECAD3", lineHeight: 1.8, fontSize: "16px", fontWeight: 600 }}>
                Email: privacy@baitech.com<br />
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

export default PrivacyPolicy;

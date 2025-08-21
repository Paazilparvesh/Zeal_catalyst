import girl from "/src/assets/girl.png";
import icon from "/src/assets/ico.png";

function Game() {
  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
        fontFamily: "'Be Vietnam Pro', sans-serif",
        color: "#000000",
        padding: "60px 20px",
        overflow: "hidden",
        minHeight: "772px",
      }}
    >
      {/* ✅ Background Girl Image */}
      <div style={{ position: "absolute", inset: 0, zIndex: -1 }}>
        <img
          src={girl}
          alt="Girl Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* ✅ Heading + Paragraph */}
      <h1
        style={{
          fontSize: "clamp(26px, 4vw, 44px)",
          fontWeight: 500,
          marginBottom: "20px",
        }}
      >
        Why Our AI LMS Is a Game-Changer
      </h1>
      <p
        className="fs-6 fs-md-5 fs-lg-4 fw-normal lh-lg mx-auto mb-5 text-center"
        style={{ maxWidth: "800px" }}
      >
        In the modern business landscape, training isn’t enough — transformation
        is the goal. Our AI LMS harnesses advanced algorithms to create
        personalized, adaptive, and data-driven learning experiences that don’t
        just educate, but elevate performance across your organization.
      </p>

      {/* ✅ Feature Cards */}
      <div
        style={{
          position: "relative",
          display: "inline-block",
        }}
        className="features-wrapper"
      >
        {/* Feature 1 */}
        <div className="feature-card">
          <img src={icon} alt="ico" width={40} height={40} />
          <span>Intelligent Business Process Automation</span>
        </div>

        {/* Feature 2 */}
        <div className="feature-card">
          <img src={icon} alt="ico" width={40} height={40} />
          <span>Predictive Analytics for Workforce Planning</span>
        </div>

        {/* Feature 3 */}
        <div className="feature-card">
          <img src={icon} alt="ico" width={40} height={40} />
          <span>Hyper-Personalized Customer Experiences</span>
        </div>
      </div>

      {/* ✅ Responsive Styles */}
      <style jsx>{`
        .feature-card {
          display: flex;
          align-items: center;
          width: 378px;
          height: auto;
          border: 1px solid #00cbb8;
          color: black;
          padding: 10px 20px;
          gap: 10px;
          font-size: 18px;
          font-weight: 400;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
          margin: 20px auto;
          position: absolute;
        }

        /* Desktop positioning (default ≥992px) */
        .feature-card:nth-child(1) {
          top: calc(20% + 240px);
          left: -580px;
          margin-top: 220px;
        }
        .feature-card:nth-child(2) {
          bottom: calc(5% - 90px);
          left: -520px;
        }
        .feature-card:nth-child(3) {
          top: 30%;
          right: -540px;
        }

        /* ✅ Large Desktop (≥1400px) */
        @media (min-width: 1400px) {
          .feature-card {
            font-size: 18px;
          }

          .feature-card:nth-child(1) {
            top: calc(20% + 240px);
            left: -530px;
            margin-top: 20px;
          }
          .feature-card:nth-child(2) {
            bottom: calc(5% - 90px);
            left: -500px;
          }
          .feature-card:nth-child(3) {
            right: -500px;
            margin-top: 150px;
          }
        }

        /* ✅ Desktop (≥1024px and <1400px) */
        @media (min-width: 1024px) and (max-width: 1399px) {
          .feature-card {
            width: 350px;
            font-size: 14px;
          }

          .feature-card:nth-child(1) {
            top: calc(20% + 220px);
            left: -500px;
            margin-top: 20px;
          }
          .feature-card:nth-child(2) {
            bottom: calc(5% - 70px);
            left: -460px;
          }
          .feature-card:nth-child(3) {
            top: 28%;
            right: -530px;
            margin-top: 130px;
          }
        }

        /* ✅ Tablet */
        @media (max-width: 1024px) {
          .features-wrapper {
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
          }
          .feature-card {
            font-size: 14px;
          }
          .feature-card:nth-child(3) {
            left: 80px;
          }
          .feature-card:nth-child(1) {
            top: calc(20% + 20px);
            left: -500px;
            margin-top: 220px;
          }
          .feature-card:nth-child(2) {
            bottom: calc(5% - 50px);
            left: -450px;
          }
        }

        /* ✅ Mobile */
        @media (max-width: 768px) {
          h1 {
            font-size: 32px !important;
          }
          p {
            font-size: 16px !important;
            margin-bottom: 40px !important;
          }
          .feature-card {
            position: relative !important;
            left: 0 !important;
            right: 0 !important;
            top: auto !important;
            bottom: auto !important;
            width: 90% !important;
            max-width: 400px;
          }
        }

        /* ✅ Small Mobile */
        @media (max-width: 480px) {
          h1 {
            font-size: 24px !important;
          }
          p {
            font-size: 14px !important;
          }
          .feature-card {
            font-size: 14px !important;
            padding: 6px 12px !important;
            gap: 6px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Game;

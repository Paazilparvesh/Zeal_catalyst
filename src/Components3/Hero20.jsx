import React from "react";
import image1 from "/src/assets/Subtract copy.png";

export default function Hero20() {
  return (
    <div className="container mt-5 position-relative">
      {/* Background Image */}
      <div
        className="position-relative"
        style={{ width: "100%", margin: "0 auto" }}
      >
        <img
          src={image1}
          alt="Landing"
          width={2600}
          height={400}
          className="img-fluid rounded"
          style={{ width: "100%", height: "auto" }}
          priority
        />

        {/* Top-left: Automated Learning Intelligence System */}
        <div
          className="position-absolute top-0 start-0 p-1 p-md-0"
          style={{ zIndex: 2 }}
        >
          <h1 className="heading-text p-0 p-md-1 p-lg-2 rounded">
            AUTOMATED LEARNING INTELLIGENCE <br />
            SYSTEM
          </h1>

          <style jsx>{`
            .heading-text {
              font-family: "Be Vietnam Pro", sans-serif;
              font-weight: 400;
              color: #191919;
              background-color: transparent;
              line-height: 1.2;
              font-size: clamp(20px, 4vw, 44px);
            }

            /* ✅ Mobile (already perfect) */
            @media (max-width: 576px) {
              .heading-text {
                font-size: clamp(10px, 3vw, 20px);
              }
            }

            /* ✅ Tablet (≥768px) */
            @media (min-width: 768px) and (max-width: 991px) {
              .heading-text {
                font-size: clamp(14px, 3.02vw, 32px);
              }
            }

            /* ✅ Laptop (≥992px) */
            @media (min-width: 992px) and (max-width: 1199px) {
              .heading-text {
                font-size: clamp(20px, 3.1vw, 36px);
              }
            }

            /* ✅ Desktop (≥1200px) */
            @media (min-width: 1200px) and (max-width: 1399px) {
              .heading-text {
                font-size: clamp(22px, 3.1vw, 40px);
              }
            }

            /* ✅ Large Desktop (≥1400px) */
            @media (min-width: 1400px) {
              .heading-text {
                font-size: clamp(24px, 3vw, 44px);
              }
            }
          `}</style>
        </div>

        {/* Bottom-left: Description */}
        <div
          className="position-absolute bottom-0 start-0 p-3 d-none d-md-block glass-card responsive-max"
          style={{ zIndex: 2 }}
        >
          <p className="text-white desc-text m-0">
            Combining automation, real-time analytics, and smart
            recommendations, it transforms knowledge into measurable business
            results.
          </p>

          <style jsx>{`
            .glass-card {
              background: rgba(255, 255, 255, 0.15);
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.2);
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
              max-width: 400px;

              /* ✅ Rounded top-right only */
              border-top-right-radius: 12px;
              border-top-left-radius: 0;
              border-bottom-right-radius: 0;
              border-bottom-left-radius: 0;
            }

            @media (min-width: 768px) {
              .glass-card {
                max-width: 500px;
              }
            }
            @media (min-width: 992px) {
              .glass-card {
                max-width: 600px;
              }
            }
            @media (min-width: 1200px) {
              .glass-card {
                max-width: 700px;
              }
            }
            @media (min-width: 1400px) {
              .glass-card {
                max-width: 800px;
              }
            }

            .desc-text {
              font-size: clamp(12px, 2.5vw, 16px);
              line-height: 1.4;
            }

            /* ✅ Tablet (≥768px) */
            @media (min-width: 768px) and (max-width: 991px) {
              .desc-text {
                font-size: clamp(13px, 2vw, 15px);
              }
            }

            /* ✅ Laptop (≥992px) */
            @media (min-width: 992px) and (max-width: 1199px) {
              .desc-text {
                font-size: clamp(18px, 1.8vw, 16px);
              }
            }

            /* ✅ Desktop (≥1200px) */
            @media (min-width: 1200px) and (max-width: 1399px) {
              .desc-text {
                font-size: clamp(20px, 1.5vw, 17px);
              }
            }

            /* ✅ Large Desktop (≥1400px) */
            @media (min-width: 1400px) {
              .desc-text {
                font-size: clamp(24px, 2.5vw, 18px);
              }
            }
          `}</style>

          <style jsx>{``}</style>
        </div>

        {/* Bottom-left: Artificial Intelligence */}
        <div
          className="position-absolute bottom-0 end-0 ps-0 text-end"
          style={{ zIndex: 2 }}
        >
          <h6 className="ai-text m-0 p-0 p-lg-1 rounded">
            ARTIFICIAL <br />
            INTELLIGENCE
          </h6>

          <style jsx>{`
            .ai-text {
              font-family: "Be Vietnam Pro", sans-serif;
              font-weight: 400;
              color: #191919;
              background-color: transparent;
              font-size: clamp(18px, 3.5vw, 38px);
            }

            /* ✅ Mobile (already perfect, don’t touch) */
            @media (max-width: 576px) {
              .ai-text {
                font-size: clamp(9px, 3vw, 20px);
                line-height: 1.2;
              }
            }

            /* ✅ Tablet (≥768px) */
            @media (min-width: 768px) and (max-width: 991px) {
              .ai-text {
                font-size: clamp(16px, 2.9vw, 28px);
              }
            }

            /* ✅ Laptop (≥992px) */
            @media (min-width: 992px) and (max-width: 1199px) {
              .ai-text {
                font-size: clamp(18px, 2.7vw, 32px);
              }
            }

            /* ✅ Desktop (≥1200px) */
            @media (min-width: 1200px) and (max-width: 1399px) {
              .ai-text {
                font-size: clamp(20px, 3vw, 32px);
              }
            }

            /* ✅ Large Desktop (≥1400px) */
            @media (min-width: 1400px) {
              .ai-text {
                font-size: clamp(24px, 3.2vw, 38px);
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import image1 from "/src/assets/lap.png";
import image2 from "/src/assets/health.png";
import image3 from "/src/assets/teach.png";
import image4 from "/src/assets/coin.png";

function Smart() {
  return (
    <div className="container my-5">
      {/* Heading */}
      <div className="text-center mb-5 px-3">
        <h1
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(28px, 4vw, 42px)", // ✅ scales with screen
            lineHeight: 1.3,
            marginBottom: "0.5em",
          }}
        >
          Smart Capabilities{" "}
          <span
            style={{
              fontWeight: 400,
            }}
          >
            That Drive <br /> Learning Success
          </span>
        </h1>
      </div>

      <style jsx>{`
  @media (min-width: 768px) {
    .first-card {
      height: 280px !important;
    }
    .third-card {
      height: 385px !important;
      margin-top: -80px !important; /* only for desktop bento look */
    }
    .second-card {
      height: 370px !important;
    
    .fourth-card {
      height: 150px !important;
    }

    .feature-title {
      font-size: 24px !important;
    }

    .feature-desc {
      font-size: 15px !important;
    }
  }

  @media (min-width: 1024px) {
    .feature-title {
      font-size: 36px !important;
    }
    .2nd-feature-title {
      font-size: 16px !important;
      }
      .feature-desc {
      font-size: 18px !important;
      }
  }

  @media (min-width: 1440px) {
    .feature-title { 
      font-size: 38px !important;
    }
    .feature-desc {
      font-size: 20px !important; 
    }
  }
`}</style>

      {/* Grid Layout */}
      <div className="row g-4 feature-box">
        {/* First Box */}
        <div className="col-12 col-md-6 order-1 ">
          <div
            className="position-relative overflow-hidden rounded first-card"
            style={{ height: "300px" }}
          >
            <img
              src={image1}
              alt="Adaptive Learning"
              fill
              style={{ objectFit: "fit" }}
              priority
            />
            <h2
              className="position-absolute top-0 start-0 text-white p-3 fw-bold feature-title"
              style={{
                textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
                fontSize: "28px",
              }}
            >
              Adaptive Learning Paths
            </h2>
            <div
              className="position-absolute bottom-0 start-50 translate-middle-x text-center text-white p-4 rounded mb-4 feature-desc"
              style={{
                background: "hsla(0, 0%, 0%, 0.15)",
                backdropFilter: "blur(10px)",
                width: "90%",
                fontSize: "14px",
              }}
            >
              No more one-size-fits-all. Our AI dynamically tailors content to
              each learner’s strengths, weaknesses, and pace — ensuring optimal
              engagement and knowledge retention.
            </div>
          </div>
        </div>

        {/* Second Box */}
        <div className="col-12 col-md-6 order-2 ">
          <div
            className="position-relative overflow-hidden rounded second-card"
            style={{ height: "300px" }}
          >
            <img
              src={image2}
              alt="Performance Insights"
              fill
              style={{ objectFit: "fit" }}
              priority
            />
            <h1
              className="position-absolute top-0 start-0 text-white p-3 fw-bold "
              style={{
                textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
              }}
            >
              Real-Time Performance Insights
            </h1>
            <div
              className="position-absolute bottom-0 start-50 translate-middle-x text-center text-white p-4 mb-4 rounded "
              style={{
                background: "hsla(0, 0%, 0%, 0.15)",
                backdropFilter: "blur(10px)",
                width: "90%",
              }}
            >
              Leadership teams can access live dashboards that track learning
              progress, skill gaps, and ROI, enabling data-backed
              decision-making.
            </div>
          </div>
        </div>

        {/* Third Box */}
        <div className="col-12 col-md-6 order-3 order-md-3 ">
          <div
            className="position-relative overflow-hidden rounded third-card"
            style={{ height: "300px" }}
          >
            <img
              src={image3}
              alt="Integration Scalability"
              fill
              style={{ objectFit: "fit" }}
              priority
            />
            <h2
              className="position-absolute top-0 start-0 text-white p-3 fw-bold feature-title"
              style={{
                textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
                fontSize: "28px",
              }}
            >
              Seamless Integration & Scalability
            </h2>
            <div
              className="position-absolute bottom-0 start-50 translate-middle-x text-center text-white p-4 mb-4 rounded feature-desc"
              style={{
                background: "hsla(0, 0%, 0%, 0.15)",
                backdropFilter: "blur(10px)",
                width: "90%",
                fontSize: "14px",
              }}
            >
              Leadership teams can access live dashboards that track learning
              progress, skill gaps, and ROI, enabling data-backed
              decision-making.
            </div>
          </div>
        </div>

        {/* Fourth Box with overlap */}
        <div className="col-12 col-md-6 order-4 order-md-4 fourth-card">
          <div
            className="position-relative overflow-hidden rounded "
            style={{
              height: "300px",
            }}
          >
            <img
              src={image4}
              alt="Gamification"
              fill
              style={{ objectFit: "fit" }}
              priority
            />
            <h2
              className="position-absolute top-0 start-0 text-white p-3 fw-bold feature-title"
              style={{
                textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
                fontSize: "28px",
              }}
            >
              Gamification & Engagement Tools
            </h2>
            <div
              className="position-absolute bottom-0 start-50 translate-middle-x text-center text-white p-4 mb-4 rounded feature-desc"
              style={{
                background: "hsla(0, 0%, 0%, 0.15)",
                backdropFilter: "blur(10px)",
                width: "90%",
                fontSize: "14px",
              }}
            >
              Boost motivation through badges, leaderboards, and interactive
              challenges that make learning rewarding and fun.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Smart;

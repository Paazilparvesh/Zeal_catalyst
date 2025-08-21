import React from "react";
import man from "/src/assets/man.png"
function Choose() {
  return (
    <div style={{ height: 100 }}>
      {" "}
      {/* ✅ overall section height */}
      <div
        className="d-flex flex-column align-items-center"
        style={{
          backgroundImage: ,
          backgroundSize: "fit",
          backgroundPosition: "center",
          height: "820px", // ✅ image background height
          position: "relative",
          padding: "40px 20px",
        }}
      >
        {/* Title */}
        {/* <h1
          className="fw-bold text-white text-center"
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: "38px",
            marginBottom: "auto", // push content down
          }}
        >
          WHY BUSINESSES CHOOSE US
        </h1> */}

        {/* Boxes at bottom */}
        <div
          className="row justify-content-center g-4 w-100"
          style={{
            maxWidth: 1200,
            marginTop: "auto", // pushes to bottom
            paddingBottom: "30px",
          }}
        >
          {/* Box 1 */}
          <div className="col-md-4" style={{ marginBottom: "40px" }}>
            <div
              className="h-100 d-flex flex-column justify-content-center"
              style={{
                backgroundColor: "rgba(0,0,0,0.55)",
                border: "1px solid #fff",
                borderRadius: 12,
                padding: 24,
                textAlign: "center",
                height: 189,
                width: 338,
                margin: "0 auto",
              }}
            >
              <h2
                className="fw-semibold mb-2 text-white"
                style={{
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: 26,
                }}
              >
                Proven AI Expertise
              </h2>
              <p
                className="text-light"
                style={{
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: 18,
                  color: "#d1d1d1",
                  marginBottom: 0,
                }}
              >
                A team of innovators with decades of experience in AI and
                learning technologies.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="col-md-4" style={{ marginBottom: "40px" }}>
            <div
              className="h-100 d-flex flex-column justify-content-center"
              style={{
                backgroundColor: "rgba(0,0,0,0.55)",
                border: "1px solid #fff",
                borderRadius: 12,
                padding: 24,
                textAlign: "center",
                height: 189,
                width: 338,
                margin: "0 auto",
              }}
            >
              <h2
                className="fw-semibold mb-2 text-white"
                style={{
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: 26,
                }}
              >
                Dedicated Partnership
              </h2>
              <p
                className="text-light"
                style={{
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: 18,
                  color: "#d1d1d1",
                  marginBottom: 0,
                }}
              >
                Every implementation reflects your brand identity, culture, and
                business objectives.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="col-md-4" style={{ marginBottom: "40px" }}>
            <div
              className="h-100 d-flex flex-column justify-content-center"
              style={{
                backgroundColor: "rgba(0,0,0,0.55)",
                border: "1px solid #fff",
                borderRadius: 12,
                padding: 24,
                textAlign: "center",
                height: 189,
                width: 338,
                margin: "0 auto",
              }}
            >
              <h2
                className="fw-semibold mb-2 text-white"
                style={{
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: 26,
                }}
              >
                Future-Proof Design
              </h2>
              <p
                className="text-light"
                style={{
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: 18,
                  color: "#d1d1d1",
                  marginBottom: 0,
                }}
              >
                Built to evolve with emerging technologies and market shifts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;

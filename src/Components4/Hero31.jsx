import cir from "/src/assets/second/cir.png";   // adjust path as per your project
import get from "/src/assets/second/get.png";   // adjust path as per your project

function Service() {
  return (
    <>
      {/* Title Section */}
      <div
        style={{
          fontFamily: "'Be Vietnam Pro', sans-serif",
          textAlign: "center",
          padding: "25px",
        }}
      >
        <h1
          style={{
            fontWeight: "700",
            fontSize: "40px",
            color: "#B3B3B3",
            margin: "10px 0",
            textTransform: "uppercase",
          }}
        >
          Our Services
        </h1>
        <h2
          style={{
            fontWeight: "600",
            fontSize: "44px",
            color: "#5B61EB",
            margin: "10px 0",
          }}
        >
          Adult Counseling
        </h2>
        <h3
          style={{
            fontWeight: "400",
            fontSize: "16px",
            color: "#6D6C80",
            lineHeight: "1.6",
            margin: "10px 0",
          }}
        >
          Life&apos;s complexities can sometimes feel overwhelming. Our adult <br />
          counseling services are tailored to address:
        </h3>
      </div>

      {/* Services Layout */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "80px",
          marginTop: "48px",
          fontFamily: "'Be Vietnam Pro', sans-serif",
        }}
      >
        {/* Left Side (2 services) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          {/* Service 1 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "412px",
              height: "94px",
            }}
          >
            <img
              src={cir}
              alt="Circle"
              width={64}
              height={64}
              style={{ marginRight: "20px" }}
            />
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "6px",
                  color: "#232323",
                }}
              >
                Personal Growth
              </h1>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#6D6C80",
                  margin: 0,
                }}
              >
                Strategies for self-discovery, confidence building, and goal
                setting
              </h2>
            </div>
          </div>

          {/* Service 2 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "412px",
              height: "94px",
            }}
          >
            <img
              src={cir}
              alt="Circle"
              width={64}
              height={64}
              style={{ marginRight: "20px" }}
            />
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "6px",
                  color: "#232323",
                }}
              >
                Relationship Challenges
              </h1>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#6D6C80",
                  margin: 0,
                }}
              >
                Support in navigating romantic or familial relationships.
              </h2>
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div>
          <img
            src={get}
            alt="Counseling Grid"
            width={414}
            height={400}
          />
        </div>

        {/* Right Side (2 services) */}
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          {/* Service 3 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "412px",
              height: "94px",
            }}
          >
            <img
              src={cir}
              alt="Circle"
              width={64}
              height={64}
              style={{ marginRight: "20px" }}
            />
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "6px",
                  color: "#232323",
                }}
              >
                Stress & Anxiety Management
              </h1>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#6D6C80",
                  margin: 0,
                }}
              >
                Techniques to manage daily stressors and anxiety.
              </h2>
            </div>
          </div>

          {/* Service 4 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "412px",
              height: "94px",
            }}
          >
            <img
              src={cir}
              alt="Circle"
              width={64}
              height={64}
              style={{ marginRight: "20px" }}
            />
            <div>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "6px",
                  color: "#232323",
                }}
              >
                Career Transitions
              </h1>
              <h2
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#6D6C80",
                  margin: 0,
                }}
              >
                Guidance through job changes, career growth, or retirement
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;

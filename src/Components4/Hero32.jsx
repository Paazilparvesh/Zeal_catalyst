import back from "/src/assets/second/back.png"; // adjust path correctly
import one from "/src/assets/second/one.png"; // adjust path correctly
import two from "/src/assets/second/two.png"; // adjust path correctly
import three from "/src/assets/second/three.png"; // adjust path correctly
import four from "/src/assets/second/four.png"; // adjust path correctly

function Familiy() {
  return (
    <div
      style={{
        backgroundColor: "#F9F9FB",
        backgroundImage: `url(${back})`, // ✅ imported background image
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "60px 20px",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontFamily: "'Be Vietnam Pro', sans-serif",
          fontSize: "44px",
          fontWeight: "400",
          color: "#5B61EB",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Family Counseling
      </h1>

      {/* Subheading */}
      <h2
        style={{
          fontFamily: "'Be Vietnam Pro', sans-serif",
          fontSize: "16px",
          fontWeight: "400",
          color: "#6D6C80",
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        Strong families are the foundation of a healthy community. <br />
        Our family counseling services focus on
      </h2>

      {/* Grid Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "40px",
          maxWidth: "1000px",
          width: "100%",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            marginRight: "20px",
            marginBottom: "20px",
            marginLeft: "170px",
          }}
        >
          <img
            src={two}
            alt="Conflict Resolution"
            width={296}
            height={296}
            style={{ borderRadius: "20px" }}
          />
          <h2
            style={{
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "28px",
              fontWeight: "500",
              color: "#000",
              marginTop: "20px",
            }}
          >
            Conflict Resolution
          </h2>
          <h3
            style={{
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "16px",
              fontWeight: "400",
              color: "#6D6C80",
              marginTop: "10px",
            }}
          >
            Tools to improve family dialogue and understanding
          </h3>
        </div>

        {/* Card 2 */}
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            marginRight: "220px",
            marginBottom: "20px",
            marginLeft: "20px",
          }}
        >
          <img
            src={three}
            alt="Career Transitions"
            width={296}
            height={296}
            style={{ borderRadius: "20px" }}
          />
          <h2
            style={{
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "28px",
              fontWeight: "500",
              color: "#000",
              marginTop: "20px",
            }}
          >
            Career Transitions
          </h2>
          <h3
            style={{
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "16px",
              fontWeight: "400",
              color: "#6D6C80",
              marginTop: "10px",
            }}
          >
            Guidance through job changes, career growth, or retirement
          </h3>
        </div>

        {/* Card 3 */}
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            marginRight: "180px",
            paddingBottom: "90px",
            marginLeft: "0px",
          }}
        >
          <img
            src={one}
            alt="Parenting Support"
            width={296}
            height={296}
            style={{ borderRadius: "20px" }}
          />
          <h2
            style={{
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "28px",
              fontWeight: "500",
              color: "#000",
              marginTop: "20px",
            }}
          >
            Parenting Support
          </h2>
          <h3
            style={{
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "16px",
              fontWeight: "400",
              color: "#6D6C80",
              marginTop: "10px",
            }}
          >
            Guidance on effective parenting techniques and challenges
          </h3>
        </div>

        {/* Card 4 */}
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            marginRight: "70px",
            marginBottom: "20px",
            marginLeft: "220px",
          }}
        >
          <img
            src={four}
            alt="Communication Enhancement"
            width={296}
            height={296}
            style={{ borderRadius: "20px" }}
          />
          <h2
            style={{
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "28px",
              fontWeight: "500",
              color: "#000",
              marginTop: "20px",
            }}
          >
            Communication Enhancement
          </h2>
          <h3
            style={{
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: "16px",
              fontWeight: "400",
              color: "#6D6C80",
              marginTop: "10px",
            }}
          >
            Tools to improve family dialogue and understanding
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Familiy;

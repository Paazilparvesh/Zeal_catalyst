import hit from "/src/assets/second/hit.png"; // adjust the path correctly based on your folder

function Tranform() {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "1265px",
          height: "576px",
          margin: "40px auto",
          borderRadius: "25px",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <img
          src={hit}
          alt="Counseling Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Left Text Box (transparent background) */}
        <div
          style={{
            position: "absolute",
            bottom: "1px",
            left: "40px", // shifted right
            padding: "90px 30px 20px 30px",
          }}
        >
          <h1
            style={{
              fontSize: "40px", // ⬅️ updated size
              fontWeight: "400", // regular weight
              margin: 0,
              color: "#191919", // ⬅️ updated color
              fontFamily: "'Be Vietnam Pro', sans-serif", // ⬅️ updated font
              textTransform: "uppercase",
            }}
          >
            TRANSFORM YOUR LIFE WITH <br />
            PERSONALIZED COGNITIVE <br />
            COUNSELING
          </h1>
        </div>

        {/* Right Quote */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            maxWidth: "400px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              fontWeight: "400",
              color: "#fff",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            "Empower your mind with <br />
            customized counseling services for <br />
            individuals, families, and adults."
          </p>
        </div>
      </div>
    </>
  );
}

export default Tranform;

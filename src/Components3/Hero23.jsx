import React from "react";
import image1 from "/src/assets/ioc.png";
import image2 from "/src/assets/glo.jpg";

function Proven() {
  return (
    <>
      {/* Wrapper with background */}
      <div
        style={{
          position: "relative",
          height: "940px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          backgroundImage: `url(${image2})`, // your circle bg
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Heading */}
        <h1
          style={{
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: "38px",
            fontWeight: "600",
            lineHeight: 1.2,
            marginTop: "40px",
          }}
        >
          Proven Impact That Matters to Your Business
        </h1>

        {/* Center Icon (middle logo/icon) */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80px",
            height: "80px",
            borderRadius: "20px",
            backgroundColor: "#635bff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        >
          <img
            src={image1}
            alt="Center Icon"
            style={{
              width: "80px",
              height: "80px",
              marginBottom: "10px", // added bottom margin
              transition: "all 0.3s ease-in-out",
              filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.6))",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.filter =
                "drop-shadow(0 0 20px rgba(255, 255, 255, 1))")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.filter =
                "drop-shadow(0 0 10px rgba(255, 255, 255, 0.6))")
            }
          />
        </div>

        {/* Stat Box - Top Left */}
        <div
          style={{
            position: "absolute",
            top: "25%",
            left: "12%",
            width: "260px",
            height: "110px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: "18px",
            fontWeight: "500",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            padding: "10px",
          }}
        >
          40% increase in learning retention
        </div>

        {/* Stat Box - Bottom Left */}
        <div
          style={{
            position: "absolute",
            bottom: "18%",
            left: "10%",
            width: "300px",
            height: "110px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: "18px",
            fontWeight: "500",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            padding: "10px",
          }}
        >
          Significant cost savings in training budgets
        </div>

        {/* Stat Box - Top Right */}
        <div
          style={{
            position: "absolute",
            top: "25%",
            right: "12%",
            width: "280px",
            height: "110px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: "18px",
            fontWeight: "500",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            padding: "10px",
          }}
        >
          25% improvement in project delivery speed
        </div>

        {/* Stat Box - Bottom Right */}
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "12%",
            width: "280px",
            height: "90px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            fontFamily: "'Be Vietnam Pro', sans-serif",
            fontSize: "18px",
            fontWeight: "500",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            padding: "10px",
          }}
        >
          Up to 30% faster onboarding
        </div>
      </div>
    </>
  );
}

export default Proven;

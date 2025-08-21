import React, { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import images from your src/assets folder
import whatBg from "/src/assets/second/what.png"; // Background PNG
import logoImg from "../assets/logo.png"; // Logo image

const reviews = [
  {
    name: "Nick Weimann",
    role: "District Directives Representative",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    rating: 5,
    logo: logoImg,
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Specialist",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, officia.",
    rating: 4,
    logo: logoImg,
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  const prev = () => setIndex((p) => (p - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((p) => (p + 1) % reviews.length);

  return (
    <section className="wrap">
      {/* Background PNG as a true background layer */}
      <div
        className="bg"
        style={{
          backgroundImage: `url(${whatBg})`,
        }}
      />

      {/* Vertical side label (left) */}
      <div className="sideLabel">WHAT THEY SAY ABOUT US?</div>

      {/* Review Card (center) */}
      <div className="card" role="region" aria-label="testimonial">
        <div className="top">
          <div className="tag">
            <span className="dot">i</span>
            <span>Testimonial</span>
          </div>

          <h3 className="name">{review.name}</h3>
          <p className="role">{review.role}</p>
          <p className="text">{review.text}</p>
        </div>

        <div className="stars" aria-label={`${review.rating} star rating`}>
          {Array.from({ length: review.rating }).map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        {/* Logo box (bottom-right inside the card) */}
        <div className="logoBox">
          <img
            src={review.logo}
            alt="Company Logo"
            width={24}
            height={24}
            style={{ borderRadius: "50%" }}
          />
        </div>
      </div>

      {/* Pagination (bottom-left) */}
      <div className="pagination">
        <button type="button" onClick={prev} aria-label="Previous">
          <FaChevronLeft />
        </button>
        <button type="button" onClick={next} aria-label="Next">
          <FaChevronRight />
        </button>
      </div>

      <style jsx>{`
        .wrap {
          position: relative;
          width: 100%;
          height: 700px;
          margin-top: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          border-radius: 20px;
          z-index: 0;
        }

        .sideLabel {
          position: absolute;
          left: 24px;
          top: 50%;
          transform: translateY(-50%) rotate(180deg);
          writing-mode: vertical-rl;
          color: #ffffff;
          font-weight: 800;
          letter-spacing: 0.08em;
          font-size: 16px;
          z-index: 1;
          user-select: none;
          text-transform: uppercase;
        }

        .card {
          position: relative;
          z-index: 2;
          width: 460px;
          height: 169px;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.15);
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .top {
          width: 100%;
        }

        .tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #5b61f5;
          font-weight: 600;
          font-size: 13px;
        }

        .dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #5b61f5;
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          line-height: 1;
        }

        .name {
          margin: 6px 0 0 0;
          font-size: 18px;
          font-weight: 800;
          color: #0f172a;
        }

        .role {
          margin: 2px 0 0 0;
          font-size: 12px;
          color: #6b7280;
        }

        .text {
          margin: 8px auto 0 auto;
          font-size: 13px;
          line-height: 1.35;
          color: #374151;
          max-width: 92%;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }

        .stars {
          margin-top: 6px;
          display: flex;
          gap: 4px;
          color: #5b61f5;
          font-size: 16px;
          justify-content: center;
        }

        .logoBox {
          position: absolute;
          right: 12px;
          bottom: 12px;
          width: 44px;
          height: 44px;
          background: #ffffff;
          border: 1px solid #5b61f5;
          border-radius: 12px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pagination {
          position: absolute;
          left: 290px;
          bottom: 230px;
          display: flex;
          gap: 12px;
          z-index: 2;
        }
        .pagination button {
          width: 48px;
          height: 48px;
          border: none;
          border-radius: 999px;
          background: #ffffff;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.12s ease, box-shadow 0.12s ease;
        }
        .pagination button svg {
          width: 20px;
          height: 20px;
          color: #5b61f5;
        }
        .pagination button:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);
        }

        @media (max-width: 520px) {
          .wrap {
            height: 520px;
            margin-top: 60px;
          }
          .card {
            transform: scale(0.95);
          }
          .sideLabel {
            left: 12px;
            font-size: 14px;
          }
          .pagination {
            left: 12px;
            bottom: 14px;
          }
        }
      `}</style>
    </section>
  );
}

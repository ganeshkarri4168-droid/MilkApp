import React from "react";
// import { useNavigate } from "react-router-dom";

const Home1 = () => {
 // ✅ correct place

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
        lineHeight: "1.8",
      }}
    >
      {/* Hero Section */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "48px", color: "#0d95fdff" }}>
          Welcome to Milk App
        </h1>

        <p style={{ fontSize: "20px", marginTop: "20px", color: "#333" }}>
          A simple and smart way to manage your daily milk delivery service.
          Track milk, delivery schedule, payments and more — all in one place.
        </p>

        {/* ✅ Button Navigation */}
        <button
          onClick={() => {
            const element = document.getElementById("services");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          style={{
            marginTop: "40px",
            backgroundColor: "#0d95fdff",
            color: "white",
            border: "none",
            padding: "20px 40px",
            borderRadius: "40px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Explore the Milk App
        </button>
      </div>

      {/* Extra Content Sections */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#0d95fd", marginBottom: "15px" }}>About Our Milk</h2>
        <p>
          We provide pure, fresh milk directly from the farm to your home. Our
          milk is 100% natural and delivered with care.
        </p>
      </div>

      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#0d95fd", marginBottom: "15px" }}>Our Services</h2>
        <p>
          Daily delivery, subscription plans, order tracking, and payment
          management — everything at your fingertips.
        </p>
      </div>

      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#0d95fd", marginBottom: "15px" }}>Why Choose Us?</h2>
        <p>
          Fresh milk, reliable delivery, hygienic packaging, and farm-to-home
          freshness every day.
        </p>
      </div>
    </div>
  );
};

export default Home1;

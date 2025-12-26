import React from "react";

export default function Pricing() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#0d95fd",
          fontSize: "42px",
          marginBottom: "40px",
        }}
      >
        Our Pricing
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Basic */}
        <div
          style={{
            flex: "1",
            minWidth: "260px",
            padding: "20px",
            borderRadius: "15px",
            border: "1px solid #ddd",
            textAlign: "center",
          }}
        >
          <h2>Basic Plan</h2>
          <h3 style={{ fontSize: "32px", color: "#0d95fd" }}>₹60/Litre</h3>
          <p>Pure cow milk delivered every morning.</p>
          <button
            style={{
              background: "#0d95fd",
              color: "white",
              border: "none",
              padding: "10px 25px",
              marginTop: "10px",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            Buy Now
          </button>
        </div>

        {/* Standard */}
        <div
          style={{
            flex: "1",
            minWidth: "260px",
            padding: "20px",
            borderRadius: "15px",
            border: "1px solid #ddd",
            textAlign: "center",
            backgroundColor: "#f2f8ff",
          }}
        >
          <h2>Standard Plan</h2>
          <h3 style={{ fontSize: "32px", color: "#0d95fd" }}>₹90/Litre</h3>
          <p>Premium farm-fresh milk with daily delivery.</p>
          <button
            style={{
              background: "#0d95fd",
              color: "white",
              border: "none",
              padding: "10px 25px",
              marginTop: "10px",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            Buy Now
          </button>
        </div>

        {/* Premium */}
        <div
          style={{
            flex: "1",
            minWidth: "260px",
            padding: "20px",
            borderRadius: "15px",
            border: "1px solid #ddd",
            textAlign: "center",
          }}
        >
          <h2>Premium Plan</h2>
          <h3 style={{ fontSize: "32px", color: "#0d95fd" }}>₹100/Litre</h3>
          <p>Organic, chemical-free, farm-direct milk.</p>
          <button
            style={{
              background: "#0d95fd",
              color: "white",
              border: "none",
              padding: "10px 25px",
              marginTop: "10px",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

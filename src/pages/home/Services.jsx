import React from "react";

export default function Services() {
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
        Our Services
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Service 1 */}
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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBP2JHABBATUDFvIjOdNouR4ZB6athMcFpOw&s"alt="" style={{ height: "70px" }} />
          <h2>Fresh Cow Milk</h2>
          <p>We provide daily pure cow milk delivered to your doorstep.</p>
        </div>

        {/* Service 2 */}
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
          <img src="/milk.png"alt="" style={{ height: "70px" }} />
          <h2>Daily Delivery</h2>
          <p>Milk is delivered every morning fresh from our farms.</p>
        </div>

        {/* Service 3 */}
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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqQEostXQL2KWT3RQ6bAsAWAMi5LUUIz-wg&s"alt="" style={{ height: "70px" }} />
          <h2>Organic Farm Milk</h2>
          <p>
            100% natural milk obtained from well-maintained healthy cows.
          </p>
        </div>
      </div>
    </div>
  );
}

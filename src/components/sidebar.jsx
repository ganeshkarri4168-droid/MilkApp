import React, { useState } from "react";

function Sidebar({ onSelect }) {
  const [hovered, setHovered] = useState(null);

  const itemStyle = {
    padding: "12px 15px",
    marginBottom: "10px",
    background: "#ffffff22",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s ease",
  };

  const hoverStyle = {
    background: "#ffd6e8",
    color: "#1915ebff",
  };

  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#1915ebff",
        color: "white",
        padding: "10px",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      {/* Dashboard */}
      <div
        style={{
          ...itemStyle,
          ...(hovered === "dashboard" ? hoverStyle : {}),
        }}
        onMouseEnter={() => setHovered("dashboard")}
        onMouseLeave={() => setHovered(null)}
        onClick={() => onSelect("Dashboard")}
      >
        Dashboard
      </div>

      {/* Customer */}
      <div
        style={{
          ...itemStyle,
          ...(hovered === "customer" ? hoverStyle : {}),
        }}
        onMouseEnter={() => setHovered("customer")}
        onMouseLeave={() => setHovered(null)}
        onClick={() => onSelect("Customer")}
      >
        Customer
      </div>
    </div>
  );
}

export default Sidebar;

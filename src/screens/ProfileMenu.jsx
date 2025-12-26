import React, { useState, useEffect } from "react";

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeMenu = () => setOpen(false);
    window.addEventListener("click", closeMenu);

    return () => window.removeEventListener("click", closeMenu);
  }, []);

  return (
    <div
      style={{ position: "relative" }}
      onClick={(e) => e.stopPropagation()} // 🔴 VERY IMPORTANT
    >
      {/* Profile Icon */}
      <img
        src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
        alt="profile"
        width="40"
        style={{ cursor: "pointer", borderRadius: "50%" }}
        onClick={() => setOpen(!open)}
      />

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "50px",
            width: "160px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            borderRadius: "8px",
            overflow: "hidden",
            zIndex: 1000,
          }}
        >
          <div style={{ ...itemStyle, color: "black" }}>My Profile</div>
          <div style={{ ...itemStyle, color: "black" }}>Logout</div>
        </div>
      )}
    </div>
  );
};

const itemStyle = {
  padding: "10px",
  cursor: "pointer",
  borderBottom: "1px solid #eee",
};

export default ProfileMenu;

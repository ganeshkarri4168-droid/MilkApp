import React, { useState } from "react";
import Sidebar from "../../components/sidebar";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [selected, setSelected] = useState("Dashboard");
  const navigate = useNavigate(); // ✅ CORRECT PLACE

  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#F8FAFC" }}>
      {/* Sidebar */}
      <Sidebar onSelect={setSelected} />

      {/* Main Layout */}
      <div
        style={{
          marginLeft: "230px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <Header />

        {/* Centered Main Content */}
        <main
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "20px",
              width: "100%",
              maxWidth: "900px",
              justifyContent: "flex-end",
            }}
          >
            {/* Content Card */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "40px",
                borderRadius: "12px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                textAlign: "center",
                flex: 1,
              }}
            >
              <h1>Welcome to Milk App 🥛</h1>
              <h2>{selected}</h2>

              {selected === "Dashboard" && (
                <p>Manage your milk deliveries, customers, and reports easily.</p>
              )}
            </div>

            {/* Add Customer Button (RIGHT SIDE) */}
            <button
              onClick={() => navigate("/AddCustomerScreen")}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#0a57f1ff";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#0a57f1ff";
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "10px 16px",
                backgroundColor: "transparent",
                color: "#0a57f1ff",
                border: "2px solid #0a57f1ff",
                borderRadius: "15px",
                cursor: "pointer",
                fontWeight: "400",
                transition: "0.3s ease",
              }}
            >
              <span style={{ fontSize: "20px", fontWeight: "bold" }}>+</span>
              Add Customer
            </button>
          </div>
        </main>

        {/* Footer */}
        <Footer1 />
      </div>
    </div>
  );
}

export default Dashboard;

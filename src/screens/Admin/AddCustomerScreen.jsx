import React, { useState } from "react";
import Header from "../../components/Header";
import Footer1 from "../../components/Footer1";
import { useNavigate } from "react-router-dom";
// import AllCustomerScreen from "./AllCustomerScreen";
const AddCustomerScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    milkType: "",
    quantity: "",
    price: "",
    deliveryType: "",
    startDate: "",
    paymentType: "",
    status: "Active",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Customer Data:", formData);
    alert("Customer added successfully!");
    navigate("/AllCustomerScreen"); // Just use the path string
  };

  const inputStyle = {
    width: "30%",
    padding: "10px",
    borderRadius: "30px",
    border: "2px solid #ccc",
    boxSizing: "border-box",
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
     

      <main style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "flex-start", padding: "20px" }}>
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            maxWidth: "900px",
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          }}
        >
     <button
  type="button"
  onClick={() => navigate("/Admin/Dashboard")}
  style={{
    backgroundColor: "#eaf0ff",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
    color: "#0a57f1ff",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.3s ease",
  }}
  onMouseEnter={(e) => (e.target.style.backgroundColor = "#d6e2ff")}
  onMouseLeave={(e) => (e.target.style.backgroundColor = "#eaf0ff")}
>
  ←
</button>

          <h2 style={{ textAlign: "center", marginBottom: "25px", color: "#0a57f1ff" }}>Add Customer</h2>

          {/* Customer Info Section */}
          <h3 style={{ color: "#0a57f1ff", marginBottom: "10px" }}>Customer Info</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "15px" }}>
            <input name="name" placeholder="Customer Name" onChange={handleChange} required style={inputStyle} />
            <input name="mobile" placeholder="Mobile Number" onChange={handleChange} required style={inputStyle} />
            <input name="email" placeholder="Email (optional)" onChange={handleChange} style={inputStyle} />
          </div>
          <textarea name="address" placeholder="Address" rows={3} onChange={handleChange} style={{ ...inputStyle, width: "100%" }} />

          {/* Milk Details Section */}
          <h3 style={{ color: "#0a57f1ff", margin: "20px 0 10px 0" }}>Milk Details</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "15px" }}>
            <select name="milkType" onChange={handleChange} required style={inputStyle}>
              <option value="">Select Milk Type</option>
              <option>Cow Milk</option>
              <option>Buffalo Milk</option>
              <option>Mixed</option>
            </select>
            <select name="quantity" onChange={handleChange} required style={inputStyle}>
              <option value="">Select Quantity</option>
              <option value="0.5">0.5</option>
              <option value="1">1</option>
              <option value="1.5">1.5</option>
              <option value="2">2</option>
            </select>


            <input name="price" placeholder="Price per Liter" onChange={handleChange} style={inputStyle} />
          </div>

          {/* Subscription Section */}
          <h3 style={{ color: "#0a57f1ff", margin: "20px 0 10px 0" }}>Subscription</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "15px" }}>
            <select name="deliveryType" onChange={handleChange} style={inputStyle}>
              <option value="">Delivery Type</option>
              <option>Morning</option>
              <option>Evening</option>
              <option>Both</option>
            </select>
            <input type="date" name="startDate" onChange={handleChange} style={inputStyle} />
            <select name="paymentType" onChange={handleChange} style={inputStyle}>
              <option value="">Payment Type</option>
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>

          {/* Status */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "15px" }}>
            <select name="status" onChange={handleChange} style={inputStyle}>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          {/* Submit Button */}
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "20px" }}>
            {/* Save Customer Button */}
            <button
              type="submit"
              style={{
                width: "15%",
                padding: "14px",
                backgroundColor: "#0a57f1ff",
                color: "white",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                transition: "0.3s ease",
                textAlign: "center",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#0947b3ff")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#0a57f1ff")}
            >
              Save Customer
            </button>

            {/* Cancel Button */}
            <button
              type="button"
              style={{
                width: "15%",
                padding: "14px",
                backgroundColor: "#367cf4ff", // red color
                color: "white",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                transition: "0.3s ease",
                textAlign: "center",
              }}
              onClick={() => navigate("/Admin/Dashboard")} // navigate to Dashboard
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#1e57c1ff")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#3643f4ff")}
            >
              Cancel
            </button>
          </div>

        </form>
      </main>

      <Footer1 />
    </div>
  );
};

export default AddCustomerScreen;

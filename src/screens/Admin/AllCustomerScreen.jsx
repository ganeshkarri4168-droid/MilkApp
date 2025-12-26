import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer1 from "../../components/Footer1";
import { useNavigate } from "react-router-dom";


const AllCustomerScreen = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("customers")) || [];
    setCustomers(data);
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
    <div style={{ padding: "20px",minHeight:"60vh" }}>
      <button
  type="button"
  onClick={() => navigate("/AddCustomerScreen")}
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

      <h2>All Customers</h2>

     <table style={{ width: "100%", borderCollapse: "collapse" }}>
  <thead>
    <tr>
      <th style={{ border: "1px solid blue", padding: "10px" }}>Name</th>
      <th style={{ border: "1px solid blue", padding: "10px" }}>Mobile</th>
      <th style={{ border: "1px solid blue", padding: "10px" }}>Milk Type</th>
      <th style={{ border: "1px solid blue", padding: "10px" }}>Quantity</th>
      <th style={{ border: "1px solid blue", padding: "10px" }}>Actions</th>
    </tr>
  </thead>

  <tbody>
    {customers.map((cust, index) => (
      <tr key={index}>
        <td style={{ border: "1px solid blue", padding: "10px" }}>{cust.name}</td>
        <td style={{ border: "1px solid blue", padding: "10px" }}>{cust.mobile}</td>
        <td style={{ border: "1px solid blue", padding: "10px" }}>{cust.milkType}</td>
        <td style={{ border: "1px solid blue", padding: "10px" }}>{cust.quantity}</td>
        <td style={{ border: "1px solid blue", padding: "10px" }}>
          <button>Edit</button>
          <button style={{ marginLeft: "10px", color: "red" }}>Delete</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
      <Footer1 />
    </div>
  );
};

export default AllCustomerScreen;

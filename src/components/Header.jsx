import React from "react";
import ProfileMenu from "../screens/ProfileMenu";
const Header = () => {
  return (
    <header style={{ padding: "10px", background: "linear-gradient(90deg, #0c0cebff 0%, #0a57f1ff 50%, #367cf4ff 100%)"

, color: "white", textAlign: "center" }}>
      <h1>Milk App</h1>
      <div style={{ position: "absolute", top: "10px", right: "10px" }}>
        <ProfileMenu />
      </div>
    </header>
  );
}
export default Header;
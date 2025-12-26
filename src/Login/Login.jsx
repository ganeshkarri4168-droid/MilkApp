import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, Paper } from "@mui/material";
import background from "../assets/Background.jpg"; // remove extra spaces

function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const correctPhone = "9346671055";
  const correctPassword = "Ganesh123";

  const handleLogin = () => {
    if (phone === correctPhone && password === correctPassword) {
      navigate("/admin/dashboard");
    } else {
      alert("Invalid phone number or password!");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${background})`, // use correct image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: 2,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: { xs: "90%", sm: "400px" },
          padding: 4,
          borderRadius: "20px",
          textAlign: "center",
          background: "rgba(255,255,255,0.15)", // semi-transparent glass effect
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: "bold",
            color: "#fff",
            textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
          }}
        >
          Login
        </Typography>

        <TextField
          label="Phone Number"
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
          margin="normal"
          fullWidth
          sx={{
            mb: 5,
            "& .MuiOutlinedInput-root": {
              borderRadius: "32px",
              backgroundColor: "rgba(255,255,255,0.9)",
            },
          }}
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          margin="normal"
          fullWidth
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: "32px",
              backgroundColor: "rgba(255,255,255,0.9)",
            },
          }}
        />

        <Button
          onClick={handleLogin}
          sx={{
            width: "60%",
            mt: 1,
            py: 1.5,
            borderRadius: "32px",
            background: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)",
            color: "#fff",
            fontWeight: "bold",
            mx: "auto",
            display: "block",
            "&:hover": {
              background: "linear-gradient(90deg, #0072ff 0%, #00c6ff 100%)",
            },
          }}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
}

export default Login;

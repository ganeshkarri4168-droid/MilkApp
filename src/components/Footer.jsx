import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, IconButton, Divider } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  // Format time as HH:MM:SS
  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        py: 4,
        mt: 6,
        textAlign: "center",
        color: "#fff",
        position: "relative",
      }}
    >
      <Divider sx={{ borderColor: "rgba(255,255,255,0.3)", mb: 2 }} />

      <Stack direction="row" spacing={3} justifyContent="center" mb={2}>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/ganesh-karri-092124268"
          target="_blank"
          sx={{ color: "#0ac260ff" }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.youtube.com/@ganeshkarri3831"
          target="_blank"
          sx={{ color: "#FF0000" }}
        >
          <YouTubeIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://outlook.live.com/mail/0/?login_hint=ganeshkarri4168%40outlook.com"
          target="_blank"
          sx={{ color: "#14c92cff" }}
        >
          <MailOutlineIcon />
        </IconButton>
      </Stack>

      {/* Real-time clock */}
      <Typography variant="body1" sx={{ mb: 1, fontWeight: "bold" }}>
        Time Zone: {formatTime(currentTime)}
      </Typography>

      <Typography variant="body2" sx={{ opacity: 0.8 }}>
        © {new Date().getFullYear()} Ganesh Karri. All rights reserved.
      </Typography>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "#0d95fd",
          color: "white",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        ↑
      </button>
    </Box>
  );
};

export default Footer;

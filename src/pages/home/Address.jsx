import React, { useState } from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";

const Address = () => {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim() === "") return;

    const query = encodeURIComponent(search);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${query}`,
      "_blank"
    );
  };

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Address
      </Typography>

      {/* 🔍 Search Address Box */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // vertically center
          gap: 1.5, // smaller gap
          mt: 2,
          mb: 3,
        }}
      >
        <TextField
          label="Search"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            width: "160px",
            "& .MuiInputBase-input": {
              padding: "6px 8px",
              fontSize: "14px",
              alignItems: "center",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
            },
            "& .MuiInputLabel-root": {
              fontSize: "10px",
            },
          }}
        />

        <Button
          variant="contained"
          onClick={handleSearch}
          sx={{
            backgroundColor: "#0d95fd",
            padding: "3px 8px",
            fontSize: "13px",
            borderRadius: "18px",
            minWidth: "70px",
          }}
        >
          Search
        </Button>
      </Box>

      {/* 🗺️ Google Map Embed */}
      <div style={{ width: "100%", height: "400px", marginTop: "20px" }}>
        <iframe
          title="Milk App Location"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0, borderRadius: "12px" }} // optional rounded corners
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2728927220714!2d78.486671!3d17.385044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb975cf360c7c1%3A0xcee66a2e3ddc9c0!2sHyderabad%20City!5e0!3m2!1sen!2sin!4v1700000000000"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
};

export default Address;

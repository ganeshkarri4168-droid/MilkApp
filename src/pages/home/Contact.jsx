import React, { useState } from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Card,
  Divider,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setStatus("Please fill in all fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    const to = "ganeshkarri4168@gmail.com";
    const subject = "Contact Form - Inquiry";
    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      "",
      "Message:",
      formData.message,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    const mailtoLink = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${body}`;

    try {
      window.location.href = mailtoLink;
      setStatus("Mail client opened. Complete and send the email from your mail app.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("Unable to open mail client. Please mail manually to: " + to);
    }
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        minHeight: "100vh",
        py: { xs: 6, md: 10 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <Stack spacing={4}>
          {/* Contact Form Card */}
          <Card
            sx={{
              backdropFilter: "blur(15px)",
              background: "rgba(255,255,255,0.05)",
              borderRadius: 5,
              p: { xs: 3, md: 5 },
              boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
              color: "white",
            }}
          >
            <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
              Get in Touch
            </Typography>

            <Typography variant="body1" align="center" mb={4} sx={{ opacity: 0.85 }}>
              We'd love to hear from you! Fill out the form below.
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
              {/* Message Field */}
              

              {/* Row with Full Name, Email, Phone */}
              <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    variant="filled"
                    value={formData.name}
                    onChange={handleChange}
                    InputLabelProps={{ style: { color: "#ccc" } }}
                    InputProps={{
                      style: { color: "#fff", background: "rgba(255,255,255,0.1)", borderRadius: "10px" },
                    }}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    variant="filled"
                    value={formData.email}
                    onChange={handleChange}
                    InputLabelProps={{ style: { color: "#ccc" } }}
                    InputProps={{
                      style: { color: "#fff", background: "rgba(255,255,255,0.1)", borderRadius: "10px" },
                    }}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    variant="filled"
                    value={formData.phone}
                    onChange={handleChange}
                    InputLabelProps={{ style: { color: "#ccc" } }}
                    InputProps={{
                      style: { color: "#fff", background: "rgba(255,255,255,0.1)", borderRadius: "10px" },
                    }}
                    required
                  />
                </Grid>
                 <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Address"
                    name="Address"
                    variant="filled"
                    value={formData.Address}
                    onChange={handleChange}
                    InputLabelProps={{ style: { color: "#ccc" } }}
                    InputProps={{
                      style: { color: "#fff", background: "rgba(255,255,255,0.1)", borderRadius: "10px" },
                    }}
                    required
                  />
                </Grid>
                
                <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={6}
                variant="filled"
                value={formData.message}
                onChange={handleChange}
                InputLabelProps={{ style: { color: "#ccc" } }}
                InputProps={{
                  style: { color: "#fff", background: "rgba(255,255,255,0.1)", borderRadius: "30px" },
                }}
                required
                sx={{ mb: 3 }}
              />
              </Grid>

              {/* Submit Button */}
              <Stack direction="row" justifyContent="center" mt={4}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    px: 2.5,
                    py: 1.2,
                    borderRadius: "30px",
                    background: "linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)",
                    fontSize: "1.05rem",
                    fontWeight: "bold",
                    textTransform: "none",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #ff4b2b 0%, #ff416c 100%)",
                      transform: "scale(1.05)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Send Message
                </Button>
              </Stack>

              {status && (
                <Typography align="center" mt={3} color="#fff" fontWeight="bold">
                  {status}
                </Typography>
              )}
            </Box>
          </Card>

          {/* Contact Info Card */}
          <Card
            sx={{
              backdropFilter: "blur(15px)",
              background: "rgba(255,255,255,0.05)",
              borderRadius: 5,
              p: { xs: 3, md: 5 },
              boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
              color: "white",
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Contact Information
            </Typography>

            <Divider sx={{ borderColor: "rgba(255,255,255,0.2)", mb: 3 }} />

            <Stack spacing={3}>
              <Stack direction="row" spacing={2} alignItems="center">
                <LocationOnIcon fontSize="large" />
                <Typography>
                  Yellamanchilli, Rajala Village <br />
                  Visakhapatnam, Andhra Pradesh
                </Typography>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <PhoneIcon fontSize="large" />
                <Typography>+91 9346671055</Typography>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <EmailIcon fontSize="large" />
                <Typography>ganeshkarri4168@gmail.com</Typography>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <AccessTimeIcon fontSize="large" />
                <Typography>24/7 Service</Typography>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;

// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cors());
// Configure Nodemailer with your Gmail credentials
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "humphreyheather03@gmail.com", // Replace with your Gmail address
    pass: "rfkauqbjenvfrafx", // Replace with your Gmail password
  },
});

// POST route to handle sending emails
app.post("/mail", async (req, res) => {
  // Extract necessary information from the request body
  const { to, from, subject, text, html } = req.body;

  try {
    // Use Nodemailer to send the email
    const info = await transporter.sendMail({
      from: from,
      to: to,
      subject: subject,
      text: text,
      html: html,
    });
    console.log("Email sent: " + info.response);
    // Send a success response back to the client
    res.status(200).send("Email sent successfully");
  } catch (error) {
    // If there's an error, send an error response
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

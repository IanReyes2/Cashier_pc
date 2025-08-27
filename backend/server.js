// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Simple login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user || user.password !== password) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
    res.json({ success: true, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// Start server
app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});

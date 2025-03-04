const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000; // You can change this if needed

// Set the image folder
const IMAGE_FOLDER = path.join(__dirname, "public");

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Route for the splash screen
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "splash.html"));
});

// Route for the dashboard page
app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});

// Route for serving local images
app.get("/local-image/:filename", (req, res) => {
    res.sendFile(path.join(IMAGE_FOLDER, req.params.filename));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

let projects = [];
let contacts = [];

// Get projects
app.get("/api/projects", (req, res) => {
    res.json(projects);
});

// Add project
app.post("/api/projects", (req, res) => {
    const project = {
        id: Date.now(),
        title: req.body.title
    };

    projects.push(project);
    res.json(project);
});

// Contact form
app.post("/api/contact", (req, res) => {
    contacts.push(req.body);

    res.json({
        message: "Message sent successfully!"
    });
});

// Serve React frontend
app.use(express.static(path.join(__dirname, "public")));

app.listen(5004, () => {
    console.log("Server running on port 5004");
});

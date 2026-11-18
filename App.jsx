
import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

function App() {
    const [projects, setProjects] = useState([]);
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    // Get projects
    useEffect(() => {
        fetch("/api/projects")
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    // Add project
    function addProject(e) {
        e.preventDefault();

        fetch("/api/projects", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title })
        })
        .then(res => res.json())
        .then(data => {
            setProjects([...projects, data]);
            setTitle("");
        });
    }

    // Submit contact
    function contact(e) {
        e.preventDefault();

        fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, message })
        })
        .then(res => res.json())
        .then(data => alert(data.message));

        setName("");
        setMessage("");
    }

    return (
        <div style={{ textAlign: "center", fontFamily: "Arial" }}>
            <h1>Ananya Rao</h1>
            <p>Full Stack Developer</p>

            <hr />

            <h2>Project Gallery</h2>

            <form onSubmit={addProject}>
                <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Enter project name"
                    required
                />
                <button>Add Project</button>
            </form>

            {projects.map(p => (
                <p key={p.id}>{p.title}</p>
            ))}

            <hr />

            <h2>Contact Me</h2>

            <form onSubmit={contact}>
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Enter name"
                    required
                />
                <br /><br />

                <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Enter message"
                    required
                />
                <br /><br />

                <button>Send Message</button>
            </form>
        </div>
    );
}

createRoot(document.getElementById("root")).render(<App />);

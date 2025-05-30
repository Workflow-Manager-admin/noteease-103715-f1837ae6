import React, { useState, useEffect } from "react";
import "./MainContainer.css";

// PUBLIC_INTERFACE
function MainContainer() {
  // For theme toggle (light/dark); default is system preference
  const [darkMode, setDarkMode] = useState(
    () =>
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkMode);
    document.body.classList.toggle("light-theme", !darkMode);
  }, [darkMode]);

  // Placeholder notes for layout mockup
  const notes = [
    {
      id: 1,
      title: "Shopping List",
      content: "Milk, eggs, bread, butter...",
      category: "Personal",
    },
    {
      id: 2,
      title: "Tech Ideas",
      content: "Build a smart weather app using React...",
      category: "Work",
    },
    {
      id: 3,
      title: "Inspiration",
      content: "Be yourself; everyone else is already taken.",
      category: "Quotes",
    },
  ];

  // Search term (mock functionality)
  const [search, setSearch] = useState("");

  // Filtered notes (basic search)
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`noteease-main-container${darkMode ? " dark" : ""}`}>
      <header className="noteease-header">
        <h2 className="noteease-logo">NoteEase</h2>
        <button
          className="noteease-theme-toggle"
          aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
          onClick={() => setDarkMode((prev) => !prev)}
        >
          {darkMode ? "🌞" : "🌙"}
        </button>
      </header>

      <div className="noteease-search-bar-wrap">
        <input
          className="noteease-search-bar"
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search notes"
        />
      </div>

      <div className="noteease-notes-list">
        {filteredNotes.length === 0 && (
          <div className="noteease-empty-state">No notes found.</div>
        )}
        {filteredNotes.map((note) => (
          <div key={note.id} className="noteease-note-card">
            <div className="noteease-note-title">{note.title}</div>
            <div className="noteease-note-snippet">{note.content}</div>
            <span
              className="noteease-note-category"
              style={{
                background:
                  note.category === "Work"
                    ? "var(--primary)"
                    : note.category === "Personal"
                    ? "var(--accent)"
                    : "#ADECED",
                color: darkMode ? "#222" : "#fff",
              }}
            >
              {note.category}
            </span>
          </div>
        ))}
      </div>

      <button
        className="noteease-fab"
        aria-label="Add new note"
        title="Add new note"
        onClick={() => {
          // Handler for adding a new note — to be implemented with actual note logic
          alert("Add new note (not implemented)");
        }}
      >
        <span className="noteease-fab-icon">＋</span>
      </button>
    </div>
  );
}

export default MainContainer;

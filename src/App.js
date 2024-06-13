import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [notes, setNotes] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setNoteTitle(value);
    } else if (name === "content") {
      setNoteContent(value);
    }
  };

  const handleSubmitNote = (event) => {
    event.preventDefault();

    if (noteTitle.trim() !== "") {
      const newNote = {
        id: Date.now(),
        title: noteTitle,
        content: noteContent,
      };
      setNotes([...notes, newNote]);
      setNoteTitle("");
      setNoteContent("");
    } else {
      alert("Please enter a title for your note.");
    }
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="App">
      <h1>Notes</h1>
      <form className="form" onSubmit={handleSubmitNote}>
        <input
          type="text"
          name="title"
          value={noteTitle}
          placeholder="Title"
          onChange={handleInputChange}
        />
        <textarea
          name="content"
          value={noteContent}
          placeholder="Take a note..."
          onChange={handleInputChange}
        />
        <button type="submit">ADD</button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

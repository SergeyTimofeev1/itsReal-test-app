import React, { useState } from 'react';
import AddNoteButon from '../addButton/AddNoteButon';
import Note from '../note/Note';


const NoteList = () => {
  const [notes, setNotes] = useState([])

  const addNote = () => {
    const newNote = {
      text: 'Исчезнет через ',
    }
    setNotes([...notes, newNote])
  }

  return (
    <div className="notes">
      <AddNoteButon addNote={addNote} />
      <div className="notes-list">
        <ul className="notes-list__list">
          {notes.length !== 0
            ? notes.map((note, i) =>
              <Note
                id={i + 1}
                text={note.text}
                key={i + 1}
              />)
            : <h2>Добавьте заметку</h2>}
        </ul>
      </div>
    </div>
  );
}

export default NoteList;

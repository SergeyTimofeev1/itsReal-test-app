import React, { useState, useEffect } from 'react';
import AddNoteButon from '../addButton/AddNoteButon';
import Note from '../note/Note';


const NoteList = () => {
  const [notes, setNotes] = useState([])

  const addNote = () => {
    const newNote = {
      id: notes.length + 1,
      text: 'Исчезнет через ',
    }
    setNotes([...notes, newNote])
  }

  const removeNote = (note) => {
    setNotes(notes.filter(n => note.id !== n.id))
  }



  return (
    <div className="notes">
      <AddNoteButon addNote={addNote} />
      <div className="notes-list">
        <ul className="notes-list__list">
          {notes.length !== 0
            ? notes.map((note, i) =>
              <Note
                key={note.id}
                note={note}
                remove={removeNote}
                notes={notes}
              />)
            : <h2>Добавьте заметку</h2>
          }
        </ul>
      </div>
    </div>
  );
}

export default NoteList;

import React from 'react';
import Timer from '../timer/Timer';

const Note = ({ note, remove, notes, id }) => {

  return (
    <li className="notes-list__item">
      {id}. {note.text} <Timer note={note} remove={remove} notes={notes} />
    </li>
  );
}

export default Note;

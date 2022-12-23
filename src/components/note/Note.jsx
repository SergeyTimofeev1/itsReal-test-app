import React from 'react';
import Timer from '../timer/Timer';

const Note = ({ id, text }) => {
  return (
    <li className="notes-list__item">
      {id}. {text} <Timer />
    </li>
  );
}

export default Note;

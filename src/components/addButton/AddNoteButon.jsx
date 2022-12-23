import React from 'react';

const AddNoteButon = ({ addNote }) => {


  return (
    <button
      className="btn btn-outline-primary mb-2"
      onClick={addNote}
    >
      Добавить заметку
    </button>
  );
}

export default AddNoteButon;

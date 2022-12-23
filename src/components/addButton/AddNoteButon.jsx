import React from 'react';

const AddNoteButon = ({ addNote }) => {


  return (
    <button
      className="btn btn-outline-primary"
      onClick={addNote}
    >
      Добавить заметку
    </button>
  );
}

export default AddNoteButon;

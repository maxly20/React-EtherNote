import React from 'react';

const Note = ({ note }) => {
  return (
    <div className='singlenote'>
      <div className='singlenote__right'>
        <i className='fas fa-heart'></i>
        <i className='fas fa-trash-alt'></i>
      </div>
      <h5>{note.title}</h5>
      <p>{note.content}</p>
      <h6>2 days ago</h6>
      <div className="singlenote__right"><i className="fas fa-pen"></i></div>
    </div>
  );
};

export default Note;

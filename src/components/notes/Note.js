import { deleteNote } from '../../store/actions/noteAction';
import { useDispatch } from 'react-redux';

const Note = ({ note }) => {
  const dispatch = useDispatch();
  const deleteNoteHandler = () => {
    dispatch(deleteNote(note));
  };
  return (
    <div className='singlenote'>
      <div className='singlenote__right'>
        <i className='fas fa-heart'></i>
        <i
          className='fas fa-trash-alt delete-icon'
          onClick={deleteNoteHandler}
        ></i>
      </div>
      <h5>{note.title}</h5>
      <p>{note.content}</p>
      <h6>2 days ago</h6>
      <div className='singlenote__right'>
        <i className='fas fa-pen'></i>
      </div>
    </div>
  );
};

export default Note;

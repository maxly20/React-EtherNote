import { deleteNote, toggleFav } from '../../store/actions/noteAction';
import { useDispatch } from 'react-redux';
import moment from 'moment';

const Note = ({ note }) => {
  const dispatch = useDispatch();
  const deleteNoteHandler = () => {
    dispatch(deleteNote(note));
  };
  const toggleFavoriteHandler = () => {
    dispatch(toggleFav(note));
  };

  return (
    <div className='singlenote'>
      <div className='singlenote__right'>
        <i
          className={
            note.favorite ? 'fas fa-heart fullheart' : 'far fa-heart emptyheart'
          }
          onClick={toggleFavoriteHandler}
        ></i>
        <i
          className='fas fa-trash-alt delete-icon'
          onClick={deleteNoteHandler}
        ></i>
      </div>
      <h5>{note.title}</h5>
      <p>{note.content}</p>
      <h6>{moment(note.createdAt.toDate()).fromNow()}</h6>
      <div className='singlenote__right'>
        <i className='fas fa-pen'></i>
      </div>
    </div>
  );
};

export default Note;

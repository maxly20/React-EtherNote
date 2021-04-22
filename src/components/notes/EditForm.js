import useInput from '../../customhook/useInput';
import { updateNote } from '../../store/actions/noteAction';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const EditForm = props => {
  let history = useHistory();
  const dispatch = useDispatch();
  const note = useSelector(state => state.note);

  const [title, bindTitle, resetTitle] = useInput(note.title);
  const [content, bindContent, resetContent] = useInput(note.content);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('handle update');
    dispatch(updateNote({ id: note.id, title, content }));
    resetTitle();
    resetContent();
    history.push('/');
  };
  return (
    <div className='form-section'>
      <form onSubmit={handleSubmit} className='main-form'>
        <h5>New Note</h5>
        <div className='input-field'>
          <label htmlFor='note_title'>Note Title</label>
          <input type='text' id='note_title' {...bindTitle} />
        </div>
        <div className='input-field'>
          <label htmlFor='note_content'>Note Content</label>
          <textarea name='' id='note_content' {...bindContent}></textarea>
        </div>
        <button className='btn' onClick={handleSubmit}>
          Update
        </button>
      </form>
    </div>
  );
};

export default EditForm;

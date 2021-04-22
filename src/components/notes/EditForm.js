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
  return <div></div>;
};

export default EditForm;

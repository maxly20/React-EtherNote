import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import moment from 'moment';

const NoteDetail = props => {
  const id = props.match.params.id;
  useFirestoreConnect([{ collection: 'notes', doc: id }]);
  const note = useSelector(
    ({ firestore: { data } }) => data.notes && data.notes[id]
  );

  const noteMarkup = !isLoaded(note) ? (
    <div className='note__loading'>
      <h3>Loading...</h3>
    </div>
  ) : isEmpty(note) ? (
    <div className='note__loading'>
      <h3>There is no Note</h3>
    </div>
  ) : (
    <div className='detail__container'>
      <article className='detail__card'>
        <span className='card__title'>{note.title}</span>
        <p className='card__content'>{note?.content}</p>
        <div className='card__time'><p>{moment(note.createdAt.toDate()).calendar()}</p></div>
      </article>
    </div>
  );

  return noteMarkup;
};

export default NoteDetail;

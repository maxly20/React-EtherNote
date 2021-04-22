import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import moment from 'moment';

const NoteDetail = props => {
  const id = props.match.params.id;
  useFirestoreConnect([{ collection: 'notes', doc: id }]);
  const note = useSelector(
    ({ firestore: { data } }) => data.notes && data.notes[id]
  );
  return (
    <div className='detail__container'>
      <article className='card'>
        <div className='card__content'>
          <span className='card__title'>{note?.title}</span>
          <p className='card__note-content'>{note?.content}</p>
          <div>{moment(note?.createdAt.toDate()).calendar()}</div>
        </div>
      </article>
    </div>
  );
};

export default NoteDetail;

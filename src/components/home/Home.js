import Form from './Form';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import NotesList from '../notes/NotesList';

const Home = () => {
  useFirestoreConnect([
    { collection: 'notes', orderBy: ['createdAt', 'desc'] },
  ]);
  const notes = useSelector(state => state.firestore.ordered.notes);
  console.log(notes);
  return (
    <div className='container'>
      <div className='container__main'>
        <Form />
        <div className='list'>
          <NotesList notes={notes} />
        </div>
      </div>
    </div>
  );
};

export default Home;

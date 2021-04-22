export const addNote = note => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('notes')
      .add({
        ...note,
        favorite: false,
        createdAt: new Date(),
      })
      .then(() => {
        console.log('add the note sucessfully');
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const deleteNote = note => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('notes')
      .doc(note.id)
      .delete()
      .then(() => {
        console.log('delete the note sucessfully');
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const toggleFav = note => {
  return (dispatch, getState, { getFirestore }) => {
    const favstatus = !note.favorite;
    const firestore = getFirestore();
    firestore
      .collection('notes')
      .doc(note.id)
      .update({
        favorite: favstatus,
      })
      .then(() => {
        console.log('toggle favorite success');
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const updateNote = note => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    console.log('note in updatenote action', note);
    const firestore = getFirestore();
    firestore
      .collection('notes')
      .doc(note.id)
      .update({
        title: note.title,
        content: note.content,
      })
      .then(() => {
        console.log('update success');
      })
      .catch(error => {
        console.log(error);
      });
  };
};

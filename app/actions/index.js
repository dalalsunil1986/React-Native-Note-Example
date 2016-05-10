import uuid from 'uuid';

export var createNote = (id) => {
  return {
    type: 'CREATE_NOTE',
    id
  };
};

export var startCreateNote = () => {
  return (dispatch, getState) => {
    var id = uuid.v1();

    dispatch(createNote(id));

    return id;
  };
};

export var updateNote = (id, text) => {
  return {
    type: 'UPDATE_NOTE',
    id,
    text
  };
};

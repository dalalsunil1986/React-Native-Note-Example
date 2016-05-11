import moment from 'moment';

export var notesReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_NOTE':
      return [
        ...state, {
          id: action.id,
          createdAt: moment().unix(),
          text: ''
        }
      ];
    case 'DELETE_NOTE':
      console.log('******** AFTER DLETE', state.filter((note) => {
        return note.id !== action.id;
      }));
      return state.filter((note) => {
        return note.id !== action.id;
      });
    case 'UPDATE_NOTE':
      return state.map((note) => {
        if (note.id === action.id) {
          note.text = action.text
          console.log('updated note', note);
        }
        return note;
      });
    default:
      return state;
  }
};

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
      return state.filter((note) => {
        return note.id !== action.id;
      });
    case 'UPDATE_NOTE':
      return state.map((note) => {
        if (note.id === action.id) {
          console.log('******** found action', note.text, action.text);
          note.text = action.text
        }
        return note;
      });
    default:
      return state;
  }
};

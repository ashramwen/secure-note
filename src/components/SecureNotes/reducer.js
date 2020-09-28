const mockList = [
  { id: 1, title: 'My first note' },
  { id: 2, title: 'My second note' },
  { id: 3, title: 'My third note' },
];

export const initialState = {
  notes: [...mockList],
  selected: null,
  editMode: false,
};

export function secureNotesReducer(state, action) {
  switch (action.type) {
    // switch panel mode
    case 'switchMode': {
      return {
        ...state,
        editMode: action.payload,
      };
    }

    // select a note
    case 'selectNote': {
      return {
        ...state,
        selected: action.payload,
      };
    }

    case 'newNote': {
      return {
        ...state,
        selected: null,
        editMode: true,
      };
    }

    // save a new note
    case 'saveNewNote': {
      const id = (state.notes[state.notes.length - 1]?.id ?? 0) + 1;
      const nextState = {
        ...state,
        notes: [...state.notes, { id, title: action.payload }],
      };
      console.log(nextState);
      return nextState;
    }

    default:
      return state;
  }
}

import { mockData } from 'mockData';

export const initialState = {
  notes: [...mockData],
  selected: null,
  editMode: false,
  content: null,
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
        content: null,
      };
    }

    // decipher content
    case 'decipher': {
      return {
        ...state,
        content: action.payload,
      };
    }

    // create a new note
    case 'newNote': {
      return {
        ...state,
        selected: null,
        editMode: true,
      };
    }

    // save a note
    case 'saveNote': {
      const { selected, title, text } = action.payload;
      const id = selected
        ? selected.id
        : (state.notes[state.notes.length - 1]?.id ?? 0) + 1;

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

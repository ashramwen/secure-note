// import { mockData } from 'mockData';
import {
  SWITCH_MODE,
  SELECT_NOTE,
  DECIPHER,
  NEW_NOTE,
  SAVE_NEW_NOTE,
  UPDATE_NOTE,
  SWITCH_SPINNER,
} from './constant';

export const initialState = {
  // notes: [...mockData],
  notes: [],
  selected: null, // selected note
  editMode: false, // pane mode
  content: null, // decrypted content
  spinning: false, // indicate if the spinner displays
};

export function secureNotesReducer(state, action) {
  switch (action.type) {
    // switch panel mode
    case SWITCH_MODE: {
      return {
        ...state,
        editMode: action.payload,
      };
    }

    // select a note
    case SELECT_NOTE: {
      return {
        ...state,
        selected: action.payload,
        content: null,
      };
    }

    // decipher content
    case DECIPHER: {
      return {
        ...state,
        content: action.payload,
      };
    }

    // create a new note
    case NEW_NOTE: {
      return {
        ...state,
        selected: null,
        editMode: true,
        content: null,
      };
    }

    // save a new note
    case SAVE_NEW_NOTE: {
      const { title, content } = action.payload;
      const id = (state.notes[state.notes.length - 1]?.id ?? 0) + 1;

      return {
        ...state,
        notes: [...state.notes, { id, title, content }],
        editMode: false,
        content: null,
      };
    }

    // update an existent note
    case UPDATE_NOTE: {
      const { notes, selected } = state;
      const { title, content } = action.payload;
      const nextNotes = notes.map((note) => {
        if (note.id === selected.id) {
          return {
            id: selected.id,
            title,
            content,
          };
        }

        return note;
      });

      return {
        ...state,
        notes: nextNotes,
        selected: null,
        editMode: false,
        content: null,
      };
    }

    // switch spinner
    case SWITCH_SPINNER: {
      return {
        ...state,
        spinning: action.payload,
      };
    }

    default:
      return state;
  }
}

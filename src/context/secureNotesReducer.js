import {
  SWITCH_MODE,
  SELECT_NOTE,
  DECIPHER,
  NEW_NOTE,
  SAVE_NEW_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  SWITCH_SPINNER,
  SWITCH_MODAL,
} from './constant';

export function secureNotesReducer(state, action) {
  console.log('secureNotesReducer -> action.type', action);

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

      // Increase one to the last note's id and let it be the new note's id.
      // If there is no note, the new id will be 0.
      const id = (state.notes[state.notes.length - 1]?.id ?? 0) + 1;

      const _title = title === '' ? 'Untitled' : title;

      const newNote = { id, title: _title, content };

      return {
        ...state,
        notes: [...state.notes, newNote],
        selected: newNote,
        editMode: false,
        content: newNote.content,
      };
    }

    // update an existent note
    case UPDATE_NOTE: {
      const { notes, selected } = state;
      const { title, content } = action.payload;

      const _title = title === '' ? 'Untitled' : title;

      let nextSelected = null;

      const nextNotes = notes.map((note) => {
        // If note.id equals to the selected note.id, update it.
        // If not, just return it.
        if (note.id === selected.id) {
          nextSelected = {
            id: selected.id,
            title: _title,
            content,
          };
          return nextSelected;
        }

        return note;
      });

      return {
        ...state,
        notes: nextNotes,
        selected: nextSelected,
        editMode: false,
        content: nextSelected.content,
      };
    }

    // delete a note
    case DELETE_NOTE: {
      const { notes, selected } = state;

      const nextNotes = notes.reduce((acc, cur) => {
        // If cur.id equals to the selected note.id, do nothing.
        // Otherwise add the cur note to the new notes.
        return cur.id === selected.id ? acc : [...acc, cur];
      }, []);

      return {
        ...state,
        notes: nextNotes,
        selected: null,
        editMode: false,
        content: null,
        modal: false,
      };
    }

    // switch spinner
    case SWITCH_SPINNER: {
      return {
        ...state,
        spinning: action.payload,
      };
    }

    // switch confirmation modal
    case SWITCH_MODAL: {
      return {
        ...state,
        modal: action.payload,
      };
    }

    default:
      return state;
  }
}

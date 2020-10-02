import React, { createContext } from 'react';
import { useImmerReducer } from 'use-immer';
import { secureNotesReducer } from './secureNotesReducer';

// import { mockData } from 'mockData';

const initialState = {
  // notes: [...mockData],
  notes: [], // notes
  selected: null, // selected note
  editMode: false, // pane mode
  content: null, // decrypted content
  spinning: false, // indicates if the spinner displays
  modal: false, // indicates if the confirmation modal displays
};

export const SecureNotesContext = createContext({});

export const SecureNotesProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(secureNotesReducer, initialState);
  const contextValue = { state, dispatch };

  return (
    <SecureNotesContext.Provider value={contextValue}>
      {children}
    </SecureNotesContext.Provider>
  );
};

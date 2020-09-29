import React from 'react';
import { useImmerReducer } from 'use-immer';
import { SecureNotesProvider } from './context';
import { secureNotesReducer, initialState } from './reducer';

import Flex from 'common/Flex';
import FuncPanel from './components/FuncPanel';
import NoteList from './components/NoteList';

function SecureNotes() {
  const [state, dispatch] = useImmerReducer(secureNotesReducer, initialState);
  const contextValue = { state, dispatch };

  return (
    <SecureNotesProvider value={contextValue}>
      <Flex height="100%" width="100%">
        {/* Left pane: notes list */}
        <NoteList />

        {/* Right pane: View/Edit mode */}
        <FuncPanel />
      </Flex>
    </SecureNotesProvider>
  );
}

export default SecureNotes;

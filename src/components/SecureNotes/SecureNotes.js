import React from 'react';
import { useImmerReducer } from 'use-immer';
import { SecureNotesProvider } from './context';
import { secureNotesReducer, initialState } from './reducer';

import Flex from 'common/Flex';
import FuncPanel from './components/FuncPanel';
import NoteList from './components/NoteList';
import Loading from './components/Loading';

function SecureNotes() {
  const [state, dispatch] = useImmerReducer(secureNotesReducer, initialState);
  const contextValue = { state, dispatch };

  const { spinning } = state;

  return (
    <SecureNotesProvider value={contextValue}>
      <Flex height="100%" width="100%">
        {/* Left pane: notes list */}
        <NoteList />

        {/* Right pane: View/Edit mode */}
        <FuncPanel />

        {/* spinner */}
        {spinning && <Loading overlay={true} absolute={true} />}
      </Flex>
    </SecureNotesProvider>
  );
}

export default SecureNotes;

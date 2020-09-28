import React from 'react';
import { useImmerReducer } from 'use-immer';
import { SecureNotesProvider } from './context';
import { secureNotesReducer, initialState } from './reducer';

import Flex from 'common/Flex';
import FuncPanel from './components/FuncPanel';
import NoteList from './components/NoteList';
import Header from './components/Header';

function SecureNotes() {
  const [state, dispatch] = useImmerReducer(secureNotesReducer, initialState);
  const contextValue = { state, dispatch };

  return (
    <SecureNotesProvider value={contextValue}>
      <Flex height="100%" flexDirection="column">
        <Header />

        <Flex flexGrow="1">
          <Flex height="100%" width="100%">
            <NoteList />

            <FuncPanel />
          </Flex>
        </Flex>
      </Flex>
    </SecureNotesProvider>
  );
}

export default SecureNotes;

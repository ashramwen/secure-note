import React, { useContext } from 'react';
import Flex from 'common/Flex';
import { SecureNotesContext } from 'context/SecureNotesContext';
import FuncPanel from './components/FuncPanel';
import NoteList from './components/NoteList';
import Loading from './components/Loading';
import Confirmation from './components/Confirmation';

function SecureNotes() {
  const { state } = useContext(SecureNotesContext);
  const { spinning } = state;

  return (
    <Flex height="100%" width="100%">
      {/* Left pane: notes list */}
      <NoteList />

      {/* Right pane: View/Edit mode panel */}
      <FuncPanel />

      {/* spinner */}
      {spinning && <Loading overlay={true} absolute={true} />}

      {/* deleting confirmation modal */}
      <Confirmation />
    </Flex>
  );
}

export default SecureNotes;

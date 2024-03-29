import { useContext } from 'react';
import Flex from 'common/Flex';
import Spinner from 'common/Spinner';
import { SecureNotesContext } from 'context/SecureNotesContext';
import RightPane from './components/RightPane';
import NoteList from './components/NoteList';
import Confirmation from './components/Confirmation';

/**
 * Secure notes
 */
function SecureNotes() {
  const { state } = useContext(SecureNotesContext);
  const { spinning } = state;

  return (
    <Flex height="100%" width="100%">
      {/* Left pane: notes list */}
      <NoteList />

      {/* Right pane: View/Edit mode panel */}
      <RightPane />

      {/* spinner */}
      {spinning && <Spinner overlay={true} absolute={true} />}

      {/* deleting confirmation modal */}
      <Confirmation />
    </Flex>
  );
}

export default SecureNotes;

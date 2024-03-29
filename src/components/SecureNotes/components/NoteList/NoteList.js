import { useContext } from 'react';
import clsx from 'clsx';
import { decrypt } from 'utils';
import PromiseGuard from 'utils/PromiseGuard';
import { PlusSvg } from 'svg';
import { lightGray } from 'styles/colors';
import RoundedButton from 'common/RoundedButton';
import Flex from 'common/Flex';
import { SELECT_NOTE, DECRYPT, NEW_NOTE } from 'context/constant';
import { SecureNotesContext } from 'context/SecureNotesContext';
import { Item } from './Styled';

const promiseGuard = new PromiseGuard();

/**
 * All notes list
 */
function NoteList() {
  const { state, dispatch } = useContext(SecureNotesContext);
  const { notes, selected, editMode } = state;

  /**
   * Click the new note button
   */
  const handleNewNote = () => {
    dispatch({
      type: NEW_NOTE,
    });
  };

  /**
   * Select a existent note
   * @param {Object} note A selected note
   */
  const handleClick = (note) => {
    if (selected?.id !== note.id && !editMode) {
      dispatch({
        type: SELECT_NOTE,
        payload: note,
      });

      // Decrypt the selected content
      decrypting(note.content);
    }
  };

  /**
   * Decrypt content
   */
  const decrypting = async (content) => {
    const data = await promiseGuard.getPromise(decrypt(content));
    dispatch({
      type: DECRYPT,
      payload: data,
    });
  };

  return (
    <Flex
      backgroundColor={lightGray}
      maxWidth="30%"
      pt="60px"
      pl="60px"
      flexDirection="column"
    >
      <RoundedButton
        onClick={handleNewNote}
        disabled={editMode}
        mr="60px"
        mb="50px"
        width="128px"
        height="48px"
      >
        <PlusSvg />
        New note
      </RoundedButton>

      <Flex flexDirection="column" overflowY="auto" pb="60px">
        {notes?.map((note) => (
          <Item
            className={clsx({ selected: selected?.id === note.id })}
            key={note.id}
            onClick={() => handleClick(note)}
          >
            <span className="ellipsis">{note.title}</span>
          </Item>
        ))}
      </Flex>
    </Flex>
  );
}

export default NoteList;

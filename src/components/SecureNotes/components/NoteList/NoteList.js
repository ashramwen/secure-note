import React, { useContext, useEffect } from 'react';
import classnames from 'classnames';
import { decrypt } from 'utils';
import { PlusSvg } from 'svg';
import { lightGray } from 'styles/colors';
import RoundedButton from 'common/RoundedButton';
import Flex from 'common/Flex';
import { SELECT_NOTE, DECIPHER, NEW_NOTE } from 'context/constant';
import { SecureNotesContext } from 'context/SecureNotesContext';
import { Item } from './Styled';

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
    if (selected?.id === note.id) {
      // Unselect the selected note
      dispatch({
        type: SELECT_NOTE,
        payload: null,
      });
    } else if (!editMode) {
      // Select a note
      dispatch({
        type: SELECT_NOTE,
        payload: note,
      });
    }
  };

  useEffect(() => {
    let canceled = false;

    if (selected) {
      // decrypt the content of the selected note
      decrypt(selected.content).then((data) => {
        if (!canceled) {
          dispatch({
            type: DECIPHER,
            payload: data,
          });
        }
      });
    }

    return () => {
      canceled = true;
    };
  }, [dispatch, selected]);

  return (
    <Flex
      backgroundColor={lightGray}
      pt="60px"
      pl="60px"
      flexDirection="column"
    >
      <RoundedButton
        onClick={handleNewNote}
        disabled={editMode}
        mr="60px"
        mb="50px"
      >
        <PlusSvg />
        New note
      </RoundedButton>

      <Flex flexDirection="column" overflowY="auto" pb="60px">
        {notes.map((note) => (
          <Item
            className={classnames({ selected: selected?.id === note.id })}
            key={note.id}
            onClick={() => handleClick(note)}
          >
            {note.title}
          </Item>
        ))}
      </Flex>
    </Flex>
  );
}

export default NoteList;

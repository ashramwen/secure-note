import React, { useContext } from 'react';
import classnames from 'classnames';
import { PlusSvg } from 'svg';
import RoundedButton from 'common/RoundedButton';
import Box from 'common/Box';
import { SecureNotesContext } from '../../context';
import { Item } from './Styled';

function NoteList() {
  const {
    state: { notes, selected, editMode },
    dispatch,
  } = useContext(SecureNotesContext);

  const handleNewNote = () => {
    dispatch({
      type: 'newNote',
    });
  };

  const handleClick = (note) => {
    if (selected === note.id) {
      dispatch({
        type: 'selectNote',
        payload: null,
      });
    } else if (!editMode) {
      dispatch({
        type: 'selectNote',
        payload: note,
      });
    }
  };

  return (
    <Box minWidth="25%" backgroundColor="#f5f6fa" p="60px">
      <RoundedButton onClick={handleNewNote} disabled={editMode} mb="50px">
        <PlusSvg />
        New note
      </RoundedButton>

      {notes.map((note) => (
        <Item
          className={classnames({ selected: selected?.id === note.id })}
          key={note.id}
          onClick={() => handleClick(note)}
        >
          {note.title}
        </Item>
      ))}
    </Box>
  );
}

export default NoteList;

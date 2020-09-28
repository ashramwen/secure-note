import React, { useContext } from 'react';
import classnames from 'classnames';
import Box from 'common/Box';
import { SecureNotesContext } from '../../context';
import { Item } from './Styled';

function NoteList() {
  const {
    state: { notes, selected, editMode },
    dispatch,
  } = useContext(SecureNotesContext);

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
    <Box width={1 / 2} border="5px solid #666">
      {notes.map((note) => (
        <Item
          className={classnames({ selected: selected?.id === note.id })}
          key={note.id}
          borderBottom="2px solid #666"
          p="5px"
          onClick={() => handleClick(note)}
        >
          {note.title}
        </Item>
      ))}
    </Box>
  );
}

export default NoteList;

import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Box from 'common/Box';
import Button from 'common/Button';
import { SecureNotesContext } from '../../context';

function Header() {
  const {
    state: { editMode },
    dispatch,
  } = useContext(SecureNotesContext);

  const handleClick = () => {
    dispatch({
      type: 'newNote',
    });
  };

  return (
    <Box padding="5px" border="5px solid #666">
      <Button
        type="button"
        className="btn btn-primary"
        onClick={handleClick}
        disabled={editMode}
      >
        <FontAwesomeIcon icon={faPlus} /> New note
      </Button>
    </Box>
  );
}

export default Header;

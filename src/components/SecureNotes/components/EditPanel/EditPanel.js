import React, { useContext } from 'react';
import { faTimes, faSave, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Box from 'common/Box';
import Flex from 'common/Flex';
import Button from 'common/Button';
import { SecureNotesContext } from '../../context';
import { Textarea } from './Styled';

function EditPanel() {
  const {
    state: { selected },
    dispatch,
  } = useContext(SecureNotesContext);

  const handleCancel = () => {
    dispatch({
      type: 'switchMode',
      payload: false,
    });
  };

  const handleSave = () => {
    dispatch({
      type: 'switchMode',
      payload: false,
    });
  };

  const handleDelete = () => {
    dispatch({
      type: 'switchMode',
      payload: false,
    });
  };

  return (
    <>
      <Flex flexGrow="1" flexDirection="column">
        <input type="text" placeholder="Title" defaultValue={selected?.title} />
        <Textarea />
      </Flex>

      <Flex justifyContent="space-between" borderTop="5px solid #666" p="5px">
        <Button
          type="button"
          className="btn btn-outline-dark"
          onClick={handleCancel}
        >
          <FontAwesomeIcon icon={faTimes} /> Cancel
        </Button>

        <Box>
          <Button
            type="button"
            className="btn btn-success"
            onClick={handleSave}
          >
            <FontAwesomeIcon icon={faSave} /> Save
          </Button>

          {selected && (
            <Button
              type="button"
              className="btn btn-danger"
              ml="10px"
              onClick={handleDelete}
            >
              <FontAwesomeIcon icon={faTrashAlt} /> Delete
            </Button>
          )}
        </Box>
      </Flex>
    </>
  );
}

export default EditPanel;

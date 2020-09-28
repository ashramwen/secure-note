import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import Button from 'common/Button';
import Flex from 'common/Flex';
import Box from 'common/Box';
import { SecureNotesContext } from '../../context';

function ViewPanel() {
  const {
    state: { selected },
    dispatch,
  } = useContext(SecureNotesContext);

  const handleClick = () => {
    dispatch({
      type: 'switchMode',
      payload: true,
    });
  };

  return (
    <>
      <Flex flexGrow="1" flexDirection="column">
        <Box>{selected.title}</Box>
      </Flex>

      <Flex borderTop="5px solid #666" justifyContent="flex-end" p="5px">
        <Button type="button" className="btn btn-info" onClick={handleClick}>
          <FontAwesomeIcon icon={faPencilAlt} /> Edit
        </Button>
      </Flex>
    </>
  );
}

export default ViewPanel;

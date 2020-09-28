import React, { useContext } from 'react';
import Flex from 'common/Flex';
import { SecureNotesContext } from '../../context';
import ViewPanel from '../ViewPanel';
import EditPanel from '../EditPanel';

function FuncPanel() {
  const {
    state: { selected, editMode },
  } = useContext(SecureNotesContext);

  return (
    <Flex width={1 / 2} border="5px solid #666" flexDirection="column">
      {editMode ? <EditPanel /> : selected ? <ViewPanel /> : null}
    </Flex>
  );
}

export default FuncPanel;

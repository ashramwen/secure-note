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
    <Flex flexGrow="1" flexDirection="column" p="60px">
      {editMode ? <EditPanel /> : selected ? <ViewPanel /> : null}
    </Flex>
  );
}

export default FuncPanel;

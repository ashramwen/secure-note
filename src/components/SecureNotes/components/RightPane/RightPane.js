import React, { useContext } from 'react';
import { isNil } from 'utils/isNil';
import Flex from 'common/Flex';
import Spinner from 'common/Spinner';
import { SecureNotesContext } from 'context/SecureNotesContext';
import ViewPanel from '../ViewPanel';
import EditPanel from '../EditPanel';

/**
 * RightPane (Right pane)
 */
function RightPane() {
  const { state } = useContext(SecureNotesContext);
  const { selected, plainText } = state;

  return (
    <Flex
      minWidth="70%"
      flexGrow="1"
      flexDirection="column"
      p="60px"
      position="relative"
    >
      <EditPanel />

      <ViewPanel />

      {selected && isNil(plainText) && <Spinner />}
    </Flex>
  );
}

export default RightPane;

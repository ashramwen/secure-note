import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { EditSvg } from 'svg';
import Box from 'common/Box';
import Button from 'common/Button';
import Divider from 'common/Divider';
import Flex from 'common/Flex';
import TitleHighlight from 'common/TitleHighlight';
import { SWITCH_MODE } from 'context/constant';
import { SecureNotesContext } from 'context/SecureNotesContext';

function ViewPanel() {
  const { state, dispatch } = useContext(SecureNotesContext);
  const { selected, content, editMode } = state;

  /**
   * Click Edit button
   */
  const handleClick = () => {
    dispatch({
      type: SWITCH_MODE,
      payload: true,
    });
  };

  return (
    <>
      {selected && content && !editMode && (
        <>
          <Flex flexGrow="1" flexDirection="column">
            <Flex height="25px" alignItems="center">
              <TitleHighlight />
              <Box fontSize="20px" p="1px 0 1px 2px">
                {selected.title}
              </Box>
            </Flex>
            <Divider />
            <Box>
              <ReactMarkdown source={content} />
            </Box>
          </Flex>

          <Flex justifyContent="flex-end" p="5px">
            <Button className="edit" onClick={handleClick}>
              <EditSvg />
              Edit
            </Button>
          </Flex>
        </>
      )}
    </>
  );
}

export default ViewPanel;

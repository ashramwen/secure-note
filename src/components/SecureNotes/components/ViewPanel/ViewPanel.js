import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';

import { EditSvg } from 'svg';
import Box from 'common/Box';
import Button from 'common/Button';
import Divider from 'common/Divider';
import Flex from 'common/Flex';
import TitleHighlight from 'common/TitleHighlight';
import { SWITCH_MODE } from '../../constant';
import { SecureNotesContext } from '../../context';
import Loading from '../Loading';

function ViewPanel() {
  const {
    state: { selected, content },
    dispatch,
  } = useContext(SecureNotesContext);

  const handleClick = () => {
    dispatch({
      type: SWITCH_MODE,
      payload: true,
    });
  };

  return (
    <>
      {content ? (
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
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ViewPanel;

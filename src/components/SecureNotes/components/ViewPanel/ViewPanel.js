import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';

import Box from 'common/Box';
import Button from 'common/Button';
import Divider from 'common/Divider';
import Flex from 'common/Flex';
import TitleHighlight from 'common/TitleHighlight';
import { SecureNotesContext } from '../../context';
import { EditSvg } from 'svg';

const input = '# This is a header\n\nAnd this is a paragraph';

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
        <Flex height="20px" alignItems="center">
          <TitleHighlight />
          <Box pl="2px">{selected.title}</Box>
        </Flex>
        <Divider />
        <Box>
          <ReactMarkdown source={input} />
        </Box>
      </Flex>

      <Flex justifyContent="flex-end" p="5px">
        <Button className="edit" onClick={handleClick}>
          <EditSvg />
          Edit
        </Button>
      </Flex>
    </>
  );
}

export default ViewPanel;

import { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import { isNil } from 'utils/isNil';
import { DeleteSvg, EditSvg } from 'svg';
import Box from 'common/Box';
import Button from 'common/Button';
import Divider from 'common/Divider';
import Flex from 'common/Flex';
import TitleHighlight from 'common/TitleHighlight';
import { SWITCH_MODAL, SWITCH_MODE } from 'context/constant';
import { SecureNotesContext } from 'context/SecureNotesContext';

/**
 * View mode panel
 */
function ViewPanel() {
  const { state, dispatch } = useContext(SecureNotesContext);
  const { selected, plainText, editMode } = state;

  /**
   * Click Edit button
   */
  const handleClick = () => {
    dispatch({
      type: SWITCH_MODE,
      payload: true,
    });
  };

  /**
   * Click delete button
   */
  const handleDelete = () => {
    // Pop-up the confirmation modal
    dispatch({
      type: SWITCH_MODAL,
      payload: true,
    });
  };

  return (
    <>
      {selected && !isNil(plainText) && !editMode && (
        <>
          <Flex flexGrow="1" flexDirection="column">
            <Flex height="25px" alignItems="center">
              <TitleHighlight />
              <Box className="ellipsis" fontSize="20px" p="1px 0 1px 2px">
                {selected.title}
              </Box>
            </Flex>
            <Divider />
            <Box>
              <ReactMarkdown className="wrap" children={plainText} />
            </Box>
          </Flex>

          <Flex justifyContent="flex-end" p="5px">
            <Button className="edit" onClick={handleClick}>
              <EditSvg />
              Edit
            </Button>

            <Button className="delete" ml="24px" onClick={handleDelete}>
              <DeleteSvg />
              Delete
            </Button>
          </Flex>
        </>
      )}
    </>
  );
}

export default ViewPanel;

import { useContext } from 'react';
import { white } from 'styles/colors';
import { CancelSvg, CloseSvg, DeleteSvg } from 'svg';
import Flex from 'common/Flex';
import Box from 'common/Box';
import Button from 'common/Button';
import { DELETE_NOTE, SWITCH_MODAL } from 'context/constant';
import { SecureNotesContext } from 'context/SecureNotesContext';
import { CloseButton } from './Styled';

/**
 * Deleting confirmation
 */
function Confirmation() {
  const {
    state: { modal },
    dispatch,
  } = useContext(SecureNotesContext);

  /**
   * Click delete button
   */
  const handleDelete = () => {
    dispatch({
      type: DELETE_NOTE,
    });
  };

  /**
   * Click cancel button
   */
  const handleCancel = () => {
    dispatch({
      type: SWITCH_MODAL,
      payload: false,
    });
  };

  return (
    <>
      {modal && (
        <Flex
          flexGrow="1"
          justifyContent="center"
          alignItems="center"
          bg="rgba(0, 0, 0, 0.3)"
          position="absolute"
          height="100%"
          width="100%"
          overflow="hidden"
        >
          <Flex
            width="400px"
            height="210px"
            borderRadius="16px"
            boxShadow="0 3px 6px 0 rgba(0, 0, 0, 0.16)"
            backgroundColor={white}
            justifyContent="space-between"
            position="relative"
            p="24px 32px"
            flexDirection="column"
          >
            <CloseButton position="absolute" right="24px">
              <CloseSvg />
            </CloseButton>

            <Box fontSize="24px">Delete forever?</Box>

            <Box>1 note is about to be permanently deleted.</Box>

            <Flex justifyContent="flex-end">
              <Button className="delete" onClick={handleDelete}>
                <DeleteSvg />
                Delete
              </Button>

              <Button className="cancel" ml="24px" onClick={handleCancel}>
                <CancelSvg />
                Cancel
              </Button>
            </Flex>
          </Flex>
        </Flex>
      )}
    </>
  );
}

export default Confirmation;

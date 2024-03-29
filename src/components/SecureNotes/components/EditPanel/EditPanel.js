import { useContext, useEffect, useState } from 'react';
import { encrypt } from 'utils';
import { CancelSvg, DeleteSvg, SaveSvg } from 'svg';
import Button from 'common/Button';
import Divider from 'common/Divider';
import Flex from 'common/Flex';
import {
  SWITCH_MODE,
  SAVE_NEW_NOTE,
  UPDATE_NOTE,
  SWITCH_SPINNER,
  SWITCH_MODAL,
} from 'context/constant';
import { SecureNotesContext } from 'context/SecureNotesContext';
import { Input, Textarea } from './Styled';

/**
 * Edit mode panel
 */
function EditPanel() {
  const { state, dispatch } = useContext(SecureNotesContext);
  const { selected, editMode, plainText } = state;

  const [title, setTitle] = useState(selected?.title ?? '');
  const [text, setText] = useState(plainText ?? '');

  /**
   * Handle input change event
   * @param {Event} e Change event of input
   */
  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  /**
   * Handle textarea change event
   * @param {Event} e Change event of textarea
   */
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  /**
   * Click cancel button
   */
  const handleCancel = () => {
    dispatch({
      type: SWITCH_MODE,
      payload: false,
    });
  };

  /**
   * Click save button
   */
  const handleSave = async () => {
    // Switch on the spinner
    dispatch({
      type: SWITCH_SPINNER,
      payload: true,
    });

    // decrypt the content
    const data = await encrypt(text);

    const payload = {
      title: title === '' ? 'Untitled' : title,
      content: data,
      plainText: text,
    };

    if (selected) {
      // Update the selected note if there is a selected note
      dispatch({
        type: UPDATE_NOTE,
        payload,
      });
    } else {
      // Save the new note
      dispatch({
        type: SAVE_NEW_NOTE,
        payload,
      });
    }

    // switch off the spinner
    dispatch({
      type: SWITCH_SPINNER,
      payload: false,
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

  useEffect(() => {
    // If editMode changes, update input and textarea.
    if (editMode) {
      setTitle(selected?.title ?? '');
      setText(plainText ?? '');
    }
  }, [selected, plainText, editMode]);

  return (
    <>
      {editMode && (
        <>
          <Flex flexGrow="1" flexDirection="column">
            <Flex>
              <Input
                type="text"
                placeholder="Title"
                aria-label="title"
                value={title}
                onChange={handleInputChange}
              />
            </Flex>
            <Divider />
            <Textarea
              aria-label="content"
              placeholder="Write your note here..."
              value={text}
              onChange={handleTextChange}
            />
          </Flex>

          <Flex justifyContent="space-between">
            <Button className="cancel" onClick={handleCancel}>
              <CancelSvg />
              Cancel
            </Button>

            <Flex>
              <Button className="save" onClick={handleSave}>
                <SaveSvg />
                Save
              </Button>

              {selected && (
                <Button className="delete" ml="24px" onClick={handleDelete}>
                  <DeleteSvg />
                  Delete
                </Button>
              )}
            </Flex>
          </Flex>
        </>
      )}
    </>
  );
}

export default EditPanel;

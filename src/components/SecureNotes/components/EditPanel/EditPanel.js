import React, { useContext, useState } from 'react';
import { CancelSvg, DeleteSvg, SaveSvg } from 'svg';
import Button from 'common/Button';
import Divider from 'common/Divider';
import Flex from 'common/Flex';
import {
  SWITCH_MODE,
  SAVE_NEW_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  SWITCH_SPINNER,
} from '../../constant';
import { SecureNotesContext } from '../../context';
import { Input, Textarea } from './Styled';
import { encrypt } from 'utils';

function EditPanel() {
  const { state, dispatch } = useContext(SecureNotesContext);
  const { selected, content } = state;

  const [title, setTitle] = useState(selected?.title ?? '');
  const [text, setText] = useState(content ?? '');

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleCancel = () => {
    dispatch({
      type: SWITCH_MODE,
      payload: false,
    });
  };

  const handleSave = async () => {
    dispatch({
      type: SWITCH_SPINNER,
      payload: true,
    });

    const data = await encrypt(text);

    if (selected) {
      dispatch({
        type: UPDATE_NOTE,
        payload: { title, content: data },
      });
    } else {
      dispatch({
        type: SAVE_NEW_NOTE,
        payload: { title, content: data },
      });
    }

    dispatch({
      type: SWITCH_SPINNER,
      payload: false,
    });
  };

  const handleDelete = () => {
    dispatch({
      type: DELETE_NOTE,
      payload: false,
    });
  };

  return (
    <>
      <Flex flexGrow="1" flexDirection="column">
        <Flex>
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={handleInputChange}
          />
        </Flex>
        <Divider />
        <Textarea
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
  );
}

export default EditPanel;

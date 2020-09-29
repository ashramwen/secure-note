import React, { useContext, useState } from 'react';
import { CancelSvg, DeleteSvg, SaveSvg } from 'svg';
import Button from 'common/Button';
import Divider from 'common/Divider';
import Flex from 'common/Flex';
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
      type: 'switchMode',
      payload: false,
    });
  };

  const handleSave = async () => {
    const data = await encrypt(text);
    // dispatch({
    //   type: 'switchMode',
    //   payload: { selected, title, text },
    // });
  };

  const handleDelete = () => {
    dispatch({
      type: 'switchMode',
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

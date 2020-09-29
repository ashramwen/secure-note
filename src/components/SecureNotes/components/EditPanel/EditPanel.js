import React, { useContext } from 'react';
import { CancelSvg, DeleteSvg, SaveSvg } from 'svg';
import Button from 'common/Button';
import Divider from 'common/Divider';
import Flex from 'common/Flex';
import { SecureNotesContext } from '../../context';
import { Input, Textarea } from './Styled';

function EditPanel() {
  const {
    state: { selected, content },
    dispatch,
  } = useContext(SecureNotesContext);

  const handleCancel = () => {
    dispatch({
      type: 'switchMode',
      payload: false,
    });
  };

  const handleSave = () => {
    dispatch({
      type: 'switchMode',
      payload: false,
    });
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
            defaultValue={selected?.title}
          />
        </Flex>
        <Divider />
        <Textarea
          defaultValue={content ?? ''}
          placeholder="Write your note here..."
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

// import dependencies
import { render, screen, fireEvent } from '@testing-library/react';

import { SecureNotesContext } from 'context/SecureNotesContext';
import Confirmation from '.';

const state = {
  modal: true,
};

test('Test <Confirmation />', () => {
  render(
    <SecureNotesContext.Provider value={{ state }}>
      <Confirmation />
    </SecureNotesContext.Provider>
  );

  // caption of delete confirmation modal
  expect(screen.getByText('Delete forever?')).toBeInTheDocument();

  // delete button
  expect(screen.getByText('Delete')).toBeInTheDocument();

  // cancel button
  expect(screen.getByText('Cancel')).toBeInTheDocument();
});

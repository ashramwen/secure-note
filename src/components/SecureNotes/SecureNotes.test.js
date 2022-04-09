// import dependencies
import { render, screen } from '@testing-library/react';

import { SecureNotesContext } from 'context/SecureNotesContext';
import SecureNotes from '.';

const state = {
  spinning: true,
};

test('Test <SecureNotes />', () => {
  render(
    <SecureNotesContext.Provider value={{ state }}>
      <SecureNotes />
    </SecureNotesContext.Provider>
  );

  // spinner
  expect(screen.getByLabelText('spinner')).toBeInTheDocument();
});

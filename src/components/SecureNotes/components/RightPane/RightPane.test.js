// import dependencies
import { render, screen } from '@testing-library/react';

import { mockData } from '__mocks__';
import { SecureNotesContext } from 'context/SecureNotesContext';
import RightPane from '.';

const state = {
  selected: mockData[0],
};

test('Test <RightPane />', () => {
  render(
    <SecureNotesContext.Provider value={{ state }}>
      <RightPane />
    </SecureNotesContext.Provider>
  );

  // spinner
  expect(screen.getByLabelText('spinner')).toBeInTheDocument();
});

// import dependencies
import React from 'react';
import { render, screen } from '@testing-library/react';

import { mockData } from '__mocks__';
import { SecureNotesContext } from 'context/SecureNotesContext';
import ViewPanel from '.';

const state = {
  selected: mockData[0],
  editMode: false,
  content: mockData[0].content,
};

test('Test <ViewPanel />', () => {
  render(
    <SecureNotesContext.Provider value={{ state }}>
      <ViewPanel />
    </SecureNotesContext.Provider>
  );

  // title
  expect(screen.getByText(mockData[0].title)).toBeInTheDocument();

  // content
  expect(screen.getByText(mockData[0].content)).toBeInTheDocument();

  // edit button
  expect(screen.getByText('Edit')).toBeInTheDocument();
});

// import dependencies
import React from 'react';
import { render, screen } from '@testing-library/react';

import { mockData } from '__mocks__';
import { SecureNotesContext } from 'context/SecureNotesContext';
import NoteList from '.';

const state = {
  notes: [...mockData],
  selected: mockData[0],
};

test('Test <NoteList />', () => {
  render(
    <SecureNotesContext.Provider value={{ state }}>
      <NoteList />
    </SecureNotesContext.Provider>
  );

  // new note button
  const button = screen.getByText('New note');
  expect(button).toBeInTheDocument();

  // note list
  mockData.forEach(({ title }) => {
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  // selected note
  expect(screen.getByText(mockData[0].title).closest('div')).toHaveClass(
    'selected'
  );
});

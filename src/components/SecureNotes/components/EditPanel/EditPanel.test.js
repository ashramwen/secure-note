// import dependencies
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { mockData } from '__mocks__';
import { SecureNotesContext } from 'context/SecureNotesContext';
import EditPanel from '.';

const state = {
  selected: mockData[0],
  editMode: true,
  content: mockData[0].content,
};

const setup = () => {
  render(
    <SecureNotesContext.Provider value={{ state }}>
      <EditPanel />
    </SecureNotesContext.Provider>
  );
};

describe('Test <EditPanel />', () => {
  test('Test <input />', () => {
    setup();

    const input = screen.getByLabelText('title');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(mockData[0].title);
  });

  test('Test <input /> change', () => {
    setup();

    const input = screen.getByLabelText('title');
    fireEvent.change(input, { target: { value: 'another title' } });
    expect(input).toHaveValue('another title');
  });

  test('Test <textarea />', () => {
    setup();

    const textarea = screen.getByLabelText('content');
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveValue(mockData[0].content);
  });

  test('Test <textarea /> change', () => {
    setup();

    const textarea = screen.getByLabelText('content');
    fireEvent.change(textarea, { target: { value: 'altered content' } });
    expect(textarea).toHaveValue('altered content');
  });

  test('Test three buttons', () => {
    setup();

    // edit button
    expect(screen.getByText('Cancel')).toBeInTheDocument();

    // save button
    expect(screen.getByText('Save')).toBeInTheDocument();

    // delete button
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });
});

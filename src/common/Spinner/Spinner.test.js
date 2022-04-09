// import dependencies
import { render, screen } from '@testing-library/react';

import Spinner from '.';

test('Test <Spinner />', () => {
  render(<Spinner />);

  // spinner
  expect(screen.getByLabelText('spinner')).toBeInTheDocument();
});

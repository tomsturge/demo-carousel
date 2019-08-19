import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import App from '../App';

afterEach(cleanup);

describe('App', () => {
  it('should display the content', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});

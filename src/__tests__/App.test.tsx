import * as React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithRedux } from '../utils/testing';

import App from '../App';

afterEach(cleanup);

describe('App', () => {
  it('should display the content', () => {
    const { asFragment } = renderWithRedux(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});

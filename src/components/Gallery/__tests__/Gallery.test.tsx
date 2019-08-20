import * as React from 'react';
import { render, cleanup } from '@testing-library/react';

import Gallery from '../Gallery';

afterEach(cleanup);

describe('Gallery', () => {
  it('should display the content', () => {
    const { asFragment } = render(<Gallery />);
    expect(asFragment()).toMatchSnapshot();
  });
});

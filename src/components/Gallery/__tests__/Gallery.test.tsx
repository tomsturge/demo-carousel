import * as React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux } from '../../../utils/testing';

import Gallery from '../Gallery';

afterEach(cleanup);

describe('Gallery', () => {
  it('should display the content', () => {
    const { asFragment } = renderWithRedux(<Gallery />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should go to the next image when next arrow is clicked', () => {
    const { getByTestId } = renderWithRedux(<Gallery />);
    fireEvent.click(getByTestId('next-button'));
    expect(getByTestId('track')).toHaveStyle('left: -100%;');
  });

  it('should go to the last image when prev arrow is clicked', () => {
    const { getByTestId } = renderWithRedux(<Gallery />);
    const lastImage = getByTestId('track').children.length - 1;
    fireEvent.click(getByTestId('prev-button'));
    expect(getByTestId('track')).toHaveStyle(`left: -${lastImage * 100}%;`);
  });

  it('should go to specific image when button is clicked', () => {
    const { getByTestId } = renderWithRedux(<Gallery />);
    fireEvent.click(getByTestId('button-5'));
    expect(getByTestId('track')).toHaveStyle('left: -500%;');
  });
});

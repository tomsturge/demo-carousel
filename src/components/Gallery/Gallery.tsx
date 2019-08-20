import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Gallery.scss';
import Img1 from '../../assets/01.jpg';
import Img2 from '../../assets/02.jpg';
import Img3 from '../../assets/03.jpg';
import Img4 from '../../assets/04.jpg';
import Img5 from '../../assets/05.jpg';
import Img6 from '../../assets/06.jpg';
import Img7 from '../../assets/07.jpg';
import Img8 from '../../assets/08.jpg';
import Img9 from '../../assets/09.jpg';
import Img10 from '../../assets/10.jpg';

import {
  incrementSelection,
  decrementSelection,
  updateSelection,
  updateCount
} from '../../store/actions';

const Images = [
  {
    src: Img1,
    alt: 'Image 1'
  },
  {
    src: Img2,
    alt: 'Image 2'
  },
  {
    src: Img3,
    alt: 'Image 3'
  },
  {
    src: Img4,
    alt: 'Image 4'
  },
  {
    src: Img5,
    alt: 'Image 5'
  },
  {
    src: Img6,
    alt: 'Image 6'
  },
  {
    src: Img7,
    alt: 'Image 7'
  },
  {
    src: Img8,
    alt: 'Image 8'
  },
  {
    src: Img9,
    alt: 'Image 9'
  },
  {
    src: Img10,
    alt: 'Image 10'
  }
];

interface Props {
  selected: number;
  count: number;
  incrementSelection: () => void;
  decrementSelection: () => void;
  updateSelection: (number) => void;
  updateCount: (number) => void;
}

export const Gallery: React.FunctionComponent<Props> = ({
  selected,
  count,
  incrementSelection,
  decrementSelection,
  updateSelection,
  updateCount
}: Props) => {
  useEffect(() => {
    count === 0 && updateCount(Images.length - 1);
  }, [count, updateCount]);

  return (
    <div className="gallery">
      <div
        className="gallery-track"
        data-testid="track"
        style={{ left: `-${selected * 100}%` }}
      >
        {Images.map(({ src, alt }, index) => (
          <img key={index} src={src} alt={alt} />
        ))}
      </div>

      <button
        className="gallery-arrow gallery-leftarrow"
        data-testid="prev-button"
        onClick={(): void => decrementSelection()}
      >
        <svg width="100%" height="100%" viewBox="0 0 32 32">
          <path
            stroke="currentColor"
            d="M16.3 21.5L11 16l5.3-5.5"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <button
        className="gallery-arrow gallery-rightarrow"
        data-testid="next-button"
        onClick={(): void => incrementSelection()}
      >
        <svg width="100%" height="100%" viewBox="0 0 32 32">
          <path
            stroke="currentColor"
            d="M16 21.5l5.3-5.5-5.3-5.5"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="gallery-control">
        {Images.map((_, index) => (
          <span
            key={index}
            data-testid={`button-${index}`}
            className={`gallery-button ${index === selected && 'active'}`}
            onClick={(): void => updateSelection(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default connect(
  state => {
    const { selected, count } = state;
    return { selected, count };
  },
  dispatch =>
    bindActionCreators(
      {
        incrementSelection,
        decrementSelection,
        updateSelection,
        updateCount
      },
      dispatch
    )
)(Gallery);

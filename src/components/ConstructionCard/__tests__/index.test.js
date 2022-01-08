// __tests__/ConstructionCard.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ConstructionCard from '..';

afterEach(cleanup);

describe('ConstructionCard component', () => {
  it('renders', () => {
    render(<ConstructionCard />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ConstructionCard />);
    expect(asFragment()).toMatchSnapshot();
  });
})
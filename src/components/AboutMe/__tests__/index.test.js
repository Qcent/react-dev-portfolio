// __tests__/AboutMe.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutMe from '..';

afterEach(cleanup);

describe('AboutMe component', () => {
  it('renders', () => {
    render(<AboutMe />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<AboutMe />);
    expect(asFragment()).toMatchSnapshot();
  });
})
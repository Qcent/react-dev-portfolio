// __tests__/Project.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Project from '..';

afterEach(cleanup);

describe('Project component', () => {
  it('renders', () => {
    render(<Project />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Project />);
    expect(asFragment()).toMatchSnapshot();
  });
})
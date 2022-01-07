// __tests__/Footer.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '..';

afterEach(cleanup);

describe('Footer component', () => {
    it('renders', () => {
        render( < Footer / > );
    });

    it('matches snapshot', () => {
        const { asFragment } = render( < Footer / > );

        expect(asFragment()).toMatchSnapshot();
    });
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render( < Footer / > );

        expect(getByTestId('Email')).toBeDefined();
        expect(getByTestId('Resume')).toBeDefined();
        expect(getByTestId('LinkedIn')).toBeDefined();
        expect(getByTestId('GitHub')).toBeDefined();
    });

})
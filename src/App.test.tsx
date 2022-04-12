import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {Bowling} from './Bowling';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("Bowling", () => {
    // when we didn't knock out any pins, after 20 attempts
    // then we have 0 score.
    it("didn't knock out any pins", () => {
        let bowling: Bowling = new Bowling();
        for (let i = 0; i < 20; i++) {
            bowling.addThrow(0);
        }
        // After 20 throws, we have 0 score.
        expect(bowling.getScore()).toBe(0);
    });
});
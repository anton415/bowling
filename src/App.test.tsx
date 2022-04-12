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
    let bowling: Bowling;

    // Create new Bowling object before each test.
    beforeEach(() => {
        bowling = new Bowling();
    });

    // Add throws function.
    // pins - number of pins we knock out.
    // times - number of times throw will be repeated.
    let addThrows = (pins: number, times: number) => {
        for (let i = 0; i < times; i++) {
            bowling.addThrow(pins);
        }
    };

    // when we didn't knock out any pins, after 20 attempts
    // then we have 0 score.
    it("didn't knock out any pins", () => {
        addThrows(0, 20);
        // After 20 throws, we have 0 score.
        expect(bowling.getScore()).toBe(0);
    });

    // when we knock out three pins, in every throws
    // then we have 60 score.
    it("three pins, in every throws", () => {
        addThrows(3, 20);
        // After 20 throws, we have 60 score.
        expect(bowling.getScore()).toBe(60);
    });

    // when we knock out spare
    // then we have 10 score.
    it("spare", () => {
        addThrows(5, 2);
        addThrows(0, 18);
        // After spare, we have 10 score.
        expect(bowling.getScore()).toBe(10);
    });

    // when we knock out spare and three pins, in every throws
    // then we have 67 score (spare + bonus + three in every throws).
    it("spare and three pins, in every throws", () => {
        addThrows(5, 2);
        addThrows(3, 18);
        // After spare, we have score: 10 + 3 + 18 * 3 = 67.
        // spare + bonus + three in every throws.
        expect(bowling.getScore()).toBe(67);
    });

    // when we knock out strike
    // then we have 10 score.
    it("strike", () => {
        addThrows(10, 1);
        addThrows(0, 18);
        // After strike, we have 10 score.
        expect(bowling.getScore()).toBe(10);
    });

    // when we knock out strike and three pins, in every throws
    // then we have 70 score.
    it("strike and three pins, in every throws", () => {
        addThrows(10, 1);
        addThrows(3, 18);
        // After strike, we have score: 10 + 3 + 3 + 18 * 3 = 70.
        // spare + bonus + bonus + three in every throws.
        expect(bowling.getScore()).toBe(70);
    });

    // when we knock out strike, in every throws
    // then we have 300 score.
    it("strike, in every throws", () => {
        // 12 throws, because player may throw two more balls to complete the score of the strike.
        addThrows(10, 12);
        expect(bowling.getScore()).toBe(300);
    });
});
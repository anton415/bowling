import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {Bowling} from './logic/Bowling';
import {Frame} from './logic/Frame';

describe("Frame", () => {
    let frame: Frame;

    beforeEach(() => {
        frame = new Frame();
    });

    it("when one throw get five pins", () => {
        frame.addThrow(5);
        expect(frame.getFrameScore()).toBe(5);
    });

    it("when two throw get ten pins", () => {
        frame.addThrow(5);
        frame.addThrow(5);
        expect(frame.getFrameScore()).toBe(10);
    });

    it("when two throw get spare", () => {
        frame.addThrow(5);
        frame.addThrow(5);
        expect(frame.isSpare).toBeTruthy();
    });

    it("when one throw get strike", () => {
        frame.addThrow(10);
        expect(frame.isStrike).toBeTruthy();
    });

    it("when one throw get ten pins and three pins as bonus", () => {
        frame.addThrow(10);
        frame.addBonusScore(3);
        expect(frame.getFrameScore()).toBe(13);
    });
});

describe("Bowling", () => {
    let bowling: Bowling;

    // Create new Bowling object before each test.
    beforeEach(() => {
        bowling = new Bowling();
    });

    it("two throw, two pin", () => {
        bowling.addThrow(1);
        bowling.addThrow(1);
        expect(bowling.getScore()).toBe(2);
    });

    it("two throw, zero pin", () => {
        bowling.addThrow(0);
        bowling.addThrow(0);
        expect(bowling.getScore()).toBe(0);
    });

    it("three pins, in two throws", () => {
        bowling.addThrow(1);
        bowling.addThrow(2);
        expect(bowling.getScore()).toBe(3);
    });

    // when we knock out spare
    // then we have 10 score.
    it("spare", () => {
        bowling.addThrow(8);
        bowling.addThrow(2);
        expect(bowling.getScore()).toBe(10);
    });

    it("spare get bonus score", () => {
        bowling.addThrow(8);
        bowling.addThrow(2);
        bowling.addThrow(3);
        expect(bowling.frames[0].getFrameScore()).toBe(13);
    });

    // when we knock out spare and three pins, in next frame
    // then we have 19 score (spare + bonus + six in next frame).
    it("spare and 6 pins, in second frame + bonus", () => {
        bowling.addThrow(8);
        bowling.addThrow(2);
        bowling.addThrow(3);
        bowling.addThrow(3);
        // After spare, we have score: 10 + 3 + 3 + 3 = 19.
        expect(bowling.getScore()).toBe(19);
    });

    // when we knock out strike
    // then we have 10 score.
    it("strike", () => {
        bowling.addThrow(10);
        // After strike, we have 10 score.
        expect(bowling.getScore()).toBe(10);
    });

    // when we knock out strike and three pins, in next frame
    // then we have 22 score.
    it("strike and three pins, in every throws", () => {
        bowling.addThrow(10);
        bowling.addThrow(3);
        bowling.addThrow(3);
        // After strike, we have score: 10 + 3 + 3 + 6 (as bonus) = 70.
        // spare + bonus + bonus + three in every throws.
        expect(bowling.getScore()).toBe(22);
    });

    it("two strike is 30 score", () => {
        bowling.addThrow(10);
        bowling.addThrow(10);
        expect(bowling.getScore()).toBe(30);
    });

    it("three strike is 60 score", () => {
        bowling.addThrow(10);
        bowling.addThrow(10);
        bowling.addThrow(10);
        expect(bowling.getScore()).toBe(60);
    });

    it("four strike is 90 score", () => {
        bowling.addThrow(10);
        bowling.addThrow(10);
        bowling.addThrow(10);
        bowling.addThrow(10);
        expect(bowling.getScore()).toBe(90);
    });

    it("all throws strike", () => {
        bowling.addThrow(10);
        bowling.addThrow(10);
        bowling.addThrow(10);
        bowling.addThrow(10);
        bowling.addThrow(10);
        bowling.addThrow(10);
        bowling.addThrow(10);
        bowling.addThrow(10);
        bowling.addThrow(10);
        bowling.addThrow(10);
        bowling.addThrow(10);
        expect(bowling.getScore()).toBe(300);
    });
});
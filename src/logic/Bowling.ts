import {Frame} from '../logic/Frame';

export class Bowling {
    public frames: Array<Frame> = [];
    private score: number = 0;
    public frameIndex: number = 0;

    // Add throw.
    // pins - number of knock out pins.
    public addThrow(pins: number): void {

        let frame: Frame = this.frames[this.frameIndex];
        let prevFrame: Frame = this.frames[this.frameIndex - 1];

        // first throw in frame.
        if (frame === undefined) {
            frame = new Frame();
            this.frames.push(frame);
            frame.addThrow(pins);

            // analise privies frame.
            if (this.frameIndex > 0) {
                if (prevFrame.isSpare || prevFrame.isStrike) {
                    prevFrame.addBonusScore(pins);
                }
            }
            // analise privies privies frame. of two strikes.
            if (this.frameIndex > 1) {
                let prevPrevFrame: Frame = this.frames[this.frameIndex - 2];
                if (prevPrevFrame.isStrike) {
                    prevPrevFrame.addBonusScore(pins);
                }
            }

            // if strike, then frame ends.
            if (pins === 10) {
                this.frameIndex++;
            }

        // second throw in frame.
        } else {
            frame.addThrow(pins);
            let frameScore: number = frame.getFrameScore();
            this.score = frame.getFrameScore();
            this.frameIndex++;

            // analise privies frame.
            if (this.frameIndex > 1) {
                if (prevFrame.isStrike) {
                    prevFrame.addBonusScore(pins);
                }
            }
        }
    }

    // Get current score.
    public getScore(): number {
        let totalScore: number = 0;
        this.frames.forEach(function (frame) {
            totalScore += frame.getFrameScore();
        });
        return totalScore;
    }

}
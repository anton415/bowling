export class Bowling {
    // Throws array.
    private throws: Array<number> = [];

    // Add throw.
    // pins - number of knock out pins.
    public addThrow(pins: number): void {
        this.throws.push(pins);
    }

    // Get score.
    // Game = 10 frames (or 20 throws).
    // Frame = 2 throws.
    // return score number.
    public getScore(): number {
        let score: number = 0;
        
        for (let frameIndex = 0, throwIndex = 0; frameIndex < 10; frameIndex++) {
            // Add to score all knock out pins after two throws.
            score += this.throws[throwIndex] + this.throws[throwIndex + 1];

            // If spare or strike
            // then increase the score by the number of pins knock out in next throw.
            if (this.isSpare(throwIndex) || this.isStrike(throwIndex)) {
                score += this.throws[throwIndex + 2];
            }

            // If strike
            // then only one throw in the frame.
            if (this.isStrike(throwIndex)) {
                throwIndex++;
            } else { // else player have two throw in frame.
                throwIndex += 2;
            }
        }

        return score;
    }

    // Is spare?
    private isSpare(throwIndex: number): boolean {
        return this.throws[throwIndex] + this.throws[throwIndex + 1] === 10;
    }

    // Is strike?
    private isStrike(throwIndex: number): boolean {
        return this.throws[throwIndex] === 10;
    }
}
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
        
        for (let frameIndex = 0, throwIndex = 0; frameIndex < 10; frameIndex++, throwIndex += 2) {
            // Number of knock out pins in first throw.
            let firstThrow: number = this.throws[throwIndex];
            // Number of knock out pins in second throw.
            let secondThrow: number = this.throws[throwIndex + 1];
            // Add to score all knock out pins after two throws.
            score += firstThrow + secondThrow;

            // If spare or strike
            // then increase the score by the number of pins knock out in next throw.
            if (firstThrow + secondThrow === 10 || firstThrow === 10) {
                score += this.throws[throwIndex + 2];
            }

            // If strike
            // then the frame ends.
            if (firstThrow === 10) {
                throwIndex--;
            }
        }

        return score;
    }
}
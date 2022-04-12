export class Bowling {
    // Score number.
    private score: number = 0;

    // Add throw.
    // pins - number of knock out pins.
    public addThrow(pins: number): void {
        this.score += pins;
    }

    // Get score.
    // return score number.
    public getScore(): number {
        return this.score;
    }
}
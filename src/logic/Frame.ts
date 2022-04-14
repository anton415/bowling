export class Frame {
    // Throws array.
    public throws: Array<number> = [];
    public throwIndex: number = 0;
    private frameScore: number = 0;
    public isSpare: boolean = false;
    public isStrike: boolean = false;

    // Add throw.
    // pins - number of knock out pins.
    public addThrow(pins: number): void {
        this.throws.push(pins);
        this.frameScore += pins;
        this.throwIndex++;

        if (pins === 10) {
            this.isStrike = true;
        }

        if (this.throwIndex === 2 && this.frameScore === 10) {
            this.isSpare = true;
        }
    }

    // Get current score.
    public getFrameScore(): number {
        return this.frameScore;
    }

    // Add bonus score, when get space or strike.
    public addBonusScore(bonusScore: number): void {
        this.frameScore += bonusScore;
    }
}
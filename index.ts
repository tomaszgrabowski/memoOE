export class Tile {
    constructor (
        private value: string = '',
        private visible: boolean = false,
        private locked: boolean = false
    ) {
    }

    public toggleVisible = (): void => {
        if ( this.locked === false ) {
            this.visible = !this.visible;
        }
    };

    public setLocked = (): void => {
        this.locked = true;
    };
}

export class Board {
    private tiles: Tile[] = [];

    constructor (private size: number) {
        for ( let i = 0; i <= 20; i++ ) {
            const tile = new Tile(i.toString());
            this.tiles.push(tile);
        }
    }
}

export class Program{
    run = () => new Board(20);

}

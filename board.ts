import { Tile } from './tile';

export class Board {
    private tiles: Tile[] = [];

    constructor ( private size: number, private element: HTMLElement ) {
        for ( let i = 0; i < size; i++ ) {
            this.createNewTilesTuple( i );
        }
    }

    public shuffleBoard = (): void => {
        let ctr = this.tiles.length;
        let temp;
        let index;
        while ( ctr > 0 ) {
            index = Math.floor( Math.random() * ctr );
            ctr--;
            temp = this.tiles[ctr];
            this.tiles[ctr] = this.tiles[index];
            this.tiles[index] = temp;
        }
    };

    public render = (): void => {
        this.tiles.forEach( tile => this.element.append( tile.render() ) );
    };

    private createNewTilesTuple = ( i: number ) => {
        this.createNewTile( i );
        this.createNewTile( i );
    };

    private createNewTile ( i: number ) {
        const tile = new Tile( i.toString() );
        this.tiles.push( tile );
    }
}


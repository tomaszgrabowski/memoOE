import { Tile } from './tile';

export class Engine {
    private static tile: Tile | null = null;

    public static compareTileValue = ( tile: Tile ): void => {
        if ( Engine.tile === null ) {
            Engine.tile = tile;
        } else {
            if ( Engine.tile.value === tile.value ) {
                Engine.tile.locked = true;
                tile.locked = true;
                console.log( 'HIT!' );
            } else {
                Engine.tile.visible = false;
                tile.visible = false;
                console.log( 'FAIL!' );
                Engine.tile = null;
            }
        }
    };
}

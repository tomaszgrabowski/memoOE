import { Tile } from './tile';

export class Engine {
    public static clickCounter: number = 0;
    private static tile: Tile | null = null;

    private static counterObservers: ObserverDelegateFunc[] = [];

    public static subscribe = ( observerDelegate: ObserverDelegateFunc ) => {
        Engine.counterObservers.push( observerDelegate );
    };

    public static checkTile = ( tile: Tile ): void => {
        Engine.incrementCounterAndSendUpdate();
        Engine.compareClikedTiles( tile );
    };

    private static compareClikedTiles ( tile: Tile ) {
        if ( Engine.tile === null ) {
            tile.reveal();
            Engine.tile = tile;
        } else {
            if ( tile.value === Engine.tile.value ) {
                tile.reveal();
                console.log( 'HIT!' );
            } else {
                Engine.tile.hide();
                tile.hide();
                console.log( 'FAIL!' );
                Engine.tile = null;
            }
            Engine.tile = null;
        }
    }

    private static incrementCounterAndSendUpdate () {
        Engine.clickCounter++;
        Engine.update();
    }

    private static update () {
        Engine.counterObservers.forEach( func => func( Engine.clickCounter.toString() ) );
    }
}

export type ObserverDelegateFunc = ( payload: string ) => void;

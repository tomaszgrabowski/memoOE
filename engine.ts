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
        Engine.compareClickedTiles( tile );
    };

    private static compareClickedTiles ( tile: Tile ) {
        tile.reveal();
        if ( Engine.tile === null ) {
            Engine.tile = tile;
        } else {
            if ( tile.value === Engine.tile.value ) {
                Engine.tile = null;
            } else {
                setTimeout( () => this.hideTiles( tile ), 1000 );
            }
        }
    }

    private static hideTiles = ( tile: Tile ) => {
        tile.hide();
        if ( Engine.tile ) {
            Engine.tile.hide();
            Engine.tile = null;
        }
    };

    private static incrementCounterAndSendUpdate () {
        Engine.clickCounter++;
        Engine.update();
    }

    private static update () {
        Engine.counterObservers.forEach( func => func( this.getAttemptsNumber() ) );
    }

    private static getAttemptsNumber () {
        return Math.floor( Engine.clickCounter / 2 ).toString();
    }
}

export type ObserverDelegateFunc = ( payload: string ) => void;

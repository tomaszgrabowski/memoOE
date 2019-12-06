import { Tile } from './tile';

export class Engine {
    public static clickCounter: number = 0;
    private static storedTile: Tile | null = null;

    private static counterObservers: ObserverDelegateFunc[] = [];

    public static subscribe = ( observerDelegate: ObserverDelegateFunc ) => {
        Engine.counterObservers.push( observerDelegate );
    };

    public static checkTile = ( tile: Tile ): void => {
        Engine.incrementCounterAndSendUpdate();
        Engine.compareClikedTiles( tile );
    };

    private static compareClikedTiles ( tile: Tile ) {
        tile.reveal();
        if ( Engine.storedTile && tile.value !== Engine.storedTile.value ) {
            Engine.hideTilesAfterGivenMiliseconds( tile );
        }
        if ( Engine.storedTile && tile.value === Engine.storedTile.value ) {
            Engine.resetStoredTile();
        }
        Engine.storeTileIfNotExists( tile );
    }

    private static hideTilesAfterGivenMiliseconds ( tile: Tile ) {
        setTimeout( () => {
            tile.hide();
            if ( Engine.storedTile ) {
                Engine.storedTile.hide();
                Engine.storedTile = null;
            }
        }, 1000 );
    }

    private static resetStoredTile () {
        Engine.storedTile = null;
    }

    private static storeTileIfNotExists ( tile: Tile ) {
        if ( Engine.storedTile === null ) {
            Engine.storedTile = tile;
        }
    }

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

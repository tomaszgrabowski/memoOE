import { Tile } from './tile';

export class Engine {
    public static clickCounter: number = 0;
    private static tile: Tile | null = null;

    private static counterObservers: ObserverDelegateFunc[] = [];
    private static infoObservers: ObserverDelegateFunc[] = [];

    public static subscribeToCounter = ( observerDelegate: ObserverDelegateFunc ) => {
        Engine.counterObservers.push( observerDelegate );
    };

    public static subscribeToInfo = ( observerDelegate: ObserverDelegateFunc ) => {
        Engine.infoObservers.push( observerDelegate );
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
                Engine.infoObservers.forEach(func => func( ' Direct hit!!!'));
                Engine.tile = null;
            } else {
                Engine.infoObservers.forEach(func => func( ' Looser!!!'));
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
        Engine.updateCounterObservers();
    }

    private static updateCounterObservers () {
        Engine.counterObservers.forEach( func => func( this.getAttemptsNumber() ) );
    }

    private static getAttemptsNumber () {
        return Math.floor( Engine.clickCounter / 2 ).toString();
    }
}

export type ObserverDelegateFunc = ( payload: string ) => void;

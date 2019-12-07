import { Tile } from './tile';

export class Engine {
    public static clickCounter: number = 0;
    private static tile: Tile | null = null;

    private static counterObservers: ObserverDelegateFunc[] = [];
    private static infoObservers: ObserverDelegateFunc[] = [];

    public static subscribeToCounter = ( observerDelegate: ObserverDelegateFunc ): void => {
        Engine.counterObservers.push( observerDelegate );
    };

    public static subscribeToInfo = ( observerDelegate: ObserverDelegateFunc ): void => {
        Engine.infoObservers.push( observerDelegate );
    };

    public static checkTile = ( tile: Tile ): void => {
        Engine.incrementCounterAndSendUpdate();
        Engine.compareClickedTiles( tile );
    };

    private static compareClickedTiles = ( tile: Tile ): void => {
        tile.reveal();
        if ( Engine.tile === null ) {
            Engine.tile = tile;
        } else {
            if ( tile.value === Engine.tile.value ) {
                Engine.infoObservers.forEach(func => func( ' Hit!!!'));
                Engine.tile = null;
            } else {
                Engine.infoObservers.forEach(func => func( ' Fail!!!'));
                setTimeout( () => Engine.hideTiles( tile ), 1000 );
            }
        }
    };

    private static hideTiles = ( tile: Tile ): void => {
        tile.hide();
        if ( Engine.tile ) {
            Engine.tile.hide();
            Engine.tile = null;
        }
    };

    private static incrementCounterAndSendUpdate = () : void => {
        Engine.clickCounter++;
        Engine.updateCounterObservers();
    };

    private static updateCounterObservers = (): void => {
        Engine.counterObservers.forEach( func => func( Engine.getAttemptsNumber() ) );
    };

    private static getAttemptsNumber = (): string =>  {
        return Math.floor( Engine.clickCounter / 2 ).toString();
    }
}

export type ObserverDelegateFunc = ( payload: string ) => void;

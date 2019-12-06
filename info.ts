import { Engine, ObserverDelegateFunc } from './engine';

export class Info {
    constructor ( private info: HTMLElement ) {
        this.update( 'Let the game begin!!!' );
        Engine.subscribeToInfo( this.update );
    }

    private update: ObserverDelegateFunc = ( payload: string ) => {
        this.info.classList.add( 'info' );
        this.info.innerText = `${payload}`;
        setTimeout( () => {
            this.info.classList.remove( 'info' );
            this.info.innerText = ``;
        }, 2000 );

    };
}

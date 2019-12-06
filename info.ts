import { Engine, ObserverDelegateFunc } from './engine';

export class Info {
    constructor ( private info: HTMLElement ) {
        this.update( 'Let the game begin!!!' );
        Engine.subscribeToInfo( this.update );
    }

    private update: ObserverDelegateFunc = ( payload: string ) => {
        this.info.classList.remove( 'hidden' );
        this.info.classList.add( 'revealed' );
        this.info.classList.remove( 'bigger' );
        this.info.classList.add( 'smaller' );
        this.info.innerHTML = `<span>${payload}</span>`;
        setTimeout( () => {
            this.info.classList.remove( 'revealed' );
            this.info.classList.add( 'hidden' );
            this.info.classList.remove( 'smaller' );
            this.info.classList.add( 'bigger' );
        }, 1000 );

    };
}

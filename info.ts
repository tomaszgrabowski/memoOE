import { Engine, ObserverDelegateFunc } from './engine';

export class Info {
    constructor ( private info: HTMLElement ) {
        this.update( 'Start!!!' );
        Engine.subscribeToInfo( this.update );
    }

    private update: ObserverDelegateFunc = ( payload: string ): void => {
        this.info.classList.add( 'info' );
        this.info.innerText = `${payload}`;
        setTimeout( () => {
            this.info.classList.remove( 'info' );
            this.info.innerText = ``;
        }, 2000 );

    };
}

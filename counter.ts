import { Engine, ObserverDelegateFunc } from './engine';

export class Counter {
    constructor ( private counter: HTMLElement ) {
        this.update( '0' );
        Engine.subscribeToCounter( this.update );
    }

    private update: ObserverDelegateFunc = ( payload: string ) => {
        this.counter.innerText = `Attempts: ${ payload }.`;
    };
}

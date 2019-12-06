import { Engine, ObserverDelegateFunc } from './engine';

export class Counter {
    constructor ( private counter: HTMLElement ) {
        this.update(0);
        Engine.subscribe(this.update)
    }

    private update: ObserverDelegateFunc = (payload: number) => {
        this.counter.innerText = `You clicked: ${payload.toString()} times.`;
    };
}

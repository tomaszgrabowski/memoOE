import { Program } from './program';

console.log( 'Lets play a game...' );
const gameElement: HTMLElement | null = document.getElementById( 'game' );
const counter: HTMLElement | null = document.getElementById( 'counter' );
if ( gameElement !== null && counter ) {
    const app = new Program( gameElement, counter );
    app.run();
}


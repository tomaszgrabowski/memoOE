import { Program } from './program';

console.log( 'Lets play a game...' );
const gameElement: HTMLElement | null = document.getElementById( 'game' );
if ( gameElement !== null ) {
    const app = new Program( gameElement );
    app.run();
}


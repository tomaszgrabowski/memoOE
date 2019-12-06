import { Program } from './program';

const gameElement: HTMLElement | null = document.getElementById( 'game' );
const counter: HTMLElement | null = document.getElementById( 'counter' );
const info: HTMLElement | null = document.getElementById( 'info' );
if ( gameElement && counter && info) {
    const app = new Program( gameElement, counter, info );
    app.run();
}


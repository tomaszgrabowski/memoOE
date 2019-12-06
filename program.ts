import { Board } from './board';
import { Counter } from './counter';
import { Info } from './info';

export class Program {

    constructor (
        private gameBoardElement: HTMLElement,
        private counterElement: HTMLElement,
        private info: HTMLElement ) {
    }

    public run = () => {
        this.createGameBoard();
        this.createCounter();
        this.createInfoElement();
    };

    private createInfoElement = (): void => {
        const info = new Info( this.info );
    };

    private createCounter = (): void => {
        const counter = new Counter( this.counterElement );
    };

    private createGameBoard = (): void => {
        const board = new Board( 10, this.gameBoardElement );
        board.shuffleBoard();
        board.render();
    };
}


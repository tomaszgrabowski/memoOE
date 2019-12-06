import { Board } from './board';
import { Counter } from './counter';

export class Program {

    constructor ( private gameBoardElement: HTMLElement, private counterElement: HTMLElement ) {
    }

    public run = () => {
        this.createGameBoard();
        this.createCounter();
    };

    private createCounter = () => {
        const counter = new Counter( this.counterElement );
    };

    private createGameBoard = () => {
        const board = new Board( 10, this.gameBoardElement );
        board.shuffleBoard();
        board.render();
    }
}

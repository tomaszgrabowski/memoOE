import { Board } from './board';

export class Program {

    constructor ( private element: HTMLElement ) {
    }

    public run = () => {
        const board = new Board( 10, this.element );
        board.shuffleBoard();
        board.render();
    };
}

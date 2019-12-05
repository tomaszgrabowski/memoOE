import { Engine } from './engine';

export class Tile {

    private div: HTMLElement | null = null;

    private cssClasses: string[] = ['inline', 'tile', 'hidden'];

    constructor (
        public value: string = '',
        public visible: boolean = false,
        public locked: boolean = false
    ) {
    }

    public setLocked = (): void => {
        this.locked = true;
    };

    public render = (): HTMLElement => {
        this.div = document.createElement( 'div' );
        this.div.innerHTML = this.value;
        this.cssClasses.forEach( item => {
            if ( this.div ) {
                this.div.classList.add( item );
            }
        } );
        this.div.onclick = this.onClick;
        return this.div;
    };

    private reveal = (): void => {
        if ( this.visible ) {
            if ( this.div ) {
                this.div.classList.add( 'revealed' );
            }
        }
    };

    private onClick = (): void => {
        console.log( 'click' );
        this.visible = true;
        Engine.compareTileValue( this );
        this.reveal();
    };
}


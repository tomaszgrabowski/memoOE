import { Engine } from './engine';

export class Tile {

    private div: HTMLElement | null = null;

    private cssClasses: string[] = ['inline', 'tile', 'hidden'];

    constructor (
        public value: string = ''
    ) {
    }

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

    public reveal = (): void => {
        if ( this.div ) {
            this.div.classList.add( 'revealed' );
        }

    };

    public hide = (): void => {
        if ( this.div ) {
            this.div.classList.remove( 'revealed' );
        }

    };

    private onClick = (): void => {
        console.log( 'click' );
        Engine.checkTile( this );

    };
}


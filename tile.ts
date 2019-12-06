import { Engine } from './engine';

export class Tile {

    private div: HTMLElement | null = null;
    private visible: boolean = false;

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
            this.visible = true;
        }

    };

    public hide = (): void => {
        if ( this.div ) {
            this.div.classList.remove( 'revealed' );
            this.visible = false;
        }

    };

    private onClick = (): void => {
        if ( this.visible === false ){
            Engine.checkTile( this );
        }
    };
}


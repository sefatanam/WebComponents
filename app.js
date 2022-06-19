import { LitElement, css, html } from 'https://cdn.skypack.dev/lit';

export default class SCounter extends LitElement
{
    static properties = {
        count: { state: false },
        player: { state: false }
    }

    static styles = css`
    
    button{
        padding:0.5rem 1rem;
        color:red;
        background:'white';
        border:none;
    }
    
    `

    _plus()
    {
        this.count++;
    }

    _minus()
    {
        this.count--;
    }


    constructor()
    {
        super();
        this.count = 0;
    }

    render()
    {
        return html`
        <button @click=${this._minus}>-</button>
         ${this.player} : ${this.count} 
        <button @click=${this._plus}>+</button>

        `
    }
}

customElements.define('s-counter', SCounter)
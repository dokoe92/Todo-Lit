import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('button-element')
export class ButtonElement extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
    
  `;

    // Declare reactive properties
    @property({type: String})
    name?: string = "button";

    @property({type: String})
    color?: string = "gray";

    // Render the UI as a function of component state
    render() {
        return html`
            <button style="background-color: ${this.color}">${this.name}</button>
        `;
    }
}
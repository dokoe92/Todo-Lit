import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('button-element')
export class ButtonElement extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
      @keyframes clickAnimation {
        0% { transform: scale(1); }
        50% { transform: scale(0.95); }
        100% { transform: scale(1); }
      }

      button:active {
        animation: clickAnimation 0.2s forwards;
      }
    
  `;

    // Declare reactive properties
    @property({type: String})
    name?: string;

    @property({type: String})
    color?: string;

    // Render the UI as a function of component state
    render() {
        return html`
            <button style="background-color: ${this.color}">${this.name}</button>
        `;
    }
}
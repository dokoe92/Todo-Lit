import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';


@customElement('task-container')
export class TaskContainer extends LitElement {
    static styles = css`
      .taskContainer { 
        border: 1px solid black;
      };
      
    `;

    @property()
    name = 'Somebody';

    render() {
        return html`
            <div class="taskContainer">Hi</div>
        
        `;
    }
}
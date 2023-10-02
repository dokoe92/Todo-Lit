import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('task-element')
export class TaskElement extends LitElement {
    static styles = css`p { color: blue }`;

    @property({type: String})
    taskName?: String;

    render() {
        return html`
            <div class="task-container">
                ${this.taskName}
            </div>
        `;
    }
}
import {html, css, LitElement} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';

@customElement('task-creator')
export class TaskCreator extends LitElement {
    static styles = css`
      p { color: blue }
    `;

    @property()
    name = 'Somebody';

    @query(".task-creator")
    _taskCreator!: HTMLFormElement;

    @query(".taskInput")
    _taskInput!: HTMLInputElement;

    createTask(event: Event) {
        event.preventDefault();
        let options = {
            bubbles: true,
            composed: true,
            detail: {
                task: this._taskInput.value
            }
        }
        let customEvent = (new CustomEvent("task-created", options));
        this.dispatchEvent(customEvent);
        this._taskInput.value = "";
    }

    handleFormSubmit(event: Event) {
        event.preventDefault();
    }

    render() {
        return html`
            <form class="task-creator"  @submit="${this.handleFormSubmit}">
                <input type="text" class="taskInput">
                <button-element @click="${this.createTask}" name="Button"></button-element>
            </form>
        `;
    }
}
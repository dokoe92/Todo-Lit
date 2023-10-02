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
        let task = document.createElement("task-element");
        task.setAttribute("taskName", this._taskInput.value);
        this._taskCreator.appendChild(task);
        this._taskCreator.value = "";
        console.log(this._taskInput)

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
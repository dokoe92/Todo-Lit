import {html, css, LitElement} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';


@customElement('task-container')
export class TaskContainer extends LitElement {
    static styles = css`
      .taskContainer { 
        border: 1px solid black;
      };
    `;

    @query(".taskContainer")
    _taskContainer!:HTMLElement;

    handleTaskCreated(e: CustomEvent<any>) {
        console.log(e.detail);
        let newTask = document.createElement("task-element");
        newTask.setAttribute("taskName", e.detail.task);
        this._taskContainer.appendChild(newTask)
    }
    render() {
        return html`
            <div @task-created="${this.handleTaskCreated}">
                <div class="taskContainer" >Hi</div>
                <task-creator></task-creator>
            </div>

        
        `;
    }


}
import './style.scss'
import {addFunctional} from "./addFunctional.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="modal" id="modal">
        <div class="modal__content">
          <h2 class="modal__heading" id="modalHeading">Add Task</h2>
          <div class="modal__options">
            <label class="modal__option" for="title">
                <h3 class="modal__option-name">Title:</h3>
                <input type="text" name="title" id="modalTitle" required>
            </label>
            <label class="modal__option" for="description">
              <h3 class="modal__option-name">Description:</h3>
              <input type="text" name="description" id="modalDescription">
            </label>
            <label class="modal__option" for="date">
              <h3 class="modal__option-name">Date:</h3>
              <input type="date" name="date" id="modalDate" required>
            </label>
            <label class="modal__option" for="tag">
              <h3 class="modal__option-name">Tag:</h3>
              <input type="text" name="tag" id="modalTag" required>
            </label>
            <label class="modal__option">
              <h3 class="modal__option-name">Priority:</h3>
              <div class="modal__option-radio-wrapper">
                <label for="priorityHigh">
                    <input type="radio" name="priority" value="High" id="priorityHigh">
                    <span for="priorityHigh">High</span>
                </label>
                <label for="priorityNormal">
                    <input checked type="radio" name="priority" value="Normal" id="priorityNormal">
                    <span for="priorityNormal">Normal</span>
                </label>
                <label for="priorityLow">
                    <input type="radio" name="priority" value="Low" id="priorityLow">
                    <span for="priorityLow">Low</span>
                </label>
              </div>
            </label>
          </div>
          <div class="modal__controls">
            <button type="submit" class="button modal__button" id="saveModalButton">Save</button>
            <button type="submit" class="button modal__button" id="editModalButton">Edit</button>
            <button class="button modal__button" id="cancelModalButton">Cancel</button>
          </div>
        </div>
      </div>
      <div>
        <header class="header">
          <div class="header__media">
            <span class="header__logo logo">Taska |</span>
            <a href="https://github.com/katsuAZ" target="_blank" class="Header__link">My Git</a>
          </div>
          <button class="button header__button" id="addTaskButton">Add new Task</button>
        </header>
        <section class="section">
          <aside class="sidebar">
            <h3 class="sidebar__heading filters__heading">Filters</h3>
            <ul class="sidebar__list filters__list">
              <li class="sidebar__option filters__option">All tasks</li>
              <li class="sidebar__option filters__option">Today</li>
              <li class="sidebar__option filters__option">Important</li>
              <li class="sidebar__option filters__option">Completed</li>
            </ul>
            <h3 class="sidebar__heading tags__heading">Tags</h3>
            <ul class="sidebar__list tags__list">
              <li class="sidebar__option tags__option">#Work</li>
              <li class="sidebar__option tags__option">#Personal</li>
              <li class="sidebar__option tags__option">#Education</li>
            </ul>
            <h3 class="sidebar__heading filters__heading">Sort</h3>
            <ul class="sidebar__list filters__list">
              <li class="sidebar__option filters__option">By Date</li>
              <li class="sidebar__option filters__option">By Priority</li>
              <li class="sidebar__option filters__option">By Alphabet</li>
            </ul>
          </aside>
          <main class="task-list">
            <h2 class="task-list__heading">Tasks</h2>
            <div class="task-list__layout" id="taskListLayout">
            </div>
          </main>
        </section>
      </div>
`

addFunctional();
import './style.scss'
import {addFunctional} from "./addFunctional.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="modal" id="modal">
        <div class="modal__content">
          <label class="modal__heading" id="modalHeading">Add Task</label>
          <div class="modal__options">
            <div class="modal__option">
              <label class="modal__option-name" for="title">Title:</label>
              <input type="text" name="title" id="modalTitle" required>
            </div>
            <div class="modal__option">
              <label class="modal__option-name" for="description">Description:</label>
              <input type="text" name="description" id="modalDescription">
            </div>
            <div class="modal__option">
              <label class="modal__option-name" for="date">Date:</label>
              <input type="date" name="date" id="modalDate" required>
            </div>
            <div class="modal__option">
              <label class="modal__option-name" for="tag">Tag:</label>
              <input type="text" name="tag" id="modalTag" required>
            </div>
            <div class="modal__option">
              <label class="modal__option-name">Priority:</label>
              <div class="modal__option-radio-wrapper">
                <input type="radio" name="priority" value="High" required id="priorityHigh">
                <label for="priorityHigh">High</label>
                <input checked type="radio" name="priority" value="Normal" required id="priorityNormal">
                <label for="priorityNormal">Normal</label>
                <input type="radio" name="priority" value="Low" required id="priorityLow">
                <label for="priorityLow">Low</label>
              </div>
            </div>
          </div>
          <div class="modal__controls">
            <button type="submit" class="button modal__button" id="saveModalButton">Save</button>
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
              <li class="sidebar__option tags__option">
                <button class="button sidebar__button" id="addTagButton">Add Tag</button>
              </li>
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
import './style.scss'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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
                <li class="sidebar__option filters__option">By date</li>
                <li class="sidebar__option filters__option">By priority</li>
                <li class="sidebar__option filters__option">By Alphabet</li>
            </ul>
        </aside>
        <main class="task-list">
            <h2 class="task-list__heading">Tasks</h2>
            <div class="task-list__layout" id="taskListLayout">
                <div class="card task-list__card">
                    <div class="card__heading">
                        <input type="checkbox" class="card__status">
                        <h4 class="card__title">Be kind</h4>
                    </div>
                    <div class="card__options">
                        <p class="card__date">Today</p>
                        <span class="card__separator">|</span>
                        <p class="card__tag">Personal</p>
                        <span class="card__separator">|</span>
                        <p class="card__priority">High</p>
                    </div>
                    <div class="card__buttons">
                        <button class="button card__edit-button" id="editTaskButton">Edit</button>
                        <button class="button card__delete-button" id="deleteTaskButton">Delete</button>
                    </div>
                </div>
                <div class="card task-list__card">
                    <div class="card__heading">
                        <input type="checkbox" class="card__status">
                        <h4 class="card__title">Be kind</h4>
                    </div>
                    <div class="card__options">
                        <p class="card__date">Today</p>
                        <span class="card__separator">|</span>
                        <p class="card__tag">Personal</p>
                        <span class="card__separator">|</span>
                        <p class="card__priority">High</p>
                    </div>
                    <div class="card__buttons">
                        <button class="button card__edit-button" id="editTaskButton">Edit</button>
                        <button class="button card__delete-button" id="deleteTaskButton">Delete</button>
                    </div>
                </div>
                <div class="card task-list__card">
                    <div class="card__heading">
                        <input type="checkbox" class="card__status">
                        <h4 class="card__title">Be kind</h4>
                    </div>
                    <div class="card__options">
                        <p class="card__date">Today</p>
                        <span class="card__separator">|</span>
                        <p class="card__tag">Personal</p>
                        <span class="card__separator">|</span>
                        <p class="card__priority">High</p>
                    </div>
                    <div class="card__buttons">
                        <button class="button card__edit-button" id="editTaskButton">Edit</button>
                        <button class="button card__delete-button" id="deleteTaskButton">Delete</button>
                    </div>
                </div>
                <div class="card task-list__card">
                    <div class="card__heading">
                        <input type="checkbox" class="card__status">
                        <h4 class="card__title">Be kind</h4>
                    </div>
                    <div class="card__options">
                        <p class="card__date">Today</p>
                        <span class="card__separator">|</span>
                        <p class="card__tag">Personal</p>
                        <span class="card__separator">|</span>
                        <p class="card__priority">High</p>
                    </div>
                    <div class="card__buttons">
                        <button class="button card__edit-button" id="editTaskButton">Edit</button>
                        <button class="button card__delete-button" id="deleteTaskButton">Delete</button>
                    </div>
                </div>
                <div class="card task-list__card">
                    <div class="card__heading">
                        <input type="checkbox" class="card__status">
                        <h4 class="card__title">Be kind</h4>
                    </div>
                    <div class="card__options">
                        <p class="card__date">Today</p>
                        <span class="card__separator">|</span>
                        <p class="card__tag">Personal</p>
                        <span class="card__separator">|</span>
                        <p class="card__priority">High</p>
                    </div>
                    <div class="card__buttons">
                        <button class="button card__edit-button" id="editTaskButton">Edit</button>
                        <button class="button card__delete-button" id="deleteTaskButton">Delete</button>
                    </div>
                </div>
                <div class="card task-list__card">
                    <div class="card__heading">
                        <input type="checkbox" class="card__status">
                        <h4 class="card__title">Be kind</h4>
                    </div>
                    <div class="card__options">
                        <p class="card__date">Today</p>
                        <span class="card__separator">|</span>
                        <p class="card__tag">Personal</p>
                        <span class="card__separator">|</span>
                        <p class="card__priority">High</p>
                    </div>
                    <div class="card__buttons">
                        <button class="button card__edit-button" id="editTaskButton">Edit</button>
                        <button class="button card__delete-button" id="deleteTaskButton">Delete</button>
                    </div>
                </div>
            </div>
        </main>
    </section>
  </div>
`

(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();function L(){const o=document.querySelector("#modal"),l=document.querySelector("#addTaskButton"),u=document.querySelector("#saveModalButton"),s=document.querySelector("#cancelModalButton");let e;const t=document.querySelector("#taskListLayout"),i=document.querySelector("#modalTitle"),d=document.querySelector("#modalDescription"),n=document.querySelector("#modalDate"),r=document.querySelector("#modalTag"),p=document.querySelector('input[name="priority"]:checked');let _=[];l==null||l.addEventListener("click",()=>{o&&(o.style.display="block")}),s==null||s.addEventListener("click",()=>{o&&(o.style.display="none")}),u==null||u.addEventListener("click",()=>{g(),b()});function b(){o&&(o.style.display="none"),i&&i.value.length>0&&(i.value=""),d&&d.value.length>0&&(d.value=""),n&&n.value.length>0&&(n.value=""),r&&r.value.length>0&&(r.value=""),p&&p.value}function y(){e=document.querySelectorAll(".card__delete-button"),e==null||e.forEach((c,a)=>{c.addEventListener("click",function h(f){var v;_.splice(a,1),(v=f.currentTarget)==null||v.removeEventListener("click",h),m()})})}function m(){let c="";_.length<1?t&&(t.innerHTML="<p>There are no more tasks left. =D</p>"):(_.forEach(a=>{c+=`
                    <div class="card task-list__card">
                        <div class="card__heading">
                            <input type="checkbox" class="card__status">
                            <h4 class="card__title">${a.title}</h4>
                        </div>
                        <p class="card__description">${a.description}</p>
                        <div class="card__options">
                            <p class="card__date">${a.date.toLocaleDateString()==new Date().toLocaleDateString()?"Today":a.date.toLocaleDateString()}</p>
                            <span class="card__separator">|</span>
                            <p class="card__tag">${a.tag}</p>
                            <span class="card__separator">|</span>
                            <p class="card__priority">${a.priority}</p>
                        </div>
                        <div class="card__buttons">
                            <button class="button card__edit-button">Edit</button>
                            <button class="button card__delete-button">Delete</button>
                        </div>
                    </div>
                `}),t&&(t.innerHTML=c))}m();function g(){let c={id:_.length,title:i&&i.value.length>0?i.value:"No title",description:d&&d.value.length>0?d.value:"No description",date:n&&n.value.length>0?new Date(n.value):new Date,tag:r&&r.value.length>0?r.value:"Personal",priority:p?p.value:"Normal"};_.push(c),m(),y()}}document.querySelector("#app").innerHTML=`
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
`;L();

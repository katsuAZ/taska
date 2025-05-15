export function addFunctional () {
    interface TaskInfo {
        id: number,
        title: string,
        description: string,
        date: Date,
        tag: string,
        priority: string,
    }

    const modalWindow:HTMLDivElement | null = document.querySelector('#modal');
    const addTaskButton:HTMLButtonElement | null = document.querySelector('#addTaskButton');
    const saveModalButton:HTMLButtonElement | null = document.querySelector('#saveModalButton');
    const cancelModalButton:HTMLButtonElement | null = document.querySelector('#cancelModalButton');
    const deleteTaskButtons:NodeListOf<Element> = document.querySelectorAll('.card__delete-button');

    const taskListLayout:HTMLDivElement | null = document.querySelector('#taskListLayout');

    const modalInputTitle:HTMLInputElement | null = document.querySelector('#modalTitle');
    const modalInputDescription:HTMLInputElement | null = document.querySelector('#modalDescription');
    const modalInputDate:HTMLInputElement | null = document.querySelector('#modalDate');
    const modalInputTag:HTMLInputElement | null = document.querySelector('#modalTag');
    const modalInputPriority:HTMLInputElement | null = document.querySelector('input[name="priority"]:checked');

    // let task: TaskInfo = {
    //     id: 0,
    //     title: 'Be kind!',
    //     description: 'Always be kind to others! But ne zabivai pro pohui',
    //     date: new Date(0),
    //     tag: 'Personal',
    //     priority: 'High',
    // }

    // let tagList: string[] = ['Work', 'Personal', 'Education'];
    let taskList: TaskInfo[] = [];

    addTaskButton?.addEventListener('click', () => {
        modalWindow ? modalWindow.style.display = "block" : undefined;
    });

    cancelModalButton?.addEventListener('click', () => {
        modalWindow ? modalWindow.style.display = "none" : undefined;
    });

    saveModalButton?.addEventListener('click', () => {
        addNewTask();
        clearModal();
    });

    deleteTaskButtons?.forEach((button, index) => {
        console.log(index);
        button.addEventListener('click', () => {
            console.log(index);
        });
    });

    function clearModal () {
        modalWindow ? modalWindow.style.display = "none" : undefined;
        modalInputTitle && modalInputTitle.value.length > 0 ?
            modalInputTitle.value = '' : undefined;
        modalInputDescription && modalInputDescription.value.length > 0 ?
            modalInputDescription.value = '' : undefined;
        modalInputDate && modalInputDate.value.length > 0 ?
            modalInputDate.value = '' : undefined;
        modalInputTag && modalInputTag.value.length > 0 ?
            modalInputTag.value = '' : undefined;
        modalInputPriority ?
            modalInputPriority.value : undefined;
    }

    function renderTasks () {
        let out: string = ``;
        if (taskList.length < 1) {
            taskListLayout ? taskListLayout.innerHTML = '<p>There are no more tasks left. =D</p>' : undefined;
        } else {
            taskList.forEach((task) => {
                out += `
                    <div class="card task-list__card">
                        <div class="card__heading">
                            <input type="checkbox" class="card__status">
                            <h4 class="card__title">${task.title}</h4>
                        </div>
                        <p class="card__description">${task.description}</p>
                        <div class="card__options">
                            <p class="card__date">${task.date.toLocaleDateString() == new Date().toLocaleDateString() ? 'Today' : task.date.toLocaleDateString()}</p>
                            <span class="card__separator">|</span>
                            <p class="card__tag">${task.tag}</p>
                            <span class="card__separator">|</span>
                            <p class="card__priority">${task.priority}</p>
                        </div>
                        <div class="card__buttons">
                            <button class="button card__edit-button">Edit</button>
                            <button class="button card__delete-button">Delete</button>
                        </div>
                    </div>
                `
            });
            taskListLayout ? taskListLayout.innerHTML = out : undefined;
        }
    }
    renderTasks();

    function addNewTask () {
        let newTask: TaskInfo = {
            id: taskList.length,
            title: modalInputTitle && modalInputTitle.value.length > 0 ?
                modalInputTitle.value : 'No title',
            description: modalInputDescription && modalInputDescription.value.length > 0 ?
                modalInputDescription.value : 'No description',
            date: modalInputDate && modalInputDate.value.length > 0 ?
                new Date(modalInputDate.value) : new Date(),
            tag: modalInputTag && modalInputTag.value.length > 0 ?
                modalInputTag.value : 'Personal',
            priority: modalInputPriority ?
                modalInputPriority.value : 'Normal',
        };
        taskList.push(newTask);
        renderTasks();
    }
}
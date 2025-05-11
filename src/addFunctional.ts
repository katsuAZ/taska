export function addFunctional () {
    const modalWindow:HTMLDivElement | null = document.querySelector('#modal');
    const addTaskButton:HTMLButtonElement | null = document.querySelector('#addTaskButton');
    const saveModalButton:HTMLButtonElement | null = document.querySelector('#saveModalButton');
    const cancelModalButton:HTMLButtonElement | null = document.querySelector('#cancelModalButton');

    if (addTaskButton != null &&
        modalWindow != null &&
        saveModalButton != null &&
        cancelModalButton != null) {

        addTaskButton.onclick = function () {
            modalWindow.style.display = "block";
        }

        cancelModalButton.onclick = function () {
            modalWindow.style.display = "none";
        }
    }
}
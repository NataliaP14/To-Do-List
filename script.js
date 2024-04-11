const input = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");


const updateCounter = () => {
    const completedTasks = document.querySelectorAll(".completed").length;
    const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

    completedCounter.textContent = completedTasks;
    uncompletedCounter.textContent = uncompletedTasks;
} 


const addTask = () => {
    const task = input.value.trim();
    if (!task) {
        alert("Please input a task");
        return;
    }

    const list = document.createElement("li");
    //adding user input inside the list container
    list.innerHTML = `
    <label>
    <input type = "checkbox">
    <span>${task}</span>
    </label>
    <button class = "delete-button">&times;</button>
    <button class ="edit-button">Edit</button>
    
    `;

    listContainer.appendChild(list);
    input.value = "";


    const checkbox = list.querySelector("input");
    const editButton = list.querySelector(".edit-button");
    const editTask = list.querySelector("span");
    const deleteButton = list.querySelector(".delete-button");

    //checks if user clicked checkbox
    const checkBoxClick = () => {
        list.classList.toggle("completed", checkbox.checked);
        updateCounter();
    }
    checkbox.addEventListener("click", checkBoxClick);

    //edit function 
    const editFunction = () => {
        const update = prompt("Edit task: ", editTask.textContent);
        if (update != null) {
            editTask.textContent = update;
            list.classList.remove("completed");
            checkbox.checked = false;
            updateCounter();
        }  
    }
    editButton.addEventListener("click", editFunction);


    const deleteFunction = () => {
        list.remove();
        updateCounter();
    }
    deleteButton.addEventListener("click", deleteFunction);
}


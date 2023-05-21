const readline = require('readline');

const ReadLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    function Task (description, dueDate, priority) {
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
}

const tasks = [];

function addTask() {
    ReadLine.question("Enter task description: ", (description) => {
        ReadLine.question("Enter due date: ", (dueDate) => {
            ReadLine.question("Enter priority: ", (priority) => {
                const task = new Task(description, dueDate, priority);
                tasks.push(task);
                console.log("Task added successfully!");
                displayMenu();
            });
        });
    });
}

function listAllTasks() {
    console.log("All tasks:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}) Description: ${task.description}, Due Date: ${task.dueDate}, Priority: ${task.priority}, Completed: ${task.completed}`);
    });
    displayMenu();
}

function listCompletedTasks() {
    const completedTasks = tasks.filter(task => task.completed);
    console.log("Completed tasks:");
    completedTasks.forEach((task, index) => {
        console.log(`${index + 1}) Description: ${task.description}, Due Date: ${task.dueDate}, Priority: ${task.priority}`);
    });
    displayMenu();
}

function markTaskAsDone() {
    ReadLine.question("Enter the task number to mark as done: ", (taskNumber) => {
        const index = parseInt(taskNumber) - 1;
        if (index >= 0 && index < tasks.length) {
            tasks[index].completed = true;
            console.log("Task marked as done!");
        } else {
            console.log("Invalid task number.");
        }
        displayMenu();
    });
}

function deleteTask() {
    ReadLine.question("Enter the task number to delete: ", (taskNumber) => {
        const index = parseInt(taskNumber) - 1;
        if (index >= 0 && index < tasks.length) {
            tasks.splice(index, 1);
            console.log("Task deleted!");
        } else {
            console.log("Invalid task number.");
        }
        displayMenu();
    });
}

function sortByDueDate() {
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    console.log("Tasks sorted by due date!");
    displayMenu();
}

function sortByPriority() {
    tasks.sort((a, b) => a.priority - b.priority);
    console.log("Tasks sorted by priority!");
    displayMenu ();
}

function clearAllTasks() {
    tasks.length = 0;
    console.log("All tasks deleted");
    displayMenu ();
}


function displayMenu() {
    console.log("***************************");
    console.log("Welcome to JS TODO-APP");
    console.log("***************************");
    console.log("Select an action:");
    console.log("1) Add a new task");
    console.log("2) List all tasks");
    console.log("3) List completed tasks");
    console.log("4) Mark a task as done");
    console.log("5) Delete a task");
    console.log("6) Sort tasks by due date");
    console.log("7) Sort tasks by priority");
    console.log("8) Clear all tasks");
    console.log("***************************");
    console.log("What's your choice?");
}


function List(choice) {
    switch (choice) {
        case '1':
            addTask();
            break;
        case '2':
            listAllTasks();
            break;
        case '3':
            listCompletedTasks();
            break;
        case '4':
            markTaskAsDone();
            break;
        case '5':
            deleteTask();
            break;
        case '6':
            sortByDueDate();
            break;
        case '7':
            sortByPriority();
            break;
        case '8':
            clearAllTasks();
            break;
        default:
            console.log("Invalid choice.");
            displayMenu();
            break;
    }
}

displayMenu();

ReadLine.on('line', (choice) => {
    List(choice.trim());
});

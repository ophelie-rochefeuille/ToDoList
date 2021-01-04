import "./style.css";

const ul = document.querySelector('ul');
const form = document.querySelector('form');
const input = document.querySelector('form > input');

console.log (form, input);

const todos = [
    {
        text: "je suis une todo",
        done: false
    },
    {
        text: "faire du Javascript",
        done: false
    },
]

form.addEventListener('submit', event => {
    event.preventDefault();
    const value = input.value;
    input.value = '';
    addTodo(value);
});

const displayTodo = () => {
    const todoNode = todos.map((todo, index) => {
return creatTodoElement (todo, index);
    })
    ul.innerHTML = '';
    ul.append (...todoNode)
}

const creatTodoElement = (todo, index) => {
    const li = document.createElement('li');
    const buttonDelete = document.createElement ('button');
    buttonDelete.innerHTML = 'Supprimer';
    buttonDelete.addEventListener ('click', (event) => { deleteTodo(index);
        event.stopPropagation();
    })
    li.innerHTML = `
    <span class="todo ${ todo.done ? 'done' : '' }"></span>
    <p> ${ todo.text }</p>
     `;
     li.addEventListener('click', () => {
         toggleTodo(index)
     })
     li.appendChild (buttonDelete);
     return li;
};

const addTodo = (text) => {
    todos.push({
        text,
        done: false
    });
    displayTodo();
} 

const deleteTodo = (index) => {
todos.splice(index, 1);
displayTodo();
}

const toggleTodo = index => {
    todos[index].done = !todos[index].done;
    displayTodo();
}

displayTodo();

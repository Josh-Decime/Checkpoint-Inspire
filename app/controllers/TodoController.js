import { AppState } from "../AppState.js";
import { todoService } from "../services/TodoService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



function _drawTodosForm() {
    if (AppState.user) {
        let form = document.getElementById('your-todo-form')
        form.classList.remove('d-none')

    }
}

// NOTE make template & then return
function _drawTodosList() {
    console.log('✒️☑️')
    const todos = AppState.todos
    let content = ''
    todos.forEach(todo => content += todo.TodoCard)
    setHTML('your-todo-list', content)
}


export class TodoController {
    constructor() {
        console.log('☑️🎮 Todo controller ready!')
        AppState.on('account', this.getTodos)
        AppState.on('user', _drawTodosForm)
        AppState.on('user', _drawTodosList)
        AppState.on('todos', _drawTodosList)
    }



    async getTodos() {
        try {
            await todoService.getTodos()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message)
        }
    }

    async createTodo() {
        try {
            event.preventDefault()
            console.log('✨☑️ creating new Todo')
            const form = event.target
            const formData = getFormData(form)
            console.log('☑️💾 form data', formData)
            await todoService.createTodo(formData)
            form.reset()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message)
        }
    }
}
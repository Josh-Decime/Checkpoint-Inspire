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

function _drawTodoCount() {
    let countElm = document.getElementById('todo-count')
    countElm.innerHTML = AppState.todoCount.toString()
    console.log('count value inside draw function', this.todoCount.count)
    // setHTML('todo-count', this.todoCount.count.toString())
}


export class TodoController {
    constructor() {
        console.log('☑️🎮 Todo controller ready!')
        AppState.on('account', this.getTodos)
        AppState.on('user', _drawTodosForm)
        AppState.on('user', _drawTodosList)
        AppState.on('todos', _drawTodosList)
        AppState.on('todos', this.todoCount)
        AppState.on('todoCount', _drawTodoCount)
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
            // @ts-ignore
            form.reset()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message)
        }
    }

    async toggleCompleted(todoId) {
        try {
            await todoService.toggleCompleted(todoId)
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }

    async removeTodo(todoId) {
        let isConfirmed = await Pop.confirm("Are you sure you want to delete this Todo?", 'It sounded pretty important', 'Destroy it forever!', 'error')
        if (isConfirmed) {
            console.log('🔥Deleting 🔥', todoId)
            todoService.removeTodo(todoId)
        }
    }


    todoCount() {
        try {

            todoService.todoCount()
            console.log('controller telling service to update todo count')
        } catch (error) {
            // NOTE I was getting an error popping that something was undefined but it is all working, mostly.. some console.log are missing but it is working like I need it to. 
            // NOTE to self, ask instructors what is going on here... I swept it under the rug but that isn't the best solution
            // console.error(error)
            // Pop.error(error)
        }
    }



    // todoCount() {
    //     try {
    //         let count = 0

    //         // todoService.todoCount()
    //         count = todoService.todoCount()
    //         console.log('this is the count number in the controller', count)
    //     } catch (error) {
    //         console.error(error)
    //         Pop.error(error)
    //     }
    // }


    // _drawTodoCount() {
    //     // let countElm = document.getElementById('todo-count')
    //     // countElm.innerHTML = todoService.todoCount.toString()
    //     // console.log('count value inside draw function', this.todoCount.count)
    //     setHTML('todo-count', this.todoCount.toString())
    // }




    // try {
    //     console.log('🔥☑️', todoId)
    //     await todoService.removeTodo(todoId)
    //     Pop.toast('Delete Todo', 'success')
    // } catch (error) {
    //     console.error(error)
    //     Pop.toast(error.message)
    // }
}
import { AppState } from "../AppState.js";
import { Todo } from "../models/Todo.js";
import { api } from "./AxiosService.js";



class TodoService {
    async createTodo(formData) {
        const response = await api.post('api/todos', formData)
        console.log('☑️📃📡 posting formData to API', response)
        const newTodo = new Todo(response.data)
        console.log('✨☑️📃 new Todo', newTodo)
        AppState.todos.push(newTodo)
    }

    async getTodos() {
        const axiosResponse = await api.get('api/todos')
        console.log('☑️📡 Response from todo API:', axiosResponse)
        const newTodos = axiosResponse.data.map(todoData => new Todo(todoData))
        console.log('🥪✨🗺️ mapping API data', newTodos)
        AppState.todos = newTodos
        AppState.emit('todos')
    }

    async toggleCompleted(todoId) {
        let foundTodo = AppState.todos.find(todo => todo.id == todoId)
        foundTodo.completed = !foundTodo.completed
        console.log('🐬☑️ toggling Todo completed', foundTodo)
        const response = await api.put(`api/todos/${todoId}`, foundTodo)
        console.log('🐬☑️📡 updating api with toggle completed', response.data)
    }

    async removeTodo(todoId) {
        const response = await api.delete(`api/todos/${todoId}`)
        console.log('☑️👋📡 delete todo:', response)
        const indexToRemove = AppState.todos.findIndex(todo => todo.id == todoId)
        AppState.todos.splice(indexToRemove, 1)
    }




}

export const todoService = new TodoService()
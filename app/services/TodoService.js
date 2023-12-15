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



    }





}

export const todoService = new TodoService()
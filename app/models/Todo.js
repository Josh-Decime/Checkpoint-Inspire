import { AppState } from "../AppState.js";


export class Todo {
  constructor(data) {
    this.id = data.id
    this.description = data.description
    this.completed = data.completed
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    this.creator = data.creator
    this.creatorId = data.creatorId
  }


  get TodoCard() {
    return `
<div class="">
  <div class="mt-1 d-flex justify-content-between bg-secondary rounded">
    <input type="checkbox" class="m-2 col-1" ${this.completed ? 'checked' : ''}
      onchange="app.TodoController.toggleCompleted('${this.id}')">
    <p class="text-center col-8 mt-1 mb-0"><b>${this.description}</b></p>
    <button class="btn btn-outline-danger " onclick="app.TodoController.removeTodo('${this.id}')" title="Delete this Todo?"><i class="mdi mdi-skull-scan"></i></button>
  </div>
</div>
        `
  }









}


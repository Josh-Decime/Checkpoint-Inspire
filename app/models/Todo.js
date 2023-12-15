import { AppState } from "../AppState.js";


export class Todo {
    constructor(data) {
        this.completed = data.completed
        this.description = data.description
        this.creatorId = data.creatorId
        this.creator = data.creator
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
    }


    get TodoCard() {
        return `
<div class="">
  <div class="mt-1 d-flex justify-content-between bg-secondary rounded">
    <input type="checkbox" class="m-2">
    <p class="text-center col-11">${this.description}</p>
  </div>
</div>
        `
    }







}


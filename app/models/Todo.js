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
}


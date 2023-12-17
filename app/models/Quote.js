import { AppState } from "../AppState.js";


export class Quote {
    constructor(data) {
        this.content = data.content
        this.author = data.author
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
    }


    get QuoteTemplate() {
        return `
<div>
  <h2 class="hover-parent">${this.content}</h2>
  <p class="hover-child">${this.author}</p>
</div>
        `
    }



}


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
<div class="hover-parent">
  <h2 class="readable">${this.content}</h2>
  <p class="hover-child  readable">- ${this.author}</p>
</div>
        `
    }



}


import { AppState } from "../AppState.js";


export class Background {
    constructor(data) {
        this.url = data.url
        this.query = data.query
        this.author = data.author
        this.largeImgUrl = data.largeImgUrl
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
    }


    get AuthorTemplate() {
        return `
        <p>Image by:</p>
        <p>${this.author}</p>
        `
    }






}


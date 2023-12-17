import { AppState } from "../AppState.js";
import { quoteService } from "../services/QuoteService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawQuote() {
    const quoted = AppState.quote
    let content = quoted.QuoteTemplate
    setHTML('quote-displayed', content)
}


export class QuoteController {
    constructor() {
        console.log('💬🎮 Quote controller here!')
        AppState.on('quote', _drawQuote)
        this.getQuote()
    }

    async getQuote() {
        try {
            await quoteService.getQuote()
        } catch (error) {

        }
    }
}
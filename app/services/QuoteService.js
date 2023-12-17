import { AppState } from "../AppState.js";
import { baseURL } from "../env.js";
import { Quote } from "../models/Quote.js";
import { api } from "./AxiosService.js";


class QuoteService {
    async getQuote() {
        const response = await api.get('https://sandbox.codeworksacademy.com/api/quotes')
        console.log('💬📡 quote from the API:', response.data)
        const newQuote = new Quote(response.data)
        // @ts-ignore
        AppState.quote = newQuote
        console.log('✨💬', AppState.quote)
    }
}

export const quoteService = new QuoteService()
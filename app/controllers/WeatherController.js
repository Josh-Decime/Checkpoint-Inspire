import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



export class WeatherController {
    constructor() {
        console.log('⛈️ weather controller is live')
        this.getWeather()
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message)
        }
    }








}
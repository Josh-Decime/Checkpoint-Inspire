import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js";


class WeatherService {
    async getWeather() {
        const response = await api.get('https://sandbox.codeworksacademy.com/api/weather')
        console.log('⛈️📡 weather from the API:', response.data)
        // const newWeather = response.data.map(weather => new Weather(weather))
        // AppState.weather = newWeather
        // console.log('✨⛈️', AppState.weather)


        const newWeather = new Weather(response.data)
        // @ts-ignore
        AppState.weather = newWeather
        console.log('✨⛈️', AppState.weather)
    }

}

export const weatherService = new WeatherService()
import { AppState } from "../AppState.js"
// TODO make your request to the weather endpoint of the sandbox api to get weather data, then build your model according to the data retrieved
// TODO convert your kelvin temp to farenheit and celsius in your contructor
// TODO add a boolean property to your model that keeps track of wether to display f/c
export class Weather {
    constructor(data) {
        this.main = data.main
        this.weather = data.weather
        this.name = data.name
        this.clouds = data.clouds
        this.wind = data.wind
        this.coord = data.coord
    }




}
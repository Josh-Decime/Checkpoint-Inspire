import { AppState } from "../AppState.js";
import { Background } from "../models/Background.js";
import { api } from "./AxiosService.js";


class BackgroundService {


    async getBackground() {
        const response = await api.get('https://sandbox.codeworksacademy.com/api/images')
        console.log('🎄 getting background image:', response.data)
        const newBackground = new Background(response.data)
        AppState.background = newBackground
        console.log('✨🎄', AppState.background)
    }


    //     const body = await response.json()
    //     console.log('🎄 running response through json', body)
    //      const newBg = body.map(bgData => new Background(bgData)) it said body.map is not a function
    //      console.log('✨🎄', newBg)


}

export const backgroundService = new BackgroundService()
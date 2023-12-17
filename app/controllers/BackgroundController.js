import { AppState } from "../AppState.js";
import { backgroundService } from "../services/BackgroundService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



export class BackgroundController {
    constructor() {
        console.log('🎄🎮')
        this.getBackground()
    }




    async getBackground() {
        try {
            await backgroundService.getBackground()
        } catch (error) {
            console.error(error)
            Pop.toast(error.message)
        }
    }

}
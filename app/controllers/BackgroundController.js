import { AppState } from "../AppState.js";
import { backgroundService } from "../services/BackgroundService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawBackgroundImage() {
    const background = AppState.background
    // NOTE it didn't recognize AuthorTemplate, Im moving on for more requirements revisit if theres time
    // let content = background.AuthorTemplate
    // setHTML('image-author', content)
    // @ts-ignore
    document.body.style.backgroundImage = `url(${background.largeImgUrl})`
    document.body.style.backgroundSize = "Cover"
}




export class BackgroundController {
    constructor() {
        console.log('🎄🎮 background images incoming!')
        AppState.on('background', _drawBackgroundImage)
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
import { setHTML } from "../utils/Writer.js";





export class TimeController {
    constructor() {
        this.getTime()
    }

    getTime() {
        let time = new Date().toLocaleTimeString()
        // console.log('🕒getting the time', time)
        setHTML('display-time', time)
    }

    timeInterval = setInterval(this.getTime, 1000)


}


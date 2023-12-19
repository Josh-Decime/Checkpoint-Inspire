import { Background } from './models/Background.js'
import { Quote } from './models/Quote.js'
import { Todo } from './models/Todo.js'
import { Weather } from './models/Weather.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'



class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null


  todos = [

    new Todo(
      {
        completed: false,
        description: "Your Todo is Loading"
      }
    ),
    new Todo(
      {
        completed: false,
        description: "They will be displayed shortly"
      }
    ),
  ]

  // todoCount = 0

  /**
   * @type {Background[]}
   */
  background = []

  /**
   * @type {Quote}
   */
  quote = new Quote({
    "content": "Quote will be displayed shortly",
    "author": "Site Creator"
  })

  /**
   * @type {Weather}
   */
  weather = new Weather({


  })







}

export const AppState = createObservableProxy(new ObservableAppState())
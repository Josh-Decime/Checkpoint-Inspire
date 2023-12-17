import { Background } from './models/Background.js'
import { Quote } from './models/Quote.js'
import { Todo } from './models/Todo.js'
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
        description: "Get the todo drawing to the page"
      }
    ),
    new Todo(
      {
        completed: false,
        description: "be able to check this box to complete it!"
      }
    ),
  ]

  todoCount = 0

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







}

export const AppState = createObservableProxy(new ObservableAppState())
import { AccountController } from "./controllers/AccountController.js";
import { BackgroundController } from "./controllers/BackgroundController.js";
import { HomeController } from "./controllers/HomeController.js";
import { QuoteController } from "./controllers/QuoteController.js";
import { TimeController } from "./controllers/TimeController.js";
import { TodoController } from "./controllers/TodoController.js";
import { WeatherController } from "./controllers/WeatherController.js";
import { AuthGuard } from "./services/AuthService.js";
import { weatherService } from "./services/WeatherService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [TodoController, BackgroundController, QuoteController, TimeController, WeatherController],
    view: /*html*/` `
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])





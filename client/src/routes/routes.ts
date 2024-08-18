import { Route } from '../models'
import { Home } from '../pages/home'

export const PATH = {
  home: '/',
}

export const routes: Route[] = [
  {
    path: PATH.home,
    component: Home,
  },
]

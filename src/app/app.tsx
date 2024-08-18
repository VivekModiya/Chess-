import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from '../routes'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(route => (
          <Route path={route.path} Component={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

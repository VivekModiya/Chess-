import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from '../routes'
import { CssBaseline } from '../tokens/cssBaseLine'

export function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        {routes.map(route => (
          <Route path={route.path} Component={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

import { MainPage } from './pages/main'
import { BuildPage } from './pages/build'
import { SettingsPage } from './pages/settings'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/build/:buildId">
          <BuildPage />
        </Route>
        <Route exact path="/settings">
          <SettingsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

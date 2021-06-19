import { MainPage } from './pages/Main'
import { BuildPage } from './pages/Build'
import { SettingsPage } from './pages/Settings'
import { BuildList } from './pages/BuildList'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/test">
          <BuildList />
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

import { NoSettings } from './pages/NoSettings'
import { BuildPage } from './pages/Build'
import { SettingsPage } from './pages/Settings'
import { BuildList } from './pages/BuildList'
import { NotFound } from './pages/404'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <BuildList />
        </Route>
        <Route exact path="/test">
          <NoSettings />
        </Route>
        <Route exact path="/build/:buildId">
          <BuildPage />
        </Route>
        <Route exact path="/settings">
          <SettingsPage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

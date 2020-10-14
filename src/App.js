import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './config/routes'
import withHelmet from './util/withHelmet'
import NavBar from './components/NavBar'
import GlobalStyle from './components/GlobalStyle'

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Suspense fallback='...loading'>
          <Switch>
            {Object.keys(routes).map(routeKey => (
              <Route key={routeKey} {...routes[routeKey]} />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default withHelmet('PartyGames')(App)

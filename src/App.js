import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './config/routes'
import withHelmet from './util/withHelmet'
import NavBar from './components/NavBar'
import GlobalStyle from './components/GlobalStyle'
import Authprovider from './contexts/ActionContext'

function App() {
  return (
    <Authprovider>
    <GlobalStyle />
      <Router>
        <NavBar />
        <Suspense fallback='...Loading please wait...'>
          <Switch>
            {Object.keys(routes).map(routeKey => (
              <Route key={routeKey} {...routes[routeKey]} />
            ))}
          </Switch>
        </Suspense>
      </Router>
    </Authprovider>
  );
}

export default withHelmet('PartyGames')(App)

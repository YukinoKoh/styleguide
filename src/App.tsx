import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from 'components/Home';
import error404 from 'layouts/error404';

interface AppProps {
  name?: string;
}

interface AppState {
  name?: string;
}

class App extends React.Component<AppProps, AppState> {

  public render() {
    let content;
    content = (
        <Router>
          <Switch>
            <Route
              path='/'
              exact
              render={props => <Home {...props} />}
            />
            <Route
              path='/dropdown'
              exact
              render={props => <Home {...props} />}
            />
            <Route
              path='/snackbar'
              exact
              render={props => <Home {...props} />}
            />
            <Route
              path='/table'
              exact
              render={props => <Home {...props} />}
            />
            <Route component={error404} />
          </Switch>
        </Router>
    );
    return <div className='App'>{content}</div>;
  }
}

export default App;

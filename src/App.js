import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes/routes';

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Switch>
          {routes.map((item) => (
            <Route path={item.path} exact={item.exact} component={item.component} key={item.path} />
          ))}
        </Switch>
      </div>
    );
  }
}
export default App;

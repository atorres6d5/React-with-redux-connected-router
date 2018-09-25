import React from 'react';
import App from './App.js'
import Home from './components/home.js'
import { Provider } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={ props => ( localStorage.getItem('Token') ?(
    <Component {...props}/>) : (
    <Redirect to={{
        pathname: '/',
        state: {
          from: props.location
        }
      }} />
    )
    )} />
  )


const Root = ({ store, history }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route exact path="/home" component={Home}/>
            {/* {every route must go before path "/", this path is the catch all path } */}
            <Route path="/" component={App} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
}



Root.propTypes = {
  store: PropTypes.object.isRequired
}


export default Root

import React from 'react';
import { render } from 'react-dom';

//base styles
require('./app/base.scss');

//components imports
import App from './app/App';
import Single from './app/components/Single';
import Grid from './app/components/Grid';

//router imports 
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';

//redux store 
import store, { history } from './app/store';



const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Grid} />
                <Route path="/view/:productId" component={Single} />
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById("root"));
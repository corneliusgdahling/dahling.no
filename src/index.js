import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { render } from 'react-dom';
import App from './App';
import './index.css';
import { IntlProvider, addLocaleData } from 'react-intl';
import noLocaleData from 'react-intl/locale-data/no';


addLocaleData(noLocaleData);

  render(
    (
      <IntlProvider locale="no">
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={App} name="Home"/>
            <Route path="hjem" component={App} name="HjemName" />
          </Route>
        </Router>
      </IntlProvider>
    ), document.getElementById('root')
  );

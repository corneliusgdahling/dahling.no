import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { render } from 'react-dom';
import App from './App';
import Home from './layouts/home/Home';
import Projects from './layouts/projects/Projects';
import CV from './layouts/cv/CV';
import './index.css';
import { IntlProvider, addLocaleData } from 'react-intl';
import noLocaleData from 'react-intl/locale-data/no';


addLocaleData(noLocaleData);

  render(
    (
      <IntlProvider locale="no">
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={App} name="Default"/>
            <Route path="home" component={Home} name="Home" />
            <Route path="projects" component={Projects} name="Projects" />
            <Route path="cv" component={CV} name="cv" />
          </Route>
        </Router>
      </IntlProvider>
    ), document.getElementById('root')
  );

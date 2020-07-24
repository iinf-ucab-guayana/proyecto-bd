import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Home as HomeView,
  Settings as SettingsView,
} from './views';

// TODO: o le buscan iconos alusivos al nombre de la vista
//       o se le borran los iconos a todo..

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <RouteWithLayout
        component={HomeView}
        exact
        layout={MinimalLayout}
        path="/home"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MinimalLayout}
        path="/settings"
      />
      <Redirect to="/home" />
    </Switch>
  );
};

export default Routes;

import React from 'react';
import './App.css';
import "firebase/auth";
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateForm from './pages/CreateForm';
import UserProvider from './context/UserProvider';
import ViewAllForms from './pages/ViewAllForms';
import ViewSingleForm from './pages/ViewSingleForm';
import SpinnerProvider from './context/SpinnerProvider';
import Products from './pages/Products';
import CreateOrganization from "./pages/CreateOrganization";
import OrganizationHomepage from './pages/OrganizationHomepage';
import ViewResponses from './pages/ViewResponses';
import Dashboard from './components/formDashboard/Dashboard';
import ShareForm from './pages/ShareForm';
import ForgetPassword from "./pages/ForgetPassword";
import NotFound from "./pages/Notfound";
import WriteUs from "./pages/WriteUs";
import PrivateRoute from "./components/PrivateRoute";
import Templates from "./pages/Templates";
import {MuiThemeProvider} from "@material-ui/core";
import AppTheme from "./context/ThemeProvider";

function App() {

  return (
      <UserProvider>
        <SpinnerProvider>
          <MuiThemeProvider theme={AppTheme}>
            <Router>
              <Switch>
                <Route path={'/'} component={HomePage} exact/>
                <Route path={'/log-in'} component={Login}/>
                <Route path={'/forget-password'} component={ForgetPassword}/>
                <Route path={'/sign-up'} component={SignUp}/>
                <Route path={'/create-organization'} component={CreateOrganization} exact/>
                <PrivateRoute path={'/organization-home'} component={OrganizationHomepage}/>
                <PrivateRoute path={'/dashboard/:id'} component={Dashboard} exact/>
                <PrivateRoute path={'/all-forms'} component={ViewAllForms} exact/>
                <PrivateRoute path={'/create-form'} component={CreateForm} exact/>
                <PrivateRoute path={'/share-form/:id'} component={ShareForm}/>
                <PrivateRoute path={'/templates'} component={Templates}/>
                <Route path={'/form/:id'} component={ViewSingleForm} exact/>
                <PrivateRoute path={'/responses/:id'} component={ViewResponses} exact/>
                <Route path={'/products'} component={Products} exact/>
                <Route path={'/404-not-found/:error'} component={NotFound}/>
                <Route path={'/write-us'} component={WriteUs}/>
              </Switch>
            </Router>
          </MuiThemeProvider>
        </SpinnerProvider>
      </UserProvider>
  );
}

export default App;

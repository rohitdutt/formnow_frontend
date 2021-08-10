import React , {useContext} from 'react';
import './App.css';
import "firebase/auth";
import HomePage from './pages/HomePage';
import firebase from './firebase/firebase'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateForm from './pages/CreateForm';
import AuthProvider from './context/AuthProvider';
import UserProvider, { userContext } from './context/UserProvider';
import ViewAllForms from './pages/ViewAllForms';
import ViewSingleForm from './pages/ViewSingleForm';
import SpinnerProvider from './context/SpinnerProvider';
import Contact from './components/contact/Contact';
import Products from './pages/Products';
import CreateOrganization from "./pages/CreateOrganization";
import OrganizationHomepage from './pages/OrganizationHomepage';
import ViewResponses from './pages/ViewResponses';
import Dashboard from './components/formDashboard/Dashboard';
import ShareForm from './pages/ShareForm';
import ForgetPassword from "./pages/ForgetPassword";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <SpinnerProvider>
          <Router>
            <Switch>
              <Route path={'/'} component={HomePage} exact/>
              <Route path={'/create-form'} component={CreateForm} exact/>
              <Route path={'/log-in'} component={Login}/>
              <Route path={'/forget-password'} component={ForgetPassword}/>
              <Route path={'/sign-up'} component={SignUp}/>
              <Route path={'/all-forms'} component={ViewAllForms} exact/>
              <Route path={'/form/:id'} component={ViewSingleForm} exact/>
              <Route path={'/products'} component={Products} exact/>
              <Route path={'/contact'} component={Contact} exact/>
              <Route path={'/create-organization'} component={CreateOrganization} exact/>
              <Route path={'/organization-home'} component={OrganizationHomepage} exact/>
              <Route path={'/responses/:id'} component={ViewResponses} exact/>
              <Route path={'/dashboard/:id'} component={Dashboard} exact/>
              <Route path={'/share-form/:id'} component={ShareForm}/>
            </Switch>
          </Router>
        </SpinnerProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;

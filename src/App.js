import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from './context';
import Header from './components/layout/Header'
import Contacts from './components/contacts/Contacts'
import AddContact from './components/contacts/AddContact'
import EditContact from './components/contacts/EditContact'
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Header branding="Contact Manager" />
            <div className="container">
              <div className="App">
                <Switch>
                  <Route exact path='/' component={Contacts} />
                  <Route exact path='/addContacts' component={AddContact} />
                  <Route exact path='/editContact/:id' component={EditContact} />
                  <Route exact path='/about' component={About} />
                  <Route component={NotFound} />
                </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

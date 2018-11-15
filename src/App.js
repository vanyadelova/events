import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route } from 'react-router-dom'
import EventsListContainer from './components/EventsListContainer'


import CreateEventFormContainer from './components/CreateEventFormContainer';
import EventDetailsContainer from './components/EventDetailsContainer'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Route path="/" exact component={EventsListContainer} />

          <Route path="/" exact component={CreateEventFormContainer} />
          <Route path="/events/:id" exact component={EventDetailsContainer} />
          
        </div>
      </Provider>
    );
  }
}

export default App;
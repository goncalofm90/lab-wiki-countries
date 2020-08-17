import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesListView from './components/CountriesList';
import SingleCountryView from './components/CountryDetails';
import MissingPageView from './components/MissingPageView';
import HomeView from './components/HomeView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Link to="/">Home</Link>
          <Link to="/countries" exact>
            Countries
          </Link>
          <Switch>
            <Route path="/" component={HomeView} exact />
            <Route path="/countries" component={CountriesListView} exact />
            <Route
              path="/countries/:id"
              render={(props) => <SingleCountryView {...props} />}
              exact
            />
            <Route path="/" component={MissingPageView} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import countries from'./data/countries.json';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';




class App extends Component {
  state = {
    countries: countries,
  }

  countriesList =() => {
    const { countries } = this.state;
    return countries.map((country) =>{
      return <Link to={`/${country.cca3}`}>{country.flag}{country.name.official}</Link> 
    });
  };


  render() {
    return (
      <div className="App">
        <Router>
          <div className="columns">
            <div className="col-1">
              {this.countriesList()}
            </div>
            <div className="col-2">
              <Route path="/:id" component={CountryDetails} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

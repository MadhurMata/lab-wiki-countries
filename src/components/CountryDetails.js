import React, { Component } from 'react'
import countries from '../data/countries.json';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


export default class CountryDetails extends Component {
  state = {
    countries: countries,
  }
  render() {
    const { countries } = this.state;
    const { id } = this.props.match.params;
    const countrySelected = countries.filter((country) => country.cca3 === id);
    // console.log(countrySelected[0].name.official)
    const countrySelectedBorders = countrySelected[0].borders
    const countryBorders = countries.filter((country) => {
      return countrySelectedBorders.indexOf(country.cca3) !== -1;
    });


    const listCountriesBorder = () => {
      return countryBorders.map((country) => {
        return <li><Link to={`/${country.cca3}`}>{country.name.official}</Link></li>
      })
    
    }
    return (
      <div>
        <h1>{countrySelected[0].name.official}</h1>
        <table class="table">
        <tbody>
            <tr>
              <td>Capital</td>
              <td>{countrySelected[0].capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{countrySelected[0].area} Km<sup>2</sup></td>
            </tr>
            {(countrySelected[0].borders.length !== 0 ) ?
            <tr>
              <td>Borders</td>
              <ul>
                {listCountriesBorder()}
              </ul>
            </tr>
            : null }
          </tbody>
        </table>
      
      </div>
    )
  }
}

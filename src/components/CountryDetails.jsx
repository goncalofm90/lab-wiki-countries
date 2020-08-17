import React, { Component } from 'react';
import countries from './../countries.json';

class SingleCountryView extends Component {
  constructor() {
    super();
    this.state = {
      country: null,
    };
  }

  componentDidMount() {
    this.loadCountry();
  }

  // componentDidUpdate(previousProps, previousState) {
  //   if (previousProps.match.params.id !== this.props.match.params.id) {
  //     this.loadCountry();
  //   }
  // }

  loadCountry() {
    const id = this.props.match.params.id;
    const country = countries.find((item) => item.cca3 === id);
    this.setState({
      country,
    });
  }

  render() {
    console.log(this.props);
    return (
      <div className="jumbotron jumbotron-fluid">
        {this.state.country && (
          <>
            <h1 class="cover">Name:</h1>
            <p class="lead">{this.state.country.name.common}</p>
            <h1>Official Name:</h1>
            <p class="lead">{this.state.country.name.official}</p>
            <h1>Flag:</h1>
            <img
              src={`https://www.countryflags.io/${this.state.country.cca2}/flat/64.png`}
              alt=""
            />
            <h2>Capital:</h2>
            <p class="lead">{this.state.country.capital}</p>
            <h3>Area:</h3>
            <p class="lead">
              {this.state.country.area}km<sup>2</sup>
            </p>

            <h4>Borders:</h4>
            <p class="lead">{this.state.country.borders}</p>
          </>
        )}
      </div>
    );
  }
}
export default SingleCountryView;

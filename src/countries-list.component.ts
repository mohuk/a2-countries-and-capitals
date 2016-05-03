import {Component} from 'angular2/core';

@Component({
  selector: 'countries-list',
  templateUrl: 'src/countries-list.html',
  styleUrls: ['src/countries-list.css']
})
export class CountriesList {
  countries: Country[] = [
    {
      name: 'Pakistan',
      countryCode: 1,
      capital: 'Islamabad',
      areaInSqKm: 1280000,
      population: 5500000,
      continent: 'Asia'
    },
    {
      name: 'India',
      countryCode: 2,
      capital: 'New Delhi',
      areaInSqKm: 12990000,
      population: 889500000,
      continent: 'Asia'
    },
    {
      name: 'China',
      countryCode: 3,
      capital: 'Beijing',
      areaInSqKm: 9999999,
      population: 9999999,
      continent: 'Asia'
    },
    {
      name: 'Afghanistan',
      countryCode: 4,
      capital: 'Kabul',
      areaInSqKm: 120000,
      population: 400000,
      continent: 'Asia'
    },
    {
      name: 'Saudia Arabia',
      countryCode: 5,
      capital: 'Riyadh',
      areaInSqKm: 189000,
      population: 65000,
      continent: 'Asia'
    }
  ]
}

export class Country {
  name;
  countryCode;
  capital;
  areaInSqKm;
  population;
  continent;
}


import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import {ICountry} from '../country';
import {geonames} from '../geonames.service';

@Component({
  selector: 'countries-list',
  templateUrl: 'src/countries-list/countries-list.html',
  styleUrls: ['src/countries-list/countries-list.css']
})
export class CountriesList implements OnInit {
  countries: ICountry[];
  constructor(
    private router: Router,
    private _geonames: geonames
  ){}

  ngOnInit(): void{
    this._geonames.countries()
      .subscribe(countries => this.countries = countries);  
  }
  
  onSelect(country: ICountry) {
    this.router.navigate(['Country Info', {countryCode: country.countryCode}]);
  }
}

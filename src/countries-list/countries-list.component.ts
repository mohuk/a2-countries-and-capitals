import {Component} from 'angular2/core';
import {ICountry} from '../country';
import {geonames} from '../geonames.service';
import {OnInit} from 'angular2/core';

@Component({
  selector: 'countries-list',
  templateUrl: 'src/countries-list/countries-list.html',
  styleUrls: ['src/countries-list/countries-list.css']
})
export class CountriesList implements OnInit{
  countries: ICountry[];
  constructor(
    private _geonames: geonames
  ){}

  ngOnInit(): void{
    this._geonames.countries()
      .subscribe(countries => this.countries = countries);
  }
}

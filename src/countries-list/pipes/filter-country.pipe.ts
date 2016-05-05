import  { Pipe, PipeTransform } from 'angular2/core';

import { ICountry } from '../../country'; 

@Pipe({
  name: 'filterCountry'
}) 
export class FilterCountryPipe implements PipeTransform {
  transform(allCountries: ICountry[], filterCountry: string) {
    if(!allCountries || !filterCountry || filterCountry.length <= 0) 
      return allCountries;
      
    let pattern = new RegExp(filterCountry.toLowerCase(), 'g');
    return allCountries.filter(country => pattern.test(country.countryName.toLowerCase()));
  }
}
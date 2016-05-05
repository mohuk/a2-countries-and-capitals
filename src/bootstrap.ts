import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Header} from './shell/header.component';
import {CountriesList} from './countries-list/countries-list.component';
import {CountryInfo} from './country-info/country-info.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import {geonames} from './geonames.service';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
import 'rxjs/Rx'; //load all features

@RouteConfig([
  {
    path: '/list',
    name: 'Countries List',
    component: CountriesList
  },
  {
    path: '/info/:countryCode',
    name: 'Country Info',
    component: CountryInfo
  }
])
@Component({
  selector: 'app',
  templateUrl: 'src/shell/shell.html',
  directives: [ROUTER_DIRECTIVES, Header],
  providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, geonames]
})
export class App {}

bootstrap(App)
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));

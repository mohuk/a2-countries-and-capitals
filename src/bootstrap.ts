import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Header} from './shell/header.component';
import {CountriesList} from './countries-list/countries-list.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx'; //load all features

@Component({
  selector: 'app',
  templateUrl: 'src/shell/shell.html',
  directives: [Header, CountriesList],
  providers: [HTTP_PROVIDERS]
})
export class App {}

bootstrap(App)
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));

import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {Header} from './shell/header.component';


@Component({
  selector: 'app',
  templateUrl: 'src/shell/shell.html',
  directives: [Header]
})
export class App {}

bootstrap(App)
  .then(success => console.log('Kicking off Countries and Capitals'))
  .catch(error => console.log(error));

import {Component} from 'angular2/core';

@Component({
  selector: 'app-header',
  template: `
    <h1>{{title}}</h1>
  `,
  styleUrls: ['src/styles.css']
})
export class Header {
  title: String = 'Countries and Capitals';
}

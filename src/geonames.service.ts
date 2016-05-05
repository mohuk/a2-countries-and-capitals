import {Injectable} from 'angular2/core';
import {COUNTRIES} from './countries-mock';
import {Http, Response, URLSearchParams} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {ICountry} from './country';

@Injectable()
export class geonames {
  private _baseUrl = 'http://api.geonames.org';
  private _authInfo:URLSearchParams = new URLSearchParams();

  constructor(
    private _http: Http
  ){
    this._authInfo.set('username', 'mohuk');
  }

  countries(): Observable<ICountry[]>{
    return this._http.get(`${this._baseUrl}/countryInfoJSON`, {search: this._authInfo})
      .map((response: Response) => <ICountry[]>response.json().geonames)
      .do(data => console.log(data))
      .catch(error => Observable.throw(error.json()));
  }

  country(countryCode: string): Observable<ICountry>{
    let params:URLSearchParams = new URLSearchParams();
    params.set('username', 'mohuk');
    params.set('country', countryCode);
    return this._http.get(`${this._baseUrl}/countryInfoJSON`, {search: params})
      .map((response: Response) => <ICountry>response.json().geonames[0])
      .do(data => console.log(data))
      .catch(error => Observable.throw(error.json()));
  }
}

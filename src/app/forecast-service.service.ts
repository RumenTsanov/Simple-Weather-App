import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class ForecastDataService {
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });
  constructor(private http: Http) { }

  getForecast(city: string): any {
    return this.http.get('http://api.apixu.com/v1/forecast.json?key=29d83fa2298a47d29bb121845161212&q=' + city)
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(er => alert(JSON.parse(er._body).error));
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  constructor(private _http: HttpClient) { }

  url = "https://outlookcalendarevent.azurewebsites.net/api/OutlookCalendarEvents/OofEvents(All)"

  getCalendarEvents() {
    // const body = {
    //   start, end
    // }
    return this._http.get(this.url);
  }
}

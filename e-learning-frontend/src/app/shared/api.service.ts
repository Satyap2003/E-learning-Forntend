import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASEURL = 'http://localhost:8080/api/';

  constructor(private http : HttpClient) {

  }

  get(url : string) {
    return this.http.get(this.BASEURL + url);
  }

  post(url : string, body : any) {
    return this.http.post(this.BASEURL + url, body);
  }
}

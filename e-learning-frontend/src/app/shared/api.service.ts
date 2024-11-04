import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BASEURL = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(this.BASEURL + url);
  }

  post(url: string, body: any) {
    return this.http.post(this.BASEURL + url, body);
  }

  postFile(endpoint: string, data: any) {
    // Check if the data is FormData for multipart handling
    const options =
      data instanceof FormData
        ? { headers: { enctype: 'multipart/form-data' } }
        : {};

    return this.http.post(this.BASEURL + endpoint, data, options);
  }
}

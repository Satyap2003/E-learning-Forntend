import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { AuthModel } from '../model/auth-model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginuserData = new AuthModel();
  loginSuccess = false;

  constructor(private apiService : ApiService) { }

  login(authModel : AuthModel) {
    const basicAuth = 'Basic ' + btoa(authModel.username + ':' + authModel.password); //Token (enoded and addded basic as prefix as we are using the basic auth.)
    const headers = new HttpHeaders().set('Authorization', basicAuth); //Set token to header
    return this.apiService.post('authenticate', null, headers);
  }
}

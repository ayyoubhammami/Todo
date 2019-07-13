import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { API_URL } from './app.constants';

export const TOKEN = 'token';
export const AUTHTICATED_USER = 'authenticaterUser';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username, password){
    console.log('before ' + this.isUserLoggedIn());
    if (username==="ayoub" && password==="dummy"){
      sessionStorage.setItem(AUTHTICATED_USER, username);
      console.log('after ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  executeJWTAuthenticationService(username, password) {
    
    return this.http.post<any>(
      `${API_URL}/authenticate`,{
        username,
        password
      }).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          }
        )
      );
    //console.log("Execute Hello World Bean Service")
  }


  executeAuthenticationService(username, password) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
        Authorization: basicAuthHeaderString
      })
      
      return this.http.get<AuthenticationBean>(
        `${API_URL}/basicauth`,
        {headers}).pipe(
          map(
            data => {
              sessionStorage.setItem(AUTHTICATED_USER, username);
              sessionStorage.setItem(TOKEN, basicAuthHeaderString);
              return data;
            }
          )
        );
  
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHTICATED_USER)
    return !(user === null)
  }

  getAutheticatedUser() {
    return sessionStorage.getItem(AUTHTICATED_USER)
  }

  getAutheticatedToken() {
    if (this.getAutheticatedUser())
    {
      return sessionStorage.getItem(TOKEN)
    }
  }


  logout(){
    sessionStorage.removeItem(AUTHTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

}

export class AuthenticationBean{
  constructor(private message: string){}
}
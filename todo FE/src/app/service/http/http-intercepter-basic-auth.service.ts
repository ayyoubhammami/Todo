import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { BasicAuthenticationService } from 'src/app/basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler){
    // let username = 'ayoub'
    // let password = 'dummy'
    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let basicAuthHeaderString = this.basicAuthenticationService.getAutheticatedToken();
    let username = this.basicAuthenticationService.getAutheticatedUser();
    
    if (basicAuthHeaderString && username)
    {
      req = req.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      });
    }
    return next.handle(req);
  }

  constructor(private basicAuthenticationService: BasicAuthenticationService) { }
}

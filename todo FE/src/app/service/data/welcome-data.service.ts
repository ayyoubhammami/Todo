import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message:string){ }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService()
  {
    // return this.http.get('http://localhost:8080/hello-world-bean');
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    //console.log("Execute Hello World Bean Service")
  }

  executeHelloWorldServiceWithPathVariable(name) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    // let headers = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    //   })
      
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
    // {headers}
    );

    // return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
    //console.log("Execute Hello World Bean Service")
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'ayoub'
  //   let password = 'dummy'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }

  // Cross-Origin Request Blocked: 
  // The Same Origin Policy disallows reading the remote resource 
  // at http://localhost:8080/hello-world-bean. 
  // (Reason: CORS header ‘Access-Control-Allow-Origin’ missing).

//   Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://localhost:8080/hello-world-bean. 
//   (Reason: CORS header ‘Access-Control-Allow-Origin’ missing).[Learn More]
// Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://localhost:8080/hello-world-bean. 
// (Reason: CORS request did not succeed).[Learn More]


}

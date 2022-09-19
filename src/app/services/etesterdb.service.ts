import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/etesteruser';

const etesterdbUrl: string = "http://localhost:8081/";

const etesterdbUserDetailsUrl: string = etesterdbUrl + "userdetails?username=";
const etesterdbCurrentUserDetailsUrl: string = etesterdbUrl + "currentuserdetails";

@Injectable({
  providedIn: 'root'
})
export class EtesterdbService {

  default_authToken: string = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzZXNpMiIsImV4cCI6MTY2MzY2NjQzOX0.byD3hS4nTRo9J8IKwWVywb5ZGb5Dax-G3xEB_0g0KES6E8SBgz0Qk7f_W3kkpN3HqnJYkVH15iL7ckZnOiudjg';
  authToken: string = this.default_authToken;
  private HTTP_OPTIONS = {};

  constructor(private httpClient: HttpClient) {
    this.resetAuthCode();
  }

  public resetAuthCode() {
    this.authToken = this.default_authToken;
    this.HTTP_OPTIONS = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
        'Authorization': this.authToken
      })
    };
  }

/*  public setAuthCode(authCode: string) {
    this.authToken = authCode;
    this.HTTP_OPTIONS = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
        'Authorization': this.authToken
      })
    };
  }
*/
/*  loginSyncAndGetToken(username: string, password: string) {
    const completeLoginUrl: string = etesterdbLoginUrl + '?username=' + username.trim() + '&password=' + password.trim();
    let authCode: string | null = null;
    return this.httpClient.post<any>(completeLoginUrl, { username: username, password: password }, { observe: 'response' });
  }
*/
  getUserDetails(username: string): Observable<User> {
    return this.httpClient.get<User>(etesterdbUserDetailsUrl + username, this.HTTP_OPTIONS);
  }

  getCurrentUserDetails(): Observable<User> {
    return this.httpClient.get<User>(etesterdbCurrentUserDetailsUrl, this.HTTP_OPTIONS);
  }
}


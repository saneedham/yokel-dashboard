import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
    

    loginURL = "http://192.168.0.4:5984/_session";
    constructor(private http: HttpClient ) {}

    requestAuth (loginDetails: any): Observable<HttpResponse<Object>> {
        return this.http.post<HttpResponse<Object>>(this.loginURL, JSON.stringify(loginDetails), {headers: new HttpHeaders({'Content-Type': 'application/json'}), observe: 'response', withCredentials: true });
    }
    
}
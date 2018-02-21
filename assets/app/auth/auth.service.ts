import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { ErrorService } from '../errors/error.service';

@Injectable()
export class AuthService {
    hostname: string = window.location.hostname;
    prot: string = window.location.protocol;
    index: number = -1;
    serverUrl: string = "";

    constructor(private http: Http, private errorService: ErrorService) {
        this.getUrl(this.hostname, this.prot);
    }

    getUrl(hostname: string, prot: string) {
        this.index = hostname.toString().toUpperCase().indexOf('HEROKU');
        if (this.index >= 0) {
            this.serverUrl = "https://meanapp-messenger.herokuapp.com";
        } else this.serverUrl = "http://127.0.0.1:3000";
    }

    signUp(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' })
        return this.http.post(this.serverUrl + '/user', body, { headers: headers })
            .map((response: Response) => response.json())
            .catch(
                (error: Response) => {
                    this.errorService.handleError(error.json());
                    return Observable.throw(error.json())
                }
            )
    }

    signIn(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' })
        return this.http.post(this.serverUrl + '/user/signin', body, { headers: headers })
            .map((response: Response) => response.json())
            .catch(
                (error: Response) => {
                    this.errorService.handleError(error.json());
                    return Observable.throw(error.json())
                }
            )
    }

    logOut() {
        localStorage.clear();
    }
    isLoggedIn() {
        return localStorage.getItem("token") != null;
    }

}
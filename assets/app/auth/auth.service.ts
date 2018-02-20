import {User} from './user.model';
import { Injectable } from '@angular/core';
import { Http , Headers , Response} from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { ErrorService } from '../errors/error.service';

@Injectable()
export class AuthService {
    //serverUrl : string = "https://meanapp-messenger.herokuapp.com";
    serverUrl : string = "http://127.0.0.1:3000"; 
    constructor(private http : Http, private errorService: ErrorService) {

    }
    signUp (user:User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type' : 'application/json'})
        return this.http.post(this.serverUrl+'/user', body, {headers:headers})
        .map((response : Response) => response.json() )
        .catch(
            (error: Response) => { 
                this.errorService.handleError(error.json());
               return Observable.throw(error.json())
            }
            )
    }

    signIn (user:User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type' : 'application/json'})
        return this.http.post(this.serverUrl+'/user/signin', body, {headers:headers})
        .map((response : Response) => response.json() )
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
        return localStorage.getItem("token") !=null;
    }

}
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { ErrorService } from '../errors/error.service';
var AuthService = /** @class */ (function () {
    function AuthService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.getUrl(this.hostname, this.prot);
    }
    AuthService.prototype.getUrl = function (hostname, prot) {
        this.index = hostname.toString().toUpperCase().indexOf('HEROKU');
        if (this.index >= 0) {
            this.serverUrl = "https://meanapp-messenger.herokuapp.com";
        }
        else
            this.serverUrl = "http://127.0.0.1:3000";
    };
    AuthService.prototype.signUp = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.serverUrl + '/user', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    AuthService.prototype.signIn = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.serverUrl + '/user/signin', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    AuthService.prototype.logOut = function () {
        localStorage.clear();
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem("token") != null;
    };
    return AuthService;
}());
export { AuthService };

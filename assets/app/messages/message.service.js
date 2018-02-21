import { Component, Injectable, EventEmitter } from "@angular/core";
import { Message } from "./message.model";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from "../errors/error.service";
var MessageService = /** @class */ (function () {
    function MessageService(http, errorService) {
        this.http = http;
        this.errorService = errorService;
        this.getUrl(this.hostname, this.prot);
    }
    MessageService.prototype.getUrl = function (hostname, prot) {
        this.index = hostname.toString().toUpperCase().indexOf('HEROKU');
        if (this.index >= 0) {
            this.serverUrl = "https://meanapp-messenger.herokuapp.com";
        }
        else
            this.serverUrl = "http://127.0.0.1:3000";
    };
    MessageService.prototype.addMessage = function (message) {
        var _this = this;
        //this.messages.push(message);
        var body = JSON.stringify(message);
        var myheader = new Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.post(this.serverUrl + '/message' + token, body, { headers: myheader }).map(function (response) {
            var result = response.json();
            var newMessage = new Message(result.obj.content, result.obj.user.firstName, result.obj._id, result.obj.user._id);
            _this.messages.push(newMessage);
            return newMessage;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    MessageService.prototype.updateMessage = function (message) {
        var _this = this;
        var body = JSON.stringify(message);
        var myheader = new Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.patch(this.serverUrl + '/message/' + message.messageId + token, body, { headers: myheader }).map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    MessageService.prototype.getMessages = function () {
        var _this = this;
        return this.http.get(this.serverUrl + '/message').map(function (response) {
            var messages = response.json().obj;
            var transformedMessages = [];
            for (var _i = 0, messages_1 = messages; _i < messages_1.length; _i++) {
                var message = messages_1[_i];
                //console.log(message.content);
                transformedMessages.push(new Message(message.content, message.user.firstName, message._id, message.user._id));
            }
            _this.messages = transformedMessages;
            return transformedMessages;
        })
            .catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    MessageService.prototype.deleteMessage = function (message) {
        var _this = this;
        this.messages.splice(this.messages.indexOf(message), 1);
        var token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.delete(this.serverUrl + '/message/' + message.messageId + token).map(function (response) { return response.json(); }).catch(function (error) {
            _this.errorService.handleError(error.json());
            return Observable.throw(error.json());
        });
    };
    MessageService.prototype.editMessage = function (message) {
        this.messageIsEdit.emit(message);
    };
    return MessageService;
}());
export { MessageService };

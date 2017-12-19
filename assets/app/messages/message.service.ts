import { Component, Injectable, EventEmitter } from "@angular/core";
import { Message } from "./message.model";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class MessageService {
    private messages: Message[] = [];
    serverUrl: string = "https://meanapp-messenger.herokuapp.com"; //"http://127.0.0.1:3000"; //
    //serverUrl : string = "http://127.0.0.1:3000"; 
    messageIsEdit = new EventEmitter<Message>();

    constructor(private http: Http, private errorService:ErrorService) {

    }

    addMessage(message: Message) {
        //this.messages.push(message);
        const body = JSON.stringify(message);
        const myheader = new Headers({ 'Content-Type': 'application/json' });
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';

        return this.http.post(this.serverUrl + '/message' + token, body, { headers: myheader }).map(
            (response: Response) => {
                const result = response.json();
                const newMessage = new Message(result.obj.content, result.obj.user.firstName, result.obj._id, result.obj.user._id);
                this.messages.push(newMessage);
                return newMessage;
            }
        )
            .catch(
            (error: Response) => { 
                this.errorService.handleError(error.json());
               return Observable.throw(error.json())
            }
            )
    }

    updateMessage(message: Message) {
        const body = JSON.stringify(message);
        const myheader = new Headers({ 'Content-Type': 'application/json' });
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';

        return this.http.patch(this.serverUrl + '/message/' + message.messageId + token, body, { headers: myheader }).map(
            (response: Response) => response.json()
        )
        .catch(
            (error: Response) => { 
                this.errorService.handleError(error.json());
               return Observable.throw(error.json())
            }
            )
    }

    getMessages() {
        return this.http.get(this.serverUrl + '/message').map(
            (response: Response) => {
                const messages = response.json().obj;
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    //console.log(message.content);
                    transformedMessages.push(new Message(message.content, message.user.firstName, message._id, message.user._id));
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch(
                (error: Response) => { 
                    this.errorService.handleError(error.json());
                   return Observable.throw(error.json())
                }
                )
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this.http.delete(this.serverUrl + '/message/' + message.messageId + token).map(
            (response: Response) => response.json()
        ).catch(
            (error: Response) => { 
                this.errorService.handleError(error.json());
               return Observable.throw(error.json())
            }
            )
    }

    editMessage(message: Message) {
        this.messageIsEdit.emit(message);
    }

}
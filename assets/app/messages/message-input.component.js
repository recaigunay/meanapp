import { Component, OnInit } from "@angular/core";
import { MessageService } from "./message.service";
import { Message } from "./message.model";
import { NgForm } from "@angular/forms";
var MessageInputComponent = /** @class */ (function () {
    function MessageInputComponent(messageService) {
        this.messageService = messageService;
    }
    MessageInputComponent.prototype.onSubmit = function (form) {
        if (this.message) {
            this.message.content = form.value.content;
            this.messageService.updateMessage(this.message).subscribe(
            //data => console.log(data),
            //data => console.log(data),
            function (error) { return console.error(error); });
            this.message = null;
        }
        else {
            var message = new Message(form.value.content, "recai");
            this.messageService.addMessage(message).subscribe(
            //data => console.log(data),
            //data => console.log(data),
            function (error) { return console.error(error); });
        }
        form.resetForm();
    };
    MessageInputComponent.prototype.onClear = function (form) {
        form.resetForm();
        this.message = null;
    };
    MessageInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.messageIsEdit.subscribe(function (message) { return _this.message = message; });
    };
    return MessageInputComponent;
}());
export { MessageInputComponent };

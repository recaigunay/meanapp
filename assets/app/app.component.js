import { Component } from '@angular/core';
import { MessageService } from './messages/message.service';
import { AuthService } from './auth/auth.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.IsLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    return AppComponent;
}());
export { AppComponent };

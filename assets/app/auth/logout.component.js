import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    LogoutComponent.prototype.onLogout = function () {
        this.authservice.logOut();
        this.router.navigate(['/auth', 'signin']);
    };
    return LogoutComponent;
}());
export { LogoutComponent };

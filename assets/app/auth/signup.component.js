import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { AuthService } from "./auth.service";
import { User } from "./user.model";
var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
    }
    SignupComponent.prototype.onSubmit = function () {
        var user = new User(this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName);
        this.authService.signUp(user).subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        this.myForm.reset();
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+")
            ]),
            password: new FormControl(null, Validators.required),
        });
    };
    SignupComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    return SignupComponent;
}());
export { SignupComponent };

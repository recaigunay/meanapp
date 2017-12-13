import { Component,OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, Validators,FormControl } from "@angular/forms";
import { User } from "./user.model";
import { AuthService } from "./auth.service";


@Component({
    selector:'app-signin',
    templateUrl : './signin.component.html'
})
export class SigninComponent implements OnInit {
    myFormSignIn : FormGroup;
    
    constructor(private authService : AuthService, private router : Router) {

    }

     onSubmit() {
         const user = new User(this.myFormSignIn.value.email, this.myFormSignIn.value.password);
         this.authService.signIn(user).subscribe(
            data => {
               localStorage.setItem('token', data.token);
               localStorage.setItem('userId', data.userId);
               this.router.navigateByUrl('/') ;
            },
            error => console.error(error)
        );
         this.myFormSignIn.reset();
     }
     ngOnInit() {
         this.myFormSignIn = new FormGroup({
           email:new FormControl(null, [
             Validators.required,
             Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+")
           ]),
           password:new FormControl(null, Validators.required),
         })
     }
}
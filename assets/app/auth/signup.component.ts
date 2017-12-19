import { Component,OnInit } from "@angular/core";
import { FormGroup, Validators,FormControl } from "@angular/forms";
import { AuthService } from "./auth.service";
import { User } from "./user.model";
import { Router } from "@angular/router";

@Component({
    selector:'app-signup',
    templateUrl : './signup.component.html'
})
export class SignupComponent implements OnInit {

    myForm : FormGroup;
   
    constructor(private authService:AuthService,private router : Router) {

    }

    onSubmit() {
        const user = new User(
            this.myForm.value.email, 
            this.myForm.value.password,
            this.myForm.value.firstName,
            this.myForm.value.lastName
        );
        this.authService.signUp(user).subscribe(
            data => { 
                console.log(data);               
                this.authService.signIn(user).subscribe(
                   data => {
                      localStorage.setItem('token', data.token);
                      localStorage.setItem('userId', data.userId);
                      this.router.navigateByUrl('/') ;
                   },
                   error => console.error(error)
               );
            
            },
            error => console.error(error)
        );
        this.myForm.reset();
    }
    ngOnInit() {
        this.myForm = new FormGroup({
          firstName:new FormControl(null, Validators.required),
          lastName:new FormControl(null, Validators.required),
          email:new FormControl(null, [
            Validators.required,
            Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+")
          ]),
          password:new FormControl(null, Validators.required),
        })
    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }
}
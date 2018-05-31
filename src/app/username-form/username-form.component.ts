import { Component, OnInit, Input, NgModule } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr'
import {ErrorStateMatcher} from '@angular/material/core'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { LoginService } from '../services/login.service';
import { Store } from  '@ngrx/store';
import { AppState } from '../store/state';
import { LOGIN_USER } from '../store/actions/user.action';
import { User } from '../models';


export class ErrorStateMatcherImpl implements ErrorStateMatcher {
  isErrorState(control : FormControl | null , form : FormGroupDirective | NgForm | null) : boolean
  {
    const isSubmitted = form && form.submitted ; 
    return !!(control && control.invalid && 
      (control.dirty || control.touched ||isSubmitted));

  }
}
// @NgModule({
//   schemas: [CUSTOM_ELEMENTS_SCHEMA]
// })

/** @title Username input with error matcher */
@Component({
  providers : [ToastrService,LoginService],
  selector: 'app-username-form',
  templateUrl: './username-form.component.html',
  styleUrls: ['./username-form.component.scss']
})


export class UsernameFormComponent implements OnInit {

  username_form_control: FormControl;
  matcher: ErrorStateMatcherImpl;
  user_logged_in : Boolean;

  @Input()
  public input_value : String;
  
  @Input()
  public errorStateMatcher: ErrorStateMatcher;

  constructor(public toastr: ToastrService,
    private loginService : LoginService,
    private store: Store<AppState>) {
    this.input_value = "user";
    this.username_form_control = new FormControl('user_input',[
      Validators.required
    ])
    this.matcher = new ErrorStateMatcherImpl();
    this.user_logged_in = false;
   }
  ngOnInit() {
    

  }
 
  usernameNotOk() {
    return !this.username_form_control.valid;
  }

  logInUser(event)
  {
    if(this.input_value !== "user")
    {
      const res = this.loginService
      .loginUser(this.input_value)
      .then((response) => {
        if(response === "added user")
        {
          this.toastr.success(`Welcome ${this.input_value}`,"Success!"); 
        }
        else if (response === "already logged in")
        {
          this.toastr.success("Logged in");
        }

        

        this.store.dispatch({
          type:LOGIN_USER,
          payload : new User(this.input_value)});
        })

        this.user_logged_in = true;

    }
    else 
    {
      this.toastr.error("Insert other username!","Error!",{
        positionClass : 'toast-top-right'
      });
    }

  }
}

import { Component, OnInit, Input, NgModule } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr'
import {ErrorStateMatcher} from '@angular/material/core'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { LoginService } from '../services/login.service';
import { Store } from  '@ngrx/store';
import { AppState } from '../store/state';
import { LOGIN_USER, LoginUser, LoginUserEffect } from '../store/actions/user.action';
import { User } from '../models';
import { RootState } from '../store/reducers';
import { environment } from '../../environments/environment';
import { getUserState } from '../store/selectors/user.selector';
import { map } from 'rxjs/operators';


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
  pos_toastr : Object;

  @Input()
  public input_value : string;
  
  @Input()
  public errorStateMatcher: ErrorStateMatcher;

  constructor(public toastr: ToastrService,
    private loginService : LoginService,
    private store: Store<RootState>) {

    this.input_value = "user";
    this.username_form_control = new FormControl('user_input',[
      Validators.required
    ])
    this.matcher = new ErrorStateMatcherImpl();
    this.user_logged_in = false;
    this.pos_toastr = {
      positionClass : 'toast-top-right'
    }
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

      //Call effect to do the login of user.
      this.store.dispatch(new LoginUserEffect(this.input_value));

      this.store.select(getUserState)
      .subscribe(resp => {

        if(resp.name !== "user")
        {
          this.toastr.success(`Welcome ${this.input_value}`,
            "Success!",this.pos_toastr);

          window.localStorage.setItem("username",this.input_value);
          this.user_logged_in = true;
        }  
        

      })
      


      // const res = this.loginService
      // .loginUser(this.input_value)
      // .then((response) => {

      //   this.user_logged_in = true;

      //   if(response === "added user")
      //   {
      //     this.toastr.success(`Welcome ${this.input_value}`,
      //     "Success!",this.pos_toastr);   
      //   }
      //   else if (response === "already logged in")
      //   {
      //     this.toastr.success("Logged in","Welcome again!",this.pos_toastr);
      //   }
      //   window.localStorage.setItem("username",this.input_value);

      //   this.store.dispatch({
      //     type:LOGIN_USER,
      //     payload : new User(this.input_value)});
      //   })
      //   .catch((err) => {
      //     this.toastr.error("Error happened","Error!",this.pos_toastr);
      //     this.user_logged_in = false;
      //   })


    }
    else 
    {
      this.toastr.error("Insert other username!","Error!",this.pos_toastr);
    }

  }
}

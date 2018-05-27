import { Component, OnInit, Input, NgModule } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms'
import {ErrorStateMatcher} from '@angular/material/core'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

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
  selector: 'app-username-form',
  templateUrl: './username-form.component.html',
  styleUrls: ['./username-form.component.css']
})
export class UsernameFormComponent implements OnInit {

  username_form_control: FormControl;
  matcher: ErrorStateMatcherImpl;

  constructor() {
    this.username_form_control = new FormControl('user_input',[
      Validators.required
    ])
    this.matcher = new ErrorStateMatcherImpl();
    
   }

  @Input()
  errorStateMatcher: ErrorStateMatcher;

  
  ngOnInit() {
  }

  usernameNotOk() {
    return !this.username_form_control.valid;
  }
}

import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { UsernameFormComponent } from './username-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing'
import {Location} from '@angular/common';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms'
import {ErrorStateMatcher} from '@angular/material/core'
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LoginService } from '../services/login.service';
import { Store } from  '@ngrx/store';
import { AppState } from '../store/state';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCER } from '../store/reducers';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { appRoutes } from '../app.module';
import { ChatScreenComponent } from '../chat-screen/chat-screen.component';

describe('UsernameFormComponent', () => {
  let component: UsernameFormComponent;
  let location : Location;
  let fixture: ComponentFixture<UsernameFormComponent>;
  let toastr : ToastrService;
  let store : Store<{}>;
  let logSrv : LoginService;
  let router : Router;

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ UsernameFormComponent,ChatScreenComponent ],
      providers : [ToastrService,LoginService],
      imports: [
        ToastrModule.forRoot(),
        FormsModule,RouterTestingModule.withRoutes(appRoutes),
        HttpClientTestingModule,
        ReactiveFormsModule,
        MatInputModule,
        StoreModule.forRoot(ROOT_REDUCER),
        BrowserAnimationsModule,NoopAnimationsModule
      ]
    })
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(UsernameFormComponent);
    store = fixture.debugElement.injector.get(Store);
    router = TestBed.get(Router);
   
    router.initialNavigation();


  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("correctly injects store", async(() => { 
    expect(store).toBeDefined();
  }));

  it('should create', () => {

    expect(component).toBeTruthy();
  });

  
  it('correctly renders the username input', () => {
    expect(component.username_form_control).toBeTruthy();
  })

  it('correctly sets the invalid for username input on empty field', () => {
    component.username_form_control.setValue('');
    expect(component.username_form_control.valid).toBeFalsy();
  })

  it('validates username input as valid for nonempty value', () => {
    component.username_form_control.setValue('rer');
    expect(component.username_form_control.valid).toBeTruthy();
  })



  it('correctly renders button', fakeAsync(() => {
  
    let btn = fixture.debugElement.query(By.css(".btn_log_in"))
    tick(3000);
    expect(btn).toBeTruthy();
  
  }))

  it('correctly navigates to chat ', fakeAsync (()=> {
    
    
    router.navigate(['/chat/rqrw']);
    tick();
    expect(location.path()).toBe("/chat/rqrw");
  }))
  it('correctly clicks log in button', fakeAsync(() => {
    spyOn(component, 'logInUser');

    let btn = fixture.nativeElement.querySelector(".btn_log_in");
    
    btn.click();

    tick(3000);

    expect(component.logInUser).toHaveBeenCalled();

  }))

  it('correctly shows error toastr', () => {
    spyOn(component, 'logInUser');
    component.username_form_control.setValue('user');
    let btn = fixture.nativeElement.querySelector(".btn_log_in");
    btn.click();
    let toastr = fixture.componentInstance.toastr;
    expect(toastr).toBeTruthy();
  })

});

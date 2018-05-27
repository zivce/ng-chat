import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { UsernameFormComponent } from './username-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms'
import {ErrorStateMatcher} from '@angular/material/core'
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('UsernameFormComponent', () => {
  let component: UsernameFormComponent;
  let fixture: ComponentFixture<UsernameFormComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameFormComponent ],
     
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule,NoopAnimationsModule
      ]
    })
    fixture = TestBed.createComponent(UsernameFormComponent);
    

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


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


});

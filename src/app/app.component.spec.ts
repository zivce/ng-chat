import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

import {appRoutes} from './app.module';
import { UsernameFormComponent } from './username-form/username-form.component';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {Location} from '@angular/common'
import {Router} from '@angular/router'

describe('AppComponent', () => {

  let location : Location;
  let router : Router;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,UsernameFormComponent,ChatScreenComponent
      ],
      imports : [
        RouterTestingModule.withRoutes(appRoutes),
          FormsModule,
          ReactiveFormsModule,
          MatInputModule,
          BrowserAnimationsModule,NoopAnimationsModule
      ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  }));

  it('correctly navigates to "" ', fakeAsync (()=> {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe("/");
  }))
  
  it('correctly navigates to chat ', fakeAsync (()=> {
    router.navigate(['/chat/2']);
    tick();
    

    expect(location.path()).toBe("/chat/2");
  }))
  
  

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  

});

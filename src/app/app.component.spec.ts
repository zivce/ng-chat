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
import {ToastrModule, ToastrService} from 'ngx-toastr';
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing'
import { LoginService } from './services/login.service';
import { Store } from  '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCER } from './store/reducers';
import { WhosOnlineListComponent } from './chat-screen/whos-online-list/whos-online-list.component';
import { WhosOnlineListItemComponent } from './chat-screen/whos-online-list-item/whos-online-list-item.component';
import { ConnectService } from './services/connect.service';

describe('AppComponent', () => {

  let location : Location;
  let router : Router;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UsernameFormComponent,
        ChatScreenComponent, 
        WhosOnlineListComponent,
        WhosOnlineListItemComponent
      ],
      imports : [ToastrModule.forRoot(),
        RouterTestingModule.withRoutes(appRoutes),
          FormsModule,
          ReactiveFormsModule,
          StoreModule.forRoot(ROOT_REDUCER),
          HttpClientTestingModule,
          MatInputModule,
          BrowserAnimationsModule,NoopAnimationsModule
      ],
      providers : [ToastrService,LoginService,ConnectService]
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

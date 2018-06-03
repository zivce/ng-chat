import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

/**
 * Material UI
 */

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
/**Toastr module */
import {ToastrModule, ToastrService} from 'ngx-toastr';

import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { storeLogger } from 'ngrx-store-logger';

import { AppComponent } from './app.component';
import { UsernameFormComponent } from './username-form/username-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { LoginService } from './services/login.service';
import { StoreModule, ActionReducer } from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import { ROOT_REDUCER } from './store/reducers';

import { AppState } from './store/state';
import { WhosOnlineListComponent } from './chat-screen/whos-online-list/whos-online-list.component';
import { WhosOnlineListItemComponent } from './chat-screen/whos-online-list-item/whos-online-list-item.component';
import { MessageListComponent } from './chat-screen/message-list/message-list.component';
import { SendMessageFormComponent } from './chat-screen/send-message-form/send-message-form.component';
import { ConnectService } from './services/connect.service';

import { MessageListItmComponent } from './chat-screen/message-list/message-list-itm/message-list-itm.component';



export const appRoutes : Routes = [
  {path : "", component : UsernameFormComponent},
  {path : "chat/:id", component : ChatScreenComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsernameFormComponent,
    ChatScreenComponent,
    WhosOnlineListComponent,
    WhosOnlineListItemComponent,
    MessageListComponent,
    SendMessageFormComponent,
    MessageListItmComponent
  ],
  imports: [
    
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(ROOT_REDUCER),
    
    /**
     * Material modules
     */
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),

  ],
  providers : [ToastrService, LoginService,ConnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }

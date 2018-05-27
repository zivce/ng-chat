import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Material UI
 */

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {FormsModule,ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { UsernameFormComponent } from './username-form/username-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';



export const appRoutes : Routes = [
  {path : "", component : UsernameFormComponent},
  {path : "chat/:id", component : ChatScreenComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsernameFormComponent,
    ChatScreenComponent
  ],
  
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,

    /**
     * Material modules
     */
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

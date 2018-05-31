import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'
import { AppState } from '../store/state';
import { Observable} from 'rxjs';
import { User } from '../models/index';
import { getUserState } from '../store/selectors/user.selector';
export const INSTANCE_LOCATOR = "v1:us1:8a3110ca-c223-41a6-9333-2184f6d2bc83"

import {environment} from '../../environments/environment';
declare const Pusher : any;

import ChatKit from '@pusher/chatkit'

@Injectable({
  providedIn: 'root'
})


export class ConnectService {
  user$ : Observable<User>
  pusher : any;
  chatManager : any;

  constructor(private store: Store<AppState>) {
    if(this.store)
      this.user$ = this.store.select(getUserState);
    
      this.user$.subscribe(( resp) => {
        this.chatManager = new ChatKit.ChatManager({
          instanceLocator: environment.pusher.instance_locator,
          userId : resp.name,
          tokenProvider : new ChatKit.TokenProvider({
              url:environment.pusher.auth_url
          })
        })
      })
    console.log(environment.log.dbg + "user observable" );
   
  }

  connect() {
    this.chatManager
      .connect()
      .then((currentUser)=> {
        //console.log(environment.log.info + "connected" + JSON.stringify(currentUser))


      })
  }

}

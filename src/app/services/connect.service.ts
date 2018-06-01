import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store'
import { AppState, ConnState } from '../store/state';
import { Observable} from 'rxjs';
import { User } from '../models/index';
import { getUserState } from '../store/selectors/user.selector';
export const INSTANCE_LOCATOR = "v1:us1:8a3110ca-c223-41a6-9333-2184f6d2bc83"

import {environment} from '../../environments/environment';
declare const Pusher : any;

import ChatKit from '@pusher/chatkit'
import { CONNECTED_USER } from '../store/actions/user.action';
import { MSG_RCVD } from '../store/actions/messages.action';
import { ROOM_SET } from '../store/actions/room.action';
import { RootState } from '../store/reducers';

@Injectable({
  providedIn: 'root'
})


export class ConnectService {
  user$ : Observable<User>
  pusher : any;
  chatManager : any;

  constructor(private store: Store<RootState>) {
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
    
  }

  connect() {
    this.chatManager
      .connect()
      .then((currentUser)=> {
        
        /**
         * Dispatch user is connected
         */
        this.store.dispatch({
          type: CONNECTED_USER,
          payload : currentUser
        })
        
        return currentUser.subscribeToRoom({
          roomId :       environment.pusher.default_room,
          messageLimit : environment.pusher.msg_buffer,
          hooks : {
            onNewMessage : message => {
              this.store.dispatch({
                type : MSG_RCVD,
                payload : message
              })
            }
          } 
        })
      })
      .then(currentRoom => {
        this.store.dispatch({
          type: ROOM_SET,
          payload : currentRoom
        })
      })
  }

}

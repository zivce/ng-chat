import { Injectable } from '@angular/core';
import { RootState, getConnUserState, getRoomState } from '../store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendService {
  private current_user$ : Observable<any>
  private current_room$ : Observable<any>

  constructor(
    private store : Store<RootState>
  ) { 
    this.current_user$ = this.store.select(getConnUserState)
    this.current_room$ = this.store.select(getRoomState);
  }

  public send( msg : string){
    let user_const = null;
    let room_con = null;

    this.current_user$.subscribe(
      (user) => {
        user_const = user;
      }
    )

    this.current_room$.subscribe(
      (room) => {
        room_con = room;
      }
    )
    
    const text = msg;
    user_const.connected_user.sendMessage({
      text,
      roomId : room_con.curr_room.id
    })

  }

}

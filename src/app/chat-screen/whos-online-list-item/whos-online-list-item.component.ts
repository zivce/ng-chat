import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootState, getRoomState } from '../../store/reducers';
import { selectRoom, selectPresent, selectPresentIds } from '../../store/selectors/room.selector';
import { environment } from '../../../environments/environment';
import { PresenceState, RoomState } from '../../store/state';
import { ConnectService } from '../../services/connect.service';
import { map } from 'rxjs/operators';
import { User } from '../../models';
import { Dictionary } from '@ngrx/entity/src/models';
import { PRESENCE_UPDATED } from '../../store/actions/room.action';

@Component({
  selector: 'app-whos-online-list-item',
  templateUrl: './whos-online-list-item.component.html',
  styleUrls: ['./whos-online-list-item.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class WhosOnlineListItemComponent implements OnInit,DoCheck {

  @Input() room : String;
  @Input() user : any;
  @Input() room$ : Observable<any>;

  present_users$ : Observable< string[] | number[] >;
  presenceIndicator : Boolean


  constructor(
    private cd : ChangeDetectorRef,
    private store : Store<RoomState>,
    private cs:ConnectService) { 
    this.presenceIndicator = false;
    
    this.present_users$ = this.store.select(selectPresentIds);
      
    this.cs.presenceStore$
      .subscribe(
        val => this.present_users$ = this.store.select(selectPresentIds))
    
    /** Find out how is online in group */
    this.present_users$.subscribe((ids_present_users : string[])=>{
        if(ids_present_users.length !== 0)
        {
          const match_of_user = ids_present_users.find((elem)=>{
            return elem === this.user;
          })


          if(match_of_user)
          {
            this.presenceIndicator = true;
            cd.markForCheck();
          }
          else
          {
            this.presenceIndicator = false;
            cd.markForCheck();
          }
        }
      
    })

  }
  ngDoCheck(){

  }
  
  ngOnInit() 
  {
    this.room$.subscribe((roomstate)=> {

      const users_arr = roomstate.users;
      const logged_in_user = window.localStorage.getItem("username");
      
      /**add just logged in user to entities */
      
     

      users_arr.forEach((user)=>{
        if(user.presence.state === "online")
        {
          this.store.dispatch({
            type : PRESENCE_UPDATED,
            payload : user
          })
        }

        // if(user.id === logged_in_user)
        // {
        //   // //find in arr and dispatch to ngrx store
        //   // const logged_in_user_obj =  users_arr.find(
        //   //   (elem) => {
        //   //     return elem.id === logged_in_user;
        //   //   }
        //   // )
  
        //   this.store.dispatch({
        //     type : PRESENCE_UPDATED,
        //     payload : user
        //   })
        // }
      })

      const presenceObj = users_arr.find((elem)=>{
        return elem.id === this.user; 
      });

      this.presenceIndicator = presenceObj.presence.state === "offline" ? false : true; 
    })
  }

}

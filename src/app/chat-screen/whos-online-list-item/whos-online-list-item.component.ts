import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootState, getRoomState } from '../../store/reducers';
import { selectRoom, selectPresent } from '../../store/selectors/room.selector';
import { environment } from '../../../environments/environment';
import { PresenceState, RoomState } from '../../store/state';
import { ConnectService } from '../../services/connect.service';
import { map } from 'rxjs/operators';
import { User } from '../../models';

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
  @Input() rerend : boolean;

  present_users$ : Observable<Array<User>>;

  presenceIndicator : Boolean
  constructor(
    private cd : ChangeDetectorRef,
    private store : Store<RoomState>,
    private cs : ConnectService) { 
    this.presenceIndicator = false;
    this.present_users$ = this.store.select(selectPresent);

    /** Find out how is online in group */
    this.present_users$.subscribe((resp)=>{
      
      console.log("getting array of joined users", resp);

      const joined_user = resp.filter((elem) => {
        return elem.name === this.user;
      })
      
      console.log("this guy joined", joined_user);

      if(joined_user.length === 1)
      {
        this.presenceIndicator = true;
        cd.markForCheck();
      }
      else
      {
        this.presenceIndicator = false;
      }

    })

  }
  ngDoCheck(){

  }
  
  ngOnInit() 
  {
    this.room$.subscribe((resp)=> {
      const presenceObj= resp.userStore.presenceStore.store;
      this.presenceIndicator = presenceObj[this.user].state === "offline" ? false : true; 
    })
  }

}

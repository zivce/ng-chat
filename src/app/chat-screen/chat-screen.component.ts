import { Component, OnInit, NgModule, ChangeDetectionStrategy, ChangeDetectorRef, NgZone } from '@angular/core';
import { WhosOnlineListComponent } from './whos-online-list/whos-online-list.component';
import { WhosOnlineListItemComponent } from './whos-online-list-item/whos-online-list-item.component';
import Chatkit from '@pusher/chatkit';
import { ConnectService } from '../services/connect.service';
import { Store } from '@ngrx/store';
import { RootState, getRoomState } from '../store/reducers';
import { Observable, Subscription, Subject } from 'rxjs';
import { selectRoom } from '../store/selectors/room.selector';
import { environment } from '../../environments/environment';




@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})

@NgModule({
  declarations: [
    WhosOnlineListComponent,
    WhosOnlineListItemComponent
  ],
  bootstrap:[WhosOnlineListComponent]

})
export class ChatScreenComponent implements OnInit {
  
  public room$ : Observable<any>;
  public users$ : Promise<any>;
  public present_users$ : Observable<any>
  public trigger_rerender_of_whos_online : boolean;
  
  room_name : string;
  subscription : Subscription = null;

  constructor(
    private _ngZone : NgZone,
    private connectService : ConnectService,
    private store : Store<RootState>,
    private ref : ChangeDetectorRef) {
    

    this.room$ = this.store.select(selectRoom)

    connectService.presenceStore$.subscribe((val)=>{
      this.trigger_rerender_of_whos_online = val;
      
    })

    this.subscription = this.room$.subscribe(( resp) => {
        if(resp)
        {
          this.room_name = resp.name;
          this.users$ = Promise.resolve(resp.userIds);
        }
      })
  

  }
  ngOnDestroy(){
    
    this.subscription.unsubscribe();
  }
  ngOnInit() {
    this.connectService.connect();
    
  }

}

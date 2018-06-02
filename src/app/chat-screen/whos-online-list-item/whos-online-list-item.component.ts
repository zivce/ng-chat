import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootState, getRoomState } from '../../store/reducers';
import { selectRoom, selectPresent } from '../../store/selectors/room.selector';
import { environment } from '../../../environments/environment';
import { PresenceState } from '../../store/state';
import { ConnectService } from '../../services/connect.service';

@Component({
  selector: 'app-whos-online-list-item',
  templateUrl: './whos-online-list-item.component.html',
  styleUrls: ['./whos-online-list-item.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class WhosOnlineListItemComponent implements OnInit {

  @Input() room : String;
  @Input() user : any;
  @Input() room$ : Observable<any>;
  @Input() rerend : boolean;

  present_users$ : Observable<any>;

  presenceIndicator : Boolean
  constructor(
    private cd : ChangeDetectorRef,
    private store : Store<PresenceState>,
    private cs : ConnectService) { 
    this.presenceIndicator = false;
    // this.present_users$ = this.store.select(selectPresent);

    // this.present_users$.subscribe(resp => console.log("present", resp));

    this.cs.presenceStore$.subscribe((val)=> {
      console.log("dodat user");
      console.log("source of room ",this.room$.source);
      
    })

  }
  ngDoCheck() {

  }
  ngOnChanges()
  {
    
  }
  
  ngOnInit() 
  {
    this.room$.subscribe((resp)=> {
      console.log(environment.log.info + JSON.stringify(resp.userStore.presenceStore.store));

      const presenceObj= resp.userStore.presenceStore.store;
      
      console.log(environment.log.info + JSON.stringify(presenceObj));
      this.presenceIndicator = presenceObj[this.user].state === "offline" ? false : true; 

    })
  }

}

import { Component, OnInit, NgModule } from '@angular/core';
import { WhosOnlineListComponent } from './whos-online-list/whos-online-list.component';
import { WhosOnlineListItemComponent } from './whos-online-list-item/whos-online-list-item.component';
import Chatkit from '@pusher/chatkit';
import { ConnectService } from '../services/connect.service';
import { Store } from '@ngrx/store';
import { RootState } from '../store/reducers';




@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.css']
})

@NgModule({
  declarations: [
    WhosOnlineListComponent,
    WhosOnlineListItemComponent
  ],
  bootstrap:[WhosOnlineListComponent]

})
export class ChatScreenComponent implements OnInit {

  constructor(private connectService : ConnectService,private store : Store<RootState>) {

   }

  ngOnInit() {
    this.connectService.connect();
    
  }

}

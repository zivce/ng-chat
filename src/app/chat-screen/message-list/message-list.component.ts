import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../../models';
import { RootState } from '../../store/reducers';
import { MsgState } from '../../store/state';
import { Store } from '@ngrx/store';
import { selectMessages, selectMessagesArr } from '../../store/selectors/message.selector';
import { Dictionary } from '@ngrx/entity/src/models';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  private messages$ : Observable<Array<Message>>;
  
  constructor(
    private store : Store<RootState>
  
  ) { 
    

    this.messages$ = this.store.select(selectMessagesArr);
  }

  ngOnInit() {
  }

}

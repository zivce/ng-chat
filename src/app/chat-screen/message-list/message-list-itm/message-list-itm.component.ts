import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../models';

import * as moment from 'moment';


@Component({
  selector: 'app-message-list-itm',
  templateUrl: './message-list-itm.component.html',
  styleUrls: ['./message-list-itm.component.scss']
})
export class MessageListItmComponent implements OnInit {

  @Input() msg : Message;
  private date : string;

  constructor() {
    // this.date = moment(this.msg.createdAt).format("dddd HH:mm A");

  }
    
  
  prettyPrintUserId(){
    /**Get to last msg */
    const t  = document.querySelector('.chat_main');
    if(t)
      t.scrollTop = t.scrollHeight;

    const len = this.msg.senderId.length;
    return this.msg.senderId.charAt(0) + this.msg.senderId.charAt(len-1);

  }
  
  ngOnInit() {
  }

}

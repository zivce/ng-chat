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
  
  constructor() {

   }
  
  prettyPrintUserId(){
    const len = this.msg.senderId.length;
    return this.msg.senderId.charAt(0) + this.msg.senderId.charAt(len-1);

  }
  
  ngOnInit() {
  }

}

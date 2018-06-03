import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../models';

@Component({
  selector: 'app-message-list-itm',
  templateUrl: './message-list-itm.component.html',
  styleUrls: ['./message-list-itm.component.scss']
})
export class MessageListItmComponent implements OnInit {

  @Input() msg : Message;
  
  constructor() { }

  ngOnInit() {
  }

}

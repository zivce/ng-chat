import { Component, OnInit } from '@angular/core';
import { SendService } from '../../services/send.service';

@Component({
  selector: 'app-send-message-form',
  templateUrl: './send-message-form.component.html',
  styleUrls: ['./send-message-form.component.css']
})
export class SendMessageFormComponent implements OnInit {

  constructor(private sendSrv : SendService ) { }
  
  sendMsg(event)
  {
    if(event.key !== "Enter")
      return;
    
    console.log(event);
    this.sendSrv.send(event.target.value);
    event.target.value = "";
  }
  ngOnInit() {
  }

}

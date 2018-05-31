import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whos-online-list',
  templateUrl: './whos-online-list.component.html',
  styleUrls: ['./whos-online-list.component.scss']
})
export class WhosOnlineListComponent implements OnInit {
  private room_name:String;
  constructor() { }

  ngOnInit() {
    this.room_name = "ehllo";
  }

}

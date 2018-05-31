import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-whos-online-list-item',
  templateUrl: './whos-online-list-item.component.html',
  styleUrls: ['./whos-online-list-item.component.scss']
})
export class WhosOnlineListItemComponent implements OnInit {

  @Input() room : String;
  @Input() user : any;

  constructor() { 
    
  }

  ngOnInit() {
  }

}

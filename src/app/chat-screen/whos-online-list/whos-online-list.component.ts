import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-whos-online-list',
  templateUrl: './whos-online-list.component.html',
  styleUrls: ['./whos-online-list.component.scss']
})
export class WhosOnlineListComponent implements OnInit {
 
  @Input() roomname$:Observable<any>;
  @Input() users$: Promise<any>;
  @Input() rerender : boolean;
  
  constructor() { 
  }

  ngOnInit() {

  }

}

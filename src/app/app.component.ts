import { Component, OnInit } from '@angular/core';
import { AppState } from './store/state';
import { Store, select } from '@ngrx/store';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators'
import { User } from './models';

import { getUserState } from './store/selectors/user.selector';


// https://toddmotto.com/ngrx-store-understanding-state-selectors
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  user$ : Observable<User>
  user : String;
  constructor(private store: Store<AppState>)
  {
    if(this.store)
      this.user$ = this.store.select(getUserState);
    
    this.user$.subscribe(( resp) => {
    console.log("[DEBUG] WHAT APP SEES"  + JSON.stringify(resp) );
      if(resp)
        this.user = resp.name;
    })

  }


  ngOnInit(): void {
   
  }

  title = 'app';
}

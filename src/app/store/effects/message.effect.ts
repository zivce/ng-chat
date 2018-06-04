import { Injectable  } from '@angular/core';
//kind of like reducer
//deal with observable streams 

import { Effect, Actions } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';


import * as MyActions from '../actions';
import * as fromServices from '../../services';



@Injectable() 
export class MessageEffects {
    constructor(
        private actions$ : Actions ,
        private messagesService : fromServices.ConnectService  
    ){
    }

    @Effect()
    newMessages$ = this.actions$
    .ofType(
        MyActions.MSG_RCVD
    )
    .pipe(
        switchMap(() => {

        })
    )
    


}
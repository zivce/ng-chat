import { Injectable  } from '@angular/core';
//kind of like reducer
//deal with observable streams 

import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';


import * as MyActions from '../actions';
import * as fromServices from '../../services';
import { LoginUser, EnableLoginUI } from '../actions';
import { of } from 'rxjs/internal/observable/of';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models';



@Injectable() 
export class LoginEffects {
    
    constructor( 
      private actions$ : Actions ,
      private loginService : fromServices.LoginService,
      private toast : ToastrService
    ){
    }

    @Effect()
    newUser$ = this.actions$
    .ofType(
        MyActions.LOGIN_USER_EFFECT
    )
    //extract payload
    .map( (action : MyActions.LoginUser) => action.payload)
    .pipe(
        //new observable.. 
        switchMap((payload) => {
            //after logged put in store
            return this.loginService.loginUser(payload).pipe(
                map(user => new LoginUser(new User(user))),
                catchError(err => of(this.toast.error("Error happened.","Service down!",{
                    positionClass : 'toast-top-right'
                  }) ))   
            )
        }),
      
    )
    


}
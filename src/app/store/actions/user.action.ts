import {LoginService} from '../../services/login.service';
import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store'; 
import { User } from '../../models';

export const LOGIN_USER = "[POST] login user";
export const CONNECTED_USER = "[AUTH] connected user";

export class LoginUser  implements Action {
    
    type: string = LOGIN_USER;
    
    constructor(public payload: any){

    }
} 

export class ConnectedUser implements Action {
    type : string = CONNECTED_USER;

    constructor(public payload: any)
    {

    }
}
import {LoginService} from '../../services/login.service';
import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store'; 
import { User } from '../../models';
import { Component } from '@angular/compiler/src/core';

export const LOGIN_USER = "[POST] login user";
export const LOGIN_USER_ERROR = "[ERROR] login user error";
export const ENABLE_LOGIN_UI = "[UI] enable login";
export const LOGIN_USER_EFFECT = "[POST] login user effect";

export const CONNECT_USER_EFFECT = "[AUTH] connect user effect";
export const CONNECTED_USER = "[AUTH] connected user";

export const DISCONNECTED_USER = "[UPDATE] disconnected user";

export class LoginUser  implements Action {
    
    type: string = LOGIN_USER;
    
    constructor(public payload: any){

    }
} 


export class LoginUserEffect  implements Action {
    
    type: string = LOGIN_USER_EFFECT;
    
    constructor(public payload: any){

    }
} 

export class EnableLoginUI implements Action {
    type : string = ENABLE_LOGIN_UI;

    constructor(){

    }
}



export class ConnectedUser implements Action {
    type : string = CONNECTED_USER;

    constructor(public payload: any)
    {

    }
}



export class  DisconnectedUser implements Action {
    type : string = DISCONNECTED_USER;

    constructor(public id : string) {
        
    }
    

}
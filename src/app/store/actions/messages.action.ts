import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store'; 
import { User, Message } from '../../models';

export const MSG_RCVD = "[GET] message received";

export class MessageReceived  implements Action {
    
    type: string = MSG_RCVD;
    
    constructor(public payload: Message){

    }
} 

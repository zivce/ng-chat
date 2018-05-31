import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store'; 

export const ROOM_SET = "[GET] current room set";

export class RoomReceived  implements Action {
    
    type: string = ROOM_SET;
    
    constructor(public payload: any){

    }
} 

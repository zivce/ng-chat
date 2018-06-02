import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store'; 

export const ROOM_SET = "[GET] current room set";
export const PRESENCE_UPDATED = "[UPDATE] got more users";

export class RoomReceived  implements Action {
    
    type: string = ROOM_SET;
    
    constructor(public payload: any){

    }
} 

export class PresenceRoomUpdated implements Action {
    type : string = PRESENCE_UPDATED;
    constructor(public payload : any)
    {
        
    }
}

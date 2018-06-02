import { ActionReducer, State } from "@ngrx/store";
import { Action } from "@ngrx/store";
import { initRoomState, initPresenceState } from "../state";
import { ROOM_SET, RoomReceived, PRESENCE_UPDATED, PresenceRoomUpdated } from "../actions/room.action";




export function roomReducer(state = initRoomState, action : Action)
{
    switch(action.type){

        case ROOM_SET:{
            const {payload} = action as RoomReceived; 

            return {
                ...state,
                curr_room : payload
            }
        }
        default : 
        {
            return state;        
        }
    }
}

export function presenceReducer (state = initPresenceState, action : Action) 
{
    switch(action.type){
        case PRESENCE_UPDATED:{
            const {payload} = action as PresenceRoomUpdated; 
            return {
                ...state,
                present_users :  {...state.present_users, payload}
            }
        }
        default : 
        {
            return state;        
        }
    }
}
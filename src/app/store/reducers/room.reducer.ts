import { ActionReducer, State } from "@ngrx/store";
import { Action } from "@ngrx/store";
import { initRoomState, initPresenceState, adapter } from "../state";
import { ROOM_SET, RoomReceived, PRESENCE_UPDATED, PresenceRoomUpdated } from "../actions/room.action";
import { DISCONNECTED_USER, DisconnectedUser } from "../actions/user.action";




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
        case DISCONNECTED_USER : 
        {
            const { id }  = action as DisconnectedUser;

            return adapter.removeOne(id , state);

         }

        case PRESENCE_UPDATED:{
            const {payload} = action as PresenceRoomUpdated; 
            return adapter.addOne(payload, state);
        }
        default : 
        {
            return state;        
        }
    }
}
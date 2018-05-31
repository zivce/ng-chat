import { ActionReducer, State } from "@ngrx/store";
import { Action } from "@ngrx/store";
import { initRoomState } from "../state";
import { ROOM_SET, RoomReceived } from "../actions/room.action";


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

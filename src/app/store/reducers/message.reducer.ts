import { ActionReducer, State } from "@ngrx/store";
import { Action } from "@ngrx/store";
import { initMsgState } from "../state";
import { MSG_RCVD, MessageReceived } from "../actions/messages.action";
import { environment } from "../../../environments/environment";


export function messageReducer(state = initMsgState, action : Action)
{
    switch(action.type){
        case MSG_RCVD:{
            const {payload} = action as MessageReceived; 

            return {
                ...state,
                arr_of_msgs : [...state.arr_of_msgs, payload]
            }
        }
        default : 
        {
            return state;        
        }
    }
}

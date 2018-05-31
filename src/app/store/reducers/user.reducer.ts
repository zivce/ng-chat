import { initState, AppState, initConnState, ConnState } from "../state";
import { User } from "../../models";
import { ActionReducer, State } from "@ngrx/store";
import { Action } from "@ngrx/store";
import { LoginUser, LOGIN_USER,CONNECTED_USER,ConnectedUser } from "../actions//user.action";


export function loginUserReducer(state = initState, action : Action)
{
    switch(action.type){
        case LOGIN_USER:{
            const {payload} = action as LoginUser; 
            return {
                ...state,
                user: payload
            }
        }
        default : 
        {
            return state;        
        }
    }
}

export function connectedUserReducer(state = initConnState, action : Action) 
{
    switch (action.type)
    {
        case CONNECTED_USER : {
            const {payload}  = action as ConnectedUser;
            return {
                ...state,
                connected_user: payload
            }
        }
        default: 
        {
            return state;
        }
    }
}
// https://github.com/sapientglobalmarkets/staffer/blob/master/staffer-ng2-ngrxstore/src/app/shared/store/state.ts
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'
import { User, Message } from '../models/index';

export interface AppState {
    user : User
}

export const initState = {
    user : new User("user")
}

export interface ConnState {
    connected_user : any
}

export const initConnState = {
    connected_user : null
}

// export interface MsgState {
//     arr_of_msgs : Array<any>
// }

// export const initMsgState = {
//     arr_of_msgs : new Array<any>()
// }

export const adapterMsg : EntityAdapter<Message> = createEntityAdapter<Message>();

export interface MsgState extends EntityState<Message> {}

export const initMsgState : MsgState = adapterMsg.getInitialState();

export interface RoomState {
    curr_room : any
}

export const initRoomState = {
    curr_room : null
}



export const adapter : EntityAdapter<User> = createEntityAdapter<User>();


export interface PresenceState extends EntityState<User>{
    
}


export const initPresenceState : PresenceState = adapter.getInitialState();
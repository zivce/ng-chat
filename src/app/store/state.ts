// https://github.com/sapientglobalmarkets/staffer/blob/master/staffer-ng2-ngrxstore/src/app/shared/store/state.ts

import {User} from '../models/index';

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

export interface MsgState {
    arr_of_msgs : Array<any>
}

export const initMsgState = {
    arr_of_msgs : new Array<any>()
}


export interface RoomState {
    curr_room : any
}

export const initRoomState = {
    curr_room : null
}


export interface PresenceState {
    present_users : Object
}

export const initPresenceState = {
    present_users : null
}
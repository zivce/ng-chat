// https://github.com/sapientglobalmarkets/staffer/blob/master/staffer-ng2-ngrxstore/src/app/shared/store/state.ts

import {User} from '../models/index';

export interface AppState {
    user : User
}

export const initState = {
    user : new User("user")
}

export interface ConnState {
    conn_user : any
}

export const initConnState = {
    conn_user : null
}
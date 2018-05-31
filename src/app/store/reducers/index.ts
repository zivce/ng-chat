
import {createFeatureSelector, ActionReducerMap} from '@ngrx/store'
import { loginUserReducer, connectedUserReducer } from './user.reducer';

import { User } from '../../models';
import { AppState, ConnState, MsgState } from '../state';

import { messageReducer } from './message.reducer';
import { roomReducer } from './room.reducer';


export const ROOT_REDUCER = {
    user : loginUserReducer,
    connected_user : connectedUserReducer,
    messages : messageReducer,
    curr_room : roomReducer
}

export const getUserState = createFeatureSelector<AppState> ('user');

export const getConnUserState = createFeatureSelector<ConnState>('connected_user');

export const getMessagesState = createFeatureSelector<MsgState>('messages');

export const getRoomState = createFeatureSelector<MsgState>('curr_room');
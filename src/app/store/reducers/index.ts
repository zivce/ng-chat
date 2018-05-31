
import {createFeatureSelector, ActionReducerMap} from '@ngrx/store'
import { loginUserReducer, connectedUserReducer } from './user.reducer';

import { User } from '../../models';
import { AppState, ConnState, MsgState, RoomState } from '../state';

import { messageReducer } from './message.reducer';
import { roomReducer } from './room.reducer';

export interface RootState {
    user : AppState,
    connected_user : ConnState,
    messages : MsgState,
    curr_room : RoomState

} 

export const ROOT_REDUCER = {
    user : loginUserReducer,
    connected_user : connectedUserReducer,
    messages : messageReducer,
    curr_room : roomReducer
}

export const getUserState = createFeatureSelector<RootState> ('user');

export const getConnUserState = createFeatureSelector<RootState>('connected_user');

export const getMessagesState = createFeatureSelector<RootState>('messages');

export const getRoomState = createFeatureSelector<RootState>('curr_room');
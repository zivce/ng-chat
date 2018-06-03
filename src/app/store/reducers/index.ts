
import {createFeatureSelector, ActionReducerMap} from '@ngrx/store'
import { loginUserReducer, connectedUserReducer } from './user.reducer';

import { User } from '../../models';
import { AppState, ConnState, MsgState, RoomState, PresenceState } from '../state';

import { messageReducer } from './message.reducer';
import { roomReducer, presenceReducer } from './room.reducer';
import { PresenceChannel } from 'pusher-js';

export interface RootState {
    user : AppState,
    connected_user : ConnState,
    messages : MsgState,
    curr_room : RoomState,
    present_users : PresenceState

} 

export const ROOT_REDUCER = {
    user : loginUserReducer,
    connected_user : connectedUserReducer,
    messages : messageReducer,
    curr_room : roomReducer,
    present_users : presenceReducer
}

export const getUserState = createFeatureSelector<AppState> ('user');
export const getConnUserState = createFeatureSelector<RootState>('connected_user');
export const getMessagesState = createFeatureSelector<RootState>('messages');
export const getRoomState = createFeatureSelector<RootState>('curr_room');
export const getPresenceState = createFeatureSelector<PresenceState>('present_users');

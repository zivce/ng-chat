
import {createFeatureSelector, ActionReducerMap} from '@ngrx/store'
import { loginUserReducer, connectedUserReducer } from './user.reducer';
import { User } from '../../models';
import { AppState } from '../state';


export const ROOT_REDUCER = {
    user : loginUserReducer,
    connected_user : connectedUserReducer
}

export const getUserState = createFeatureSelector<AppState> ('user');
import * as fromStore from '../reducers/user.reducer';
import * as fromFeature from '../reducers/index';

import {createSelector} from '@ngrx/store'
import { AppState, ConnState, MsgState } from '../state';
import { Message } from '../../models';

export const selectMessages = createSelector(
    fromFeature.getMessagesState,
    (state : MsgState) => {
        if(state)
            return state.entities;
    }
)


export const selectMessagesIds = createSelector(
    fromFeature.getMessagesState,
    (state : MsgState) => {
        if(state)
            return state.ids;
    }
)



export const selectMessagesArr = createSelector (
    selectMessagesIds,
    selectMessages,
    (ids: number [] ,messages) => ids.map((id : number | string) => {
        return messages[id]
    })
    
)
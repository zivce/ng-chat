import * as fromStore from '../reducers/user.reducer';
import * as fromFeature from '../reducers/index';

import {createSelector} from '@ngrx/store'
import { AppState, ConnState, RoomState, PresenceState } from '../state';
import { environment } from '../../../environments/environment';

export const selectRoom  = createSelector(
    fromFeature.getRoomState,
    (state: RoomState) => { 
        if(state) 
            return state.curr_room; 
    }
) 
export const selectPresent = createSelector(
    fromFeature.getPresenceState,
    (state : PresenceState) => {
        if(state)
            return state.present_users;
    }
)
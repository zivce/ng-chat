import * as fromStore from '../reducers/user.reducer';
import * as fromFeature from '../reducers/index';

import {createSelector} from '@ngrx/store'
import { AppState, ConnState } from '../state';

export const selectRoom  = createSelector(
    fromFeature.getRoomState,
    (state: fromFeature.RootState) => { 
        if(state) 
            return state.curr_room; 
    }
) 
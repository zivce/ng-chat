import * as fromStore from '../reducers/user.reducer';
import * as fromFeature from '../reducers/index';

import {createSelector} from '@ngrx/store'
import { AppState, ConnState } from '../state';
import { User } from '../../models';

export let getUserState  = createSelector(
    fromFeature.getUserState,
    (state: AppState) => { 
        if(state) 
            return state.user; 
    }
) 

export let getConnUserState  = createSelector(
    fromFeature.getConnUserState,
    (state: fromFeature.RootState) => { 
        if(state) 
            return state.connected_user; 
    }
) 
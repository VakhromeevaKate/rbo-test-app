import { keyBy } from 'lodash';
import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';
import { stat } from 'fs';

/*const autosFetchingState = handleActions({
[actions.fetchAutosRequest]() {
    return 'requested';
},
[actions.fetchAutosFailure]() {
    return 'failed';
},
[actions.fetchAutosSuccess]() {
    return 'successed';
},
}, 'none');

const autos = handleActions({
[actions.fetchAutosSuccess](state, { payload }) {
    return keyBy(payload.autos, 'Id');
},
}, {});*/

const initialState = false;

export default function reducer (state = initialState) {
    switch(actions) {
        case 'AUTOS_FETCH_REQUEST': 
            return 'REQUEST';
        default: 
            return 'UNKNOWN';
    }
}


  
import * as actions from '../actions/actionTypes'

export const initialState = {
    config: {}
}

export const preferenceReducer = (state: any =initialState, action : any = {}) => {
    switch(action.type){
        case actions.UPDATE_PREFS:
            return {
                ...state,
                config: {
                    ...state.config,
                    ...action.update
                }
            }
        default:
            return state;
    }
}
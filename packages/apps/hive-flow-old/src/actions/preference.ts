import * as types from './actionTypes'

export const updatePrefs = (update?: any) => {
    return {type: types.UPDATE_PREFS, update: update}
}
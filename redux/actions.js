export const SET_TEXT = 'SET_TEXT'
export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY'

export const setText = (text) => ({
    type: SET_TEXT,
    payload: text,
})

export const toggleVisibility = () => ({
    type: TOGGLE_VISIBILITY,
})

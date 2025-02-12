import { SET_TEXT, TOGGLE_VISIBILITY } from './actions'

const initialState = {
    text: '',
    isVisible: true,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEXT:
            return { ...state, text: action.payload }
        case TOGGLE_VISIBILITY:
            return { ...state, isVisible: !state.isVisible }
        default:
            return state
    }
}

export default reducer

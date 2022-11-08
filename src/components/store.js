import * as redux from 'redux';

const initialstate = {
    count: 0,
    showPopup: 0
}

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: action.amount };
            break;
        case 'decrement':
            return { ...state, count: state.count - 1 };
            break;
        case 'popup':
            return { ...state, showPopup: 1 };
            break;
        case 'closepopup':
            return { ...state, showPopup: 0 };
            break;
        default:
            return state;
    }
}

const store = redux.createStore(reducer);
export default store;
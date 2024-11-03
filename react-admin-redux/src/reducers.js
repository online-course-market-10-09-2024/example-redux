// reducers.js
const initialState = {
    userStatus: 'active',
    searchQuery: '',
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER_STATUS':
            return { ...state, userStatus: action.payload };
        case 'SET_SEARCH_QUERY':
            return { ...state, searchQuery: action.payload };
        default:
            return state;
    }
};

export default rootReducer;

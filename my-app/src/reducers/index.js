// add a reducer file and build out a reducer with a default return. Build your initial State object and export both the initial State and reducer.
export const initialState ={
    item: 'Learn about reducers',
    completed: false,
    id: 3389820
};

export const titleReducer = (state,action) =>{
    switch(action.type){
        case 'SET_ITEM':
            return {...state, item: action.payload};
        case 'TOGGLE_COMPLETED':
            return {...state, completed: action.payload};
        default:
            return state;
    }
}
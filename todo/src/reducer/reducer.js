export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589 
}


const reducer = (state, action) =>{
    switch(action.type){
        case('SET_ITEM'):
            return({...state, item:action.payload})
        case('ADD_TODO'):
             return({...state, initialState:[...state.initialState, {item:action.payload, completed:false, id :Math.round(Math.random()*1000)}]})

        default:
            return(state)
    }
}

export default reducer;
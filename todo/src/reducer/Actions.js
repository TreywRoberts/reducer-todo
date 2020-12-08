export const SET_ITEM = "SET_TITLE";
// export const SET_EDITING = "SET_EDITING";
// export const SET_NEW_TITLE_TEXT = "SET_NEW_TITLE_TEXT";
export const ADD_TODO = 'ADD_TODO'

export const setItem = (item) => {
    return( {type:SET_ITEM, payload:item } );
}
export const addTodo = (item) =>{
    return{type:ADD_TODO, payload:item}
}

// export const setEditing = (willEdit) => {
//     return( {type:SET_EDITING, payload:willEdit } );
// }

// export const setNewTitleText = (titleText) => {
//     return( {type:SET_NEW_TITLE_TEXT, payload:titleText } );
// }
import React, {useReducer} from "react"
import {initialState, reducer} from "../reducers/index.js"
import Form from "./Form"
import {Container} from "../styles/styles.js"



const TodoList = ()=>{
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <Container className='container'>
            <Form state={state} dispatch={dispatch} />
            {state.todoList.map(listItem => {
                return (
                    <div key={listItem.id}>
                        <div className="single-item-line">
                            <span className="checkmark">{listItem.completed ? ' ✔ ' : null}</span>
                            <span className="item" key={listItem.id}>{listItem.item}</span>
                            <button onClick={()=>dispatch({
                                id: listItem.id,
                                type: 'COMPLETE_ITEM'
                            })}>
                                Toggle Complete
                            </button>
                            <button onClick={()=>dispatch({
                                id: listItem.id,
                                type: 'REMOVE_ITEM'
                            })}>
                                Remove
                            </button>
                        </div>
                       
                    </div>
                )
            })}
            <button className='clearAll' onClick={()=>dispatch({
                type: 'CLEAR_COMPLETED'
            })}>Clear all completed</button>
            </Container>
        </div>
   
    )
}

export default TodoList
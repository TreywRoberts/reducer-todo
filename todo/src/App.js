import './App.css';
import React, {useReducer} from 'react'
import reducer, {initialState} from './reducer/reducer'
import {setItem, addTodo, setNewTitleText} from './reducer/Actions'
// import TodoForm from './components/newTodo'


function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)

  const handleChanges = e =>{
    dispatch(setItem(e.target.value))
    console.log(e.target.value)
  }

  return (
    <div className="App">
      <header>
        TO DO LIST
      </header>
      <form onSubmit={handleChanges} type='text' name='item'>
        <input type='text' name='item' value={state.setItem} onChange={handleChanges}  />
        <button onClick={()=>{
          dispatch(setItem(state.setItem));
        }}>NEW TASK</button>

      </form>
    </div>
  );
}

export default App;

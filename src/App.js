import { useState }from 'react';
import BasicGrid from "./To-do-list/grid"
import Navbar from "./To-do-list/navbar"
import AddTask from "./To-do-list/addTask"
import "./App.css"

function App() {
  let[toDo, setToDo]=useState ([])
    let[onProgress, setOnProgress]=useState([])
    let[complete, setComplete]=useState([])
  return (
    <>
    <Navbar/>
    <div className="App">
    <AddTask toDo={toDo} setToDo={setToDo}/>
    <BasicGrid setToDo={setToDo} toDo={toDo} setOnProgress={setOnProgress} 
    onProgress={onProgress} complete={complete} setComplete={setComplete} />
  </div>
  </>
  );
}

export default App;

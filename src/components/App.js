
import React,{useState} from "react";
import './../styles/App.css';
import Sum from "./Sum";
const App = () => {
  let [sum,setSum]=useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
        <Sum sum={sum} setSum={setSum}/>
          <p>Sum:{sum}</p>
    </div>
  )
}

export default App

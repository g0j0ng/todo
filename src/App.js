import {useState, useEffect} from "react";

function Hello(){
  function byeFn() {
    console.log("바이ㅠㅠ");
  }
  function hiFn() {
    console.log("만듬^^");
    return byeFn;
  }
  useEffect (hiFn, []);
  return (
    <h1>hello</h1>
  );
}


function App() {
  const [showing, setShowing] = useState(false);
  const onClick = ()=> setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

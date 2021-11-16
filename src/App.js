import Content from "./Content"
import Navabar from "./Navabar"
import { useState } from "react";


function App() {
  const [show, setShow] = useState(false)



  return (
    <div className="App" style={{ padding: 20 }}>
      <Navabar />
      <button onClick={() => setShow(!show)} > Toggle </button>
      {show && <Content />}
    </div>
  );
}
export default App;

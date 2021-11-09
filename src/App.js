import { useState } from "react";

function App() {
  // Khi đặt trên state là gì thì đặt thằng thứ 2 theo tên của nó là thêm set và theo quy ước Camel Case
  const [counter, setCounter] = useState(1)
  const handleIncrease = () => {
    setCounter(counter + 1)
  }
  
  return (
    <div className="App" style={{ padding: 20 }}>
      <h3>{counter}</h3>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;

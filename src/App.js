import { useState } from "react";


const order = [100,200,300]

function App() {
  
  const total  = order.reduce((total, cur) => total + cur)

  // Khi đặt trên state là gì thì đặt thằng thứ 2 theo tên của nó là thêm set và theo quy ước Camel Case
  const [counter, setCounter] = useState(()=>{
    const total  = order.reduce((total, cur) => total + cur)
    console.log(total)
    return total
  })
  const handleIncrease = () => {
    setCounter(preState => preState +1)
  }
  
  return (
    <div className="App" style={{ padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;

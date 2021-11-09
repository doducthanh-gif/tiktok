import { useState } from "react";


const gifts = [
  'CPU i10',
  'CPU i3',
  'CPU i9'
]

function App() {
  const [gift, setGift] = useState()

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index])

    console.log(index);
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <h1> {gift || 'Chưa có phần thưởng'} </h1>
      <button onClick={randomGift}> Lấy phần thưởng</button>
    </div>
  );
}

export default App;

import { useState } from "react";


function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    // Call API
    console.log({
      name,
      email
    });

  }

  console.log(name);

  return (
    <div className="App" style={{ padding: 20 }}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>ChangName</button>
    </div>
  );
}
export default App;

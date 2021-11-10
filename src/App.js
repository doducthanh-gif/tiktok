import { useState } from "react";

const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'JavaScript'
  },
  {
    id: 3,
    name: 'ReactJS'
  }

]

function App() {
  const [checked, setChecked] = useState(2)
  console.log(checked);

  const handleSubmit = () => {
    // Call API
    console.log({ id: checked });

  }
  return (
    <div className="App" style={{ padding: 20 }}>
      {courses.map(course => (
        // Đặt key cho thẻ cấp cao nhất thì mới hết waring
        <div key={course.id}>
          <input type="radio"
            onChange={() => setChecked(course.id)}
            checked={checked === course.id}
          />
          {course.name}
        </div>

      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}
export default App;

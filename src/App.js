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
  const [checked, setChecked] = useState([])
  console.log(checked);

  const handleSubmit = () => {
    // Call API
    console.log({ id: checked });
  }

  // Bảo lưu data đã nhận bằng toán tử giải
  const handleCheck = (id) => {
    setChecked(pre => {
      const isChecked = checked.includes(id)
      if (isChecked) {
        return checked.filter (item => item !== id)

      } else {
        return [...pre, id]
      }
    })

  }

  return (
    <div className="App" style={{ padding: 20 }}>
      {courses.map(course => (
        // Đặt key cho thẻ cấp cao nhất thì mới hết waring
        <div key={course.id}>
          <input type="checkbox"
            onChange={() => handleCheck(course.id)}
            checked={checked.includes(course.id)} // includes sẽ trả về true nếu như trong mảng checked có chứa course.id
          />
          {course.name}
        </div>

      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}
export default App;

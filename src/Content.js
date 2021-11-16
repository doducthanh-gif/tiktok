import { useEffect, useState } from "react"

const citys = [
    { id: 1, name: 'Ha Noi' },
    { id: 2, name: 'Hai Phong' },
    { id: 3, name: 'Hưng Yên' },

]

function Content() {
    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail);
        }
        window.addEventListener(`city-${lessonId}`, handleComment)
        return () => {
            window.removeEventListener(`city-${lessonId}`, handleComment)
        }
    }, [lessonId])

    return (
        <div>
            <ul>
                {citys.map(city => (
                    <li
                        key={city.id}
                        style={{
                            color: lessonId === city.id ? 'red' : 'green'
                        }}
                        onClick={() => setLessonId(city.id)}
                    >
                        {city.name}
                    </li>
                ))}
            </ul>

        </div>

    )
}

export default Content
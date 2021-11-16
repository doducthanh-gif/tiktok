/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react"

function Navabar() {

    const navData = [
        { id: 1, name: 'Home Dashboard' },
        { id: 2, name: 'Report' },
        { id: 3, name: 'Project List' },
        { id: 4, name: 'Quản lí chất lượng' },
        { id: 5, name: 'Phân bố nguồn lực' },

    ]
    const [lessonId, setLessonId] = useState(1)
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    {navData.map(nav => (
                        <li class="nav-item">
                            <a class="nav-link" href="#" style={{ color: lessonId === nav.id ? 'green' : 'white' }} onClick={() => setLessonId(nav.id)} >{nav.name} <span class="sr-only">(current)</span></a>
                        </li>
                    ))}
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
export default Navabar
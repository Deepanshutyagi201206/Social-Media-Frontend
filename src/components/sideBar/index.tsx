import { Link } from "react-router-dom"

const SideBar = () => {
    return (
        <div>
            <div></div>
            <div>
                <Link to="/" >Home</Link>
                <Link to="/messages" >Messages</Link>
            </div>
        </div>
    )
}

export default SideBar
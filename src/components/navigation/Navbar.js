import {NavLink} from 'react-router-dom'

const style = {
    width: "60%",
    margin: "5% 0 10%",
    padding: "1em",
    textDecoration: "none",
    color: "black",
    backgroundColor: "orange",
    fontWeight: "bold",
    verticalAlign: "center",
    
}
const Navbar = () => {
    return (
        <div>
            <NavLink
                activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/"
            >Home</NavLink>
         <NavLink
                activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/games"
            >Games</NavLink>
        <NavLink
                activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/about"
            >About</NavLink>
        </div>
    )
}
export default Navbar
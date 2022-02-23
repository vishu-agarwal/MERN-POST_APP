import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
         <div >
        
         < NavLink to = "/reg" > Register </NavLink>

        <h1> </h1>

        < NavLink to = "/" > login </NavLink>
        
        </div >

        
    )
}

export default Header;
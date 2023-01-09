import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'

const TopMenu = () => {
    return ( 
        <div>
            <ul>
                <li style={{display : "inline", padding: "5px"}}><Link to="/">Home</Link></li>
                <li style={{display : "inline", padding: "5px"}}><Link to="/products">Products</Link></li>
                <li style={{display : "inline", padding: "5px"}}><Link to="/contactUs">Contact Us</Link></li>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </ul>
        </div>
     );
}
 
export default TopMenu;
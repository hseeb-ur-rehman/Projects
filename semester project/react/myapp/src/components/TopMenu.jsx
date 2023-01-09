import React from 'react';
import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button'
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import "../App.css"



const TopMenu = () => {
    
    return ( 
        <AppBar position='static'>
            <Toolbar sx={{display: "flex" , justifyContent: "space-between"}}>
                <Typography variant='h6'>
                    <Link to="/" className='link'>Home</Link>
                </Typography>
                <Typography variant='h6'>
                    <Link to="/products" className='link'>Products</Link>
                </Typography>
                <Typography variant='h6'>
                    <Link to="/login" className='link'>Login</Link>
                </Typography>
                <Typography variant='h6'>
                    <Link to="/search" className='link'><Search/></Link>
                </Typography>
            </Toolbar>
        </AppBar>
     );
}
 
export default TopMenu;
import React from 'react';
import { TextField , Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const histroy = useNavigate();

    const handleFind = () => {
        histroy('/')
    }

    return ( 
        <>
            <h1 style={{display: "flex" , justifyContent: "center"}}>Search</h1>
            <TextField type={"number"} variant='filled' required label = "id" sx={{display: "flex" , justifyContent: "center" , margin: "20px 0px"}}></TextField>
            <Button onClick={() => handleFind()} fullWidth variant='contained'>Find</Button>
        </>
     );
}
 
export default Search;
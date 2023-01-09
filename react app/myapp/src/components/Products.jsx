import React  from 'react';
import { rows } from './LandingPage';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Table, TableHead } from '@mui/material';



const marginPadding = {
    color: "#2074d4",
    padding: "20px 80px"
}

const head = {
    fontWeight: "bold",
    fontSize: "25px",
    color: "#2074d4",
    padding: "20px 80px"
}

const table = {
    minWidth: 700,
    backgroundColor: "#f8f4f4"
}


const Products = () => {
    return ( 
        <>
        <h1 style={{display: "flex" , justifyContent: "center"}}>Products</h1>
        <Table sx = {table}>

            <TableHead>
                <TableRow>
                    <TableCell sx={head}>id</TableCell>
                    <TableCell sx={head}>Name</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>

                {rows.map((row) => (
                <TableRow key={row.name}>

                    <TableCell sx={marginPadding} component="th" scope="row">{row.id}</TableCell>
                    <TableCell sx={marginPadding} component="th" scope="row">{row.name}</TableCell>
                    
                
                </TableRow>

                ))}
            </TableBody>

         </Table>
        </>
     );
}
 
export default Products;
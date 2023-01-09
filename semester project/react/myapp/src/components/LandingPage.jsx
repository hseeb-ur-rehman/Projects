import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Product from './products/Products.jsx';
import { Link , useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export const rows = [
    Product(1 , 'Bread', 159, 6.0, 24, 4.0),
    Product(2 , 'Ice cream', 237, 9.0, 37, 4.3),
    Product(3 , 'Candy', 262, 16.0, 24, 6.0),
    Product(4 , 'Cupcake', 305, 3.7, 67, 4.3),
    Product(5 , 'Biscuit', 356, 16.0, 49, 3.9),
  ];

const LandingPage = () => {

  let history = useNavigate();

    const handleDelete = (id) => {

        var index = rows.map((e) => {
            return e.id
        }).indexOf(id);

        rows.splice(index,1)
        history('/');
        
  }

    return ( 
    <>
    <h1 style={{display: "flex" , justifyContent: "center"}}>Main Page</h1>
    <TableContainer component={Paper}>

      <Table sx={{ minWidth: 700 }} aria-label="customized table">

        <TableHead>

          <TableRow>

            <StyledTableCell>id</StyledTableCell>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Delete Product</StyledTableCell>
          
          </TableRow>

        </TableHead>

        <TableBody>

          {rows.map((row) => (
            <StyledTableRow key={row.name}>

                <StyledTableCell component="th" scope="row">{row.id}</StyledTableCell>
                <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                <StyledTableCell align="right">{row.protein}</StyledTableCell>
                <StyledTableCell align="right"><Button startIcon={<DeleteIcon/>} onClick={() => handleDelete(row.id)} variant='contained'>Delete</Button></StyledTableCell>
            
            </StyledTableRow>

          ))}
        </TableBody>

      </Table>

      <Link style={{textDecoration: 'none'}} to={"./create"}><Button sx={{margin: "20px 0px" , padding: '10px'}} fullWidth variant='contained'>Create Product</Button></Link>

    </TableContainer>
     </>
          
     );
}
 
export default LandingPage;

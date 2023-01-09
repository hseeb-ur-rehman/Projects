import React ,{useState} from 'react'
import {Button , TextField , Paper , Box , createTheme} from "@mui/material"
import { useNavigate } from 'react-router-dom';
import { rows } from './LandingPage';

const theme = createTheme();

const paper = {
    padding: theme.spacing(1),
  }

const textfield = {
    
    display: 'block',
    margin: '40px 0px', 

}

const form = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  }

const CreateProduct = () => {

    const [id , setId] = useState("");
    const [name , setName] = useState("");
    const [calories , setCalories] = useState("");
    const [fat , setFat] = useState("");
    const [carbs , setCarbs] = useState("");
    const [protein , setProtein] = useState("");

    let history = useNavigate();

    const handleSubmit = (e) => {

            e.preventDefault();

            let a = id
            let b = name
            let c = calories
            let d = fat
            let f = carbs
            let g = protein

            rows.push({id: a , name: b, calories: c, fat : d, carbs : f, protein: g })
  
            history("/");
    }

    return ( 
        <>

        <h1 style={{display: 'flex' , justifyContent: 'center' , color: '#2596be'}}>New Product</h1>
        <Paper sx={paper}>
            <form sx = {form} noValidate autoComplete='off' onSubmit = {handleSubmit}></form>
            <Box>
                <TextField type={'number'} sx={textfield} fullWidth id="filled-basic" label="Id"  variant="filled" required onChange={(e) => setId(e.target.value)} /> 
                <TextField type={'text'} sx={textfield} fullWidth id="filled-basic" label="Name" variant="filled" required onChange={(e) => setName(e.target.value)} /> 
                <TextField type={'number'} sx={textfield} fullWidth id="filled-basic" label="Calories" variant="filled" required onChange={(e) => setCalories(e.target.value)}  /> 
                <TextField type={'number'} sx={textfield} fullWidth id="filled-basic" label="Fat" variant="filled" required onChange={(e) => setFat(e.target.value)} /> 
                <TextField type={'number'} sx={textfield} fullWidth id="filled-basic" label="Carbs" variant="filled" required onChange={(e) => setCarbs(e.target.value)} /> 
                <TextField type={'number'} sx={textfield} fullWidth id="filled-basic" label="Protein" variant="filled" required onChange={(e) => setProtein(e.target.value)} /> 
                <Button onClick={(e) => handleSubmit(e)} type = "submit" sx={textfield} variant="contained" fullWidth>Submit</Button>
            </Box>
        </Paper>
        </>

     );
}
 
export default CreateProduct;
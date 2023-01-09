import React from 'react';
import { TextField  , Container , Button} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import { useNavigate } from 'react-router-dom';

const textfield = {
    display: "flex",
    margin: "80px 50px",
    color: "black"
}
const password = {
    display: "flex",
    margin: "0px 50px",
    color: "black"
}

const Login = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    }
;
    const history = useNavigate()
    return ( 
        <>
        <h1 style={{display: "flex" , justifyContent: "center"}}>Login</h1>
        <Container>
            <TextField sx={textfield} required label = "User-Name"></TextField>
            <InputLabel sx={password} htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
            sx={password}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />

            <TextField sx={textfield} required label = "Confirm Password"></TextField>
            <TextField sx={textfield} required label = "Email"></TextField>
            <Button onClick={() => history('/')} fullWidth variant = "contained">Submit</Button>
        </Container>
        </>
     );
}
 
export default Login;
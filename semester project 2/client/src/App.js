import React,{useEffect , useState} from 'react';
import {Container , AppBar , Typography , Grow , Grid} from '@mui/material';
import { useDispatch } from 'react-redux';
import Posts from './components/Posts.jsx';
import Form from './components/Form.jsx';
import memories from './images/memories.png';
import {getPosts} from './actions/posts.js'

const sxAppBar = {
    borderRadius: 15,
    margin: '30px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
}
const sxHeading = {
    color: 'rgba(0,183,255, 1)',
    marginRight: '10px'
}



const App = () => {

    const [currentId , setCurrentId] = useState(0);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getPosts());
    },[currentId , dispatch])

    return ( 
        <Container maxWidth = 'lg'>
            <AppBar sx = {sxAppBar} position = 'static' color = 'inherit'>
                <Typography sx = {sxHeading} variant = "h2" align = "center">Memories</Typography>
                <img src = {memories} alt = "memories" height = "60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify = "space-between" alignItems = "stretch" spacing = {3}>
                        <Grid item xs = {12} sm = {7}>  {/*for extra small devices width is 12 and small medium devices the width is 7*/}
                            <Posts setCurrentId = {setCurrentId}/>
                        </Grid>
                        <Grid item xs = {12} sm = {4}>  {/*for extra small devices width is 12 and small medium devices the width is 7*/}
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                            
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
            
        </Container>
     );
}
 
export default App;


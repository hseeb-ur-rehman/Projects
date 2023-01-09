import React, {useState , useEffect} from 'react';
import {Box , TextField , Button , Typography , Paper, createTheme} from '@mui/material'
import FileBase from 'react-file-base64';
import {useDispatch , useSelector} from "react-redux";
import { createPost , updatePost } from '../actions/posts.js';


//!Styling

const theme = createTheme();

    const paper = {
      padding: theme.spacing(1),
    }
    const form = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }
    const fileInput = {
      width: '97%',
    }
    const buttonSubmit = {
      margin: "10px 0px",
      // backgroundColor: "#00008b ",
      // color: "#87ceeb ",
    }
    const buttonClear = {
      // backgroundColor: "#8b0000 ",
      // color: "#ff9999 ",

    }
    const margin = {
      margin: "10px",
    }
    const padding = {
      padding: "0px 10px"
    }
    const textFields = {
      marginTop: "10px"
    }

//!Function
const Form = ({ currentId, setCurrentId }) => {

  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {

      dispatch(createPost(postData));
      clear();

    } else {

      dispatch(updatePost(currentId, postData));
      clear();

    }
  };

    return ( 
        <Paper sx={paper}>
            <form sx = {form} noValidate autoComplete='off' onSubmit = {handleSubmit}>
            <Box sx={margin}>
                <Typography varient = "h5">Creating a Memory</Typography>
                <TextField sx={textFields} name = "creator" variant = "outlined" label = "Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({...postData , creator: e.target.value})}/>
                <TextField sx={textFields} name = "title" variant = "outlined" label = "Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData , title: e.target.value})}/>
                <TextField sx={textFields} name = "message" variant = "outlined" label = "Message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData , message: e.target.value})}/>
                <TextField sx={textFields} name = "tags" variant = "outlined" label = "Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({...postData , tags: e.target.value})}/>
              </Box>
                <Box sx={padding}><FileBase sx = {fileInput} type = 'file' multiple = {false} onDone = {({base64}) => setPostData({...postData , selectedFile: base64})}/></Box>
                <Button sx={buttonSubmit} variant = "contained" size = "large" type = "submit" fullWidth>Submit</Button>
                <Button sx={buttonClear} variant = "contained" color='secondary' size = "small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
     );
};
 
export default Form;
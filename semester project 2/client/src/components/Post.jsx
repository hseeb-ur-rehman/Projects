import React from 'react';
import { Card , CardActions , CardContent , CardMedia , Button , Typography} from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../actions/posts.js';
import { Box } from '@mui/system';

const media = {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
}
const card = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
}
const overlay = {
    position: 'absolute',
      top: '20px',
      left: '20px',
      color: 'white',
}
const overlay2 = {
    position: 'absolute',
      top: '20px',
      right: '20px',
      color: 'white',
}
const details = {
    display: 'flex',
      justifyContent: 'space-between',
      margin: '20px',
}
const title = {
    padding: '0 16px',
}
const cardActions = {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
}






const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
  
    return (
      <Card sx={card}>
        <CardMedia sx={media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
        <Box sx={overlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </Box>
        <Box sx={overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
        </Box>
        <Box sx={details}>
          <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </Box>
        <Typography sx={title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
        </CardContent>
        <CardActions sx={cardActions}>
          <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
          <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
        </CardActions>
      </Card>
    );
  };
  
  export default Post;
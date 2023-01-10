import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/post.js';



const app = express();

app.use(bodyParser.json({limit: "30mb" , extended: true})); //for larger size
app.use(bodyParser.urlencoded({limit: "30mb" , extended: true}));

app.use(cors());

app.use('/', postRoutes)    /*it will reach direct to localhost:5000/posts instead localhost:5000*/

const CONNECTION_URL = "mongodb+srv://haseeburrehman:58nbrdv1rOWnuoe9@cluster0.rthl4vc.mongodb.net/?retryWrites=true&w=majority"
const PORT = 5000;


mongoose.set('strictQuery', true);
mongoose.connect(CONNECTION_URL).then(()=>{console.log('...')}).then(() => app.listen(PORT , () => console.log(`Server running on port: ${PORT}`))
).catch((error) => console.log(error)
);
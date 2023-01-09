
import './App.css';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Products from './components/Products';
import Login from './components/Login';
import TopMenu from './components/TopMenu';
import NotFound from './components/NotFound';
import CreateProduct from './components/CreateProduct';
import Search from './components/Search';


function App() {
  
  return (

    <Router>
    <div>
     <TopMenu/>
     <div className='container'>
     <Routes>
       
       <Route path="/login" element = {<Login/>} />
       <Route path="/products" element = {<Products/>} />
       <Route path="/not-found" element = {<NotFound/>}/>
       <Route path="/" element = {<LandingPage/>} />
       <Route path='/create' element = {<CreateProduct/>} />
       <Route path='/search' element = {<Search/>} />
       <Route path='*' element = {<NotFound/>} />
     
     </Routes>
     </div>
    </div>
    </Router>

  );
}

export default App;

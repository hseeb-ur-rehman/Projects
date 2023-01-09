// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router , Route ,Redirect, Switch} from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Products from './components/Products';
import ContactUs from './components/ContactUs';
import TopMenu from './components/TopMenu';
import NotFound from './components/NotFound';


function App() {
  return (
    <Router>
   <div>
    <TopMenu/>
    
    <Switch>
      
      <Route path="/contactUs" component = {ContactUs} />
      <Route path="/products" component = {Products} />
      <Route path="/not-found" component = {NotFound}/>
      <Route path="/" exact component = {LandingPage} />
      

      <Redirect to="/not-found"/>
      {/* <Route path="*" element={ <Navigate to={<NotFound/>} />}/> */}

    </Switch>


   </div>
   </Router>
  );
}

export default App;

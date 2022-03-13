
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Cart from './screens/Cart';
import PizzaProductListing from './screens/PizzaProductListing';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Route path='/' exact component = {PizzaProductListing} />
        <Route path = '/cart' exact component={Cart}/>
      </Router>
      
    </div>
  );
}

export default App;

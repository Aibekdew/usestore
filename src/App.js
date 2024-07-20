import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AddProduct from './components/AddProduct';
import Product from './components/Product';
import Favorite from './components/Favorite';
import Home from './components/Home';
import Basket from './components/Basket';
import ProductDeteils from './Pages/ProductDeteils';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addProduct' element={<AddProduct/>} />
      <Route path='/product' element={<Product/>} />
      <Route path='/favorite' element={<Favorite/>} />
      <Route path='/basket' element={<Basket/>} />
      <Route path='/productDeteils/:elId' element={<ProductDeteils/>} />
    </Routes>
    </div>
  );
}

export default App;

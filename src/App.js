import './App.css';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Login from './pages/login/Login';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Register from './pages/register/Register';
import Wish from './pages/wish/Wish';
import Cart from './pages/Cart/Cart';
import Blog from './pages/Blog/Blog';
import BlogSinglePage from './pages/BlogSinglePage/BlogSinglePage';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage';
import Account from './pages/Account/Account';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/wish" element={<Wish/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog:id" element={<BlogSinglePage/>}/>
          <Route path="/product:id" element={<SingleProductPage/>}/>
          <Route path="/account" element={<Account/>}/>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

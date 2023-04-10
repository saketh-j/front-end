import React from 'react';
import './App.css';
import { Routes,Route, BrowserRouter }from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProducts from './components/CompareProducts';
import WishList from './pages/WishList';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsAndConditions from './pages/termsAndConditions';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Layout/>}>
     <Route index element={<Home/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='contact' element={<Contact/>}/>
     <Route path='product' element={<OurStore/>}/>
     <Route path='blogs' element={<Blog/>}/>
     <Route path='Cart' element={<Cart/>}/>
     <Route path='blog/:id' element={<SingleBlog/>}/>
     <Route path='compare-products' element={<CompareProducts/>}/>
     <Route path='wishlist' element={<WishList/>}/>
     <Route path='login' element={<Login/>}/>
     <Route path='forgot-password' element={<ForgotPassword/>}/>
     <Route path='signup' element={<SignUp/>}/>
     <Route path='reset-password' element={<ResetPassword/>}/>
     <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
     <Route path='refund-policy' element={<RefundPolicy/>}/>
     <Route path='shipping-policy' element={<ShippingPolicy/>}/>
     <Route path='termsandconditions' element={<TermsAndConditions/>}/>
     <Route path='product/:id' element={<SingleProduct/>}/>
     <Route path='checkout' element={<CheckOut/>}/>


     
     




     </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

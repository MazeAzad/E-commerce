import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './pages/layouts/mainLayout';
import Home from './pages/home';
import About from './pages/about';
import Products from './pages/products';
import SingleProduct from './pages/singleProduct';
import Cart from './pages/cart';
import Error from './pages/error';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="products" element={<Products />} />
                    <Route path="products/:productId" element={<SingleProduct />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )


}

export default App

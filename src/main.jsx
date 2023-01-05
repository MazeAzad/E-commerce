import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ProductProvider } from './contexts/productContext';
import { FilterProvider } from './contexts/filterContext';
import { SortProvider } from './contexts/sortContext';
import { CartProvider } from './contexts/cartContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <SortProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </SortProvider>

  </ProductProvider>


)

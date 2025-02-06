import React, { useState } from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HeaderPage from "./componentes/header";
import LayoutFooter from "./componentes/layoutFooter";
import CardLogic from "./componentes/Cards/cardLogic";
import products from "./componentes/Produtos/products";

const App = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const filteredProducts = filter ? products.filter(product => product.tipo === filter) : products;

  return (
    <StrictMode>
      <div className="bg-red-100 h-full">
        <div className="h-auto w-screen display-flex justify-center align-items-center ">
          <header>
            <div className='flex justify-center p-11 text-3xl font-semibold bg-red-200'> 
              <h1>
                Ecommerce
              </h1>
            </div>
            <HeaderPage onFilterChange={handleFilterChange} />
          </header>

          <main className="p-25 w-auto h-auto">  
            <div className="flex justify-around">
              <CardLogic products={filteredProducts} />
            </div>
          </main>
        </div>
        <div>
          <footer>
            <LayoutFooter />
          </footer>
        </div>
      </div>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<App />);

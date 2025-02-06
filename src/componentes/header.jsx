import React from 'react';

const HeaderPage = ({ onFilterChange }) => {
  return (
    <header>
      <div className='mt-10'>
        <nav className="flex justify-around p-3 align-items-center">

          <button onClick={() => onFilterChange('moveis')} className="flex justify-center items-center bg-amber-50 p-2 rounded-sm shadow-xl transition-transform transform hover:scale-110 cursor-pointer"><img className='h-5 mr-1.5' src="src/imgs/mobilia-domestica.png" alt="carrinho" />Móveis</button>

          <button onClick={() => onFilterChange('eletronicos')} className="flex justify-center items-center bg-amber-50 p-2 rounded-sm shadow-xl transition-transform transform hover:scale-110 cursor-pointer"><img className='h-5 mr-1.5' src="src/imgs/compilterNe.png" alt="carrinho" />Eletrônicos</button>

          <button onClick={() => onFilterChange('alimentos')} className="flex justify-center items-center bg-amber-50 p-2 rounded-sm shadow-xl transition-transform transform hover:scale-110 cursor-pointer"><img className='h-5 mr-1.5' src="src/imgs/alimentos.png" alt="carrinho" />Alimentos</button>

          <button onClick={() => onFilterChange('')} className="flex justify-center items-center bg-amber-50 p-2 rounded-sm shadow-xl transition-transform transform hover:scale-110 cursor-pointer">Todos</button>
        </nav>
      </div>
    </header>
  );
}

export default HeaderPage;
import PropTypes from 'prop-types';

const CardLogic = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <CardLayout
          key={product.id}
          image={product.image}
          tipo={product.tipo}
          name={product.name}
          description={product.description}
        />
      ))}
    </div>
  );
};

const CardLayout = ({ image, tipo , name, description }) => {
  return (
    <div className="h-auto w-auto cursor-pointer bg-red-50 flex justify-center rounded-2xl shadow-lg p-4 transition-transform transform hover:scale-105 gap">
      <img
        src={image}
        alt={name}
        className="w-auto h-38 object-cover rounded-lg transition-transform transform hover:scale-110"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold mt-2 text-gray-800 cursor-pointer">{name}</h2>
        <p className="text-gray-600 mt-2 cursor-pointer">{description}</p>
        <p className="text-gray-600 mt-2 cursor-pointer">{tipo}</p>
        <button className="flex justify-center cursor-pointer w-20 mt-4 bg-red-400 text-white py-2 px-4 rounded-lg hover:bg-red-700">
        <img className='h-5' src="/imgs/carrinho-de-compras.png" alt="carrinho" />
        </button>       
      </div>
    </div>
  );
};

CardLayout.propTypes = {
  image: PropTypes.string.isRequired,
  tipo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

CardLogic.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      tipo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CardLogic;
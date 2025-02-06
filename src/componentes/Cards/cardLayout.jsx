import PropTypes from 'prop-types';

const CardLayout = ({ image, tipo , name, description }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg p-4 transition-transform transform hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="p-4">
        <h2 className="text-2xl font-bold mt-2 text-gray-800">{name}</h2>
        <p className="text-gray-600 mt-2">{description}{tipo}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
          Saiba Mais
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

export default CardLayout;
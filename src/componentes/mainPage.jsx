import ProductCard from "./Cards/cardLayout";

const products = [
  {
    id: '1',
    image: "src/imgs/icons8-mouse-generico-50.png",
    name: "Produto 1",
    description: "Descrição do Produto 1",
  },
  {
    id: '2',
    image: "https://via.placeholder.com/150",
    name: "Produto 2",
    description: "Descrição do Produto 2",
  },
];

const ProductsPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          tipo={product.tipo}
          image={product.image}
          name={product.name}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductsPage;

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {products.map((product) => (
      <div key={product.id} className="border p-4 rounded shadow">
        <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-2" />
        
        {/* Title and Category inline */}
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <h3 className="text-md text-gray-600 bg-gray-200 px-2 py-1 rounded">{product.category}</h3>
        </div>
  
        <p className="text-gray-500">${product.price}</p>
        
        <button
          className="bg-green-500 text-white px-4 py-2 mt-2 rounded"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    ))}
  </div>
  
  );
}

export default ProductList

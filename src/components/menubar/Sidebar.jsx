

const Sidebar = ({ cart, removeFromCart }) => {
  return (
    <div className="w-1/4 bg-gray-100 p-4 h-screen">
    <h2 className="text-2xl font-bold mb-4">Cart</h2>
    {cart.length === 0 ? (
      <p>No items in cart</p>
    ) : (
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between p-2 border-b">
            {item.title} - ${item.price}
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

}

export default Sidebar

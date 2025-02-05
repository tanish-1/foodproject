

const SearchBar = ({ searchTerm, searchProducts }) => {
    return (
        <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => searchProducts(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Search for meals by title, category, or price..."
        />
      </div>
    );
}

export default SearchBar

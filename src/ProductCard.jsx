import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/product/${product.id}`);
  }

  return (
    <div className="product">

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <button onClick={handleClick}>
        View Details
      </button>

    </div>
  );
}

export default ProductCard;
import { useNavigate, useParams } from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  function handleNext() {
    navigate("/next");
  }

  return (
    <div className="page">

      <div className="home-card">

        <h1>Product Details</h1>

        <p>Product ID: {id}</p>

        <button onClick={handleNext}>
          Next
        </button>

      </div>

    </div>
  );
}

export default ProductDetails;
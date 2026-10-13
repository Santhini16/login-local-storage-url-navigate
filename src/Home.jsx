
import ProductCard from "./ProductCard";

function Home() {
  const email = localStorage.getItem("email");

  const products = [
    {
      id: 101,
      name: "Mobile Phone",
      price: 20000
    },
    {
      id: 102,
      name: "Laptop",
      price: 50000
    },
    {
      id: 103,
      name: "Headphones",
      price: 3000
    }
  ];

  return (
    <div className="page">
      <div className="home-card">

        <h1>Home</h1>

        <p>
          Welcome, {email || "User"}
        </p>

        <h2>Products</h2>

        <div>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Home;
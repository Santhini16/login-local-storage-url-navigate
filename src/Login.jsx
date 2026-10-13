import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem("email", email);
    navigate("/home");
  }

  return (
    <div className="page">
      <div className="card">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
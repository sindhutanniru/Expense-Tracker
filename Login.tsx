import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (username === user.username && password === user.password) {
      localStorage.setItem("loggedIn", "true");
      navigate("/dashboard");
      window.location.href = "/dashboard"; 
      alert("Invalid login");
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        <input
          placeholder="Username"
          className="border p-2 w-full mb-3"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mb-3"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white w-full p-2 rounded"
        >
          Login
        </button>
        <p className="text-center mt-3">
          New user? 
          <span
            onClick={()=>navigate("/register")}
            className="text-blue-600 cursor-pointer"
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}
export default Login;
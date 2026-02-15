import React, { useState } from "react";
function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [bank, setBank] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [strength, setStrength] = useState("");
  const checkStrength = (pass: string) => {
    setPassword(pass);
    const strongRegex =
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    if (pass.length === 0) {
      setStrength("");
    } else if (strongRegex.test(pass)) {
      setStrength("Strong password ");
    } else {
      setStrength("Weak password");
    }
  };
  const handleRegister = () => {
    if (!email || !username || !password || !confirmPassword || !age || !bank) {
      alert("Please fill all fields");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Enter valid email (example@gmail.com)");
      return;
    }
    if (Number(age) < 18) {
      alert("Age must be above 18");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (strength !== "Strong password ") {
      alert("Password must be strong (8 chars, capital, number, special)");
      return;
    }
    const userData = {
      email,
      username,
      age,
      bank,
      password,
    };
    localStorage.setItem("user", JSON.stringify(userData));
    alert("Registered successfully ");
    window.location.href = "/login";
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-5">Register</h2>
        <input
          type="text"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 mb-3 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          className="w-full border p-2 mb-3 rounded"
          value={age}
          onChange={(e) =>
            setAge(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
        <input
          type="text"
          placeholder="Bank Name"
          className="w-full border p-2 mb-3 rounded"
          value={bank}
          onChange={(e) => setBank(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-1 rounded"
          value={password}
          onChange={(e) => checkStrength(e.target.value)}
        />
        {strength && (
          <p
            className={`text-sm mb-2 ${
              strength.includes("Strong") ? "text-green-600" : "text-red-500"
            }`}
          >
            {strength}
          </p>
        )}
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border p-2 mb-4 rounded"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
        <p className="text-center mt-3">
          Already user?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => (window.location.href = "/login")}
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}
export default Register;
import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100">
      <div className="bg-rose-400 text-white text-center py-3 text-xl font-bold shadow">
        EXPENSE TRACKER
      </div>
      <div className="text-center mt-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Track Your Expenses Like Never Before
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          Take control of your finances with our powerful Expense Tracker application
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <button
            onClick={() => navigate("/register")}
            className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700"
          >
            Register
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700"
          >
            Login
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-20 px-10 pb-16">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="font-bold text-lg mb-2">Manage Your Budget</h3>
          <p className="text-gray-600">
            Easily create and customize budgets to stay on top of your spending.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="font-bold text-lg mb-2">Analyze Your Expenses</h3>
          <p className="text-gray-600">
            Visualize your expenses with interactive charts and insightful reports.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h3 className="font-bold text-lg mb-2">Access Anywhere</h3>
          <p className="text-gray-600">
            Track your expenses on the go with our mobile-friendly app.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
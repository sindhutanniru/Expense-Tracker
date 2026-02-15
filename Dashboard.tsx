import React, { useState, useEffect } from "react";
import { Transaction } from "../types/Transaction";
import NavBar from "../components/NavBar";
function Dashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const currentUser = localStorage.getItem("user");
    const stored = localStorage.getItem(`transactions_${currentUser}`);
    return stored ? JSON.parse(stored) : [];
  });
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);
  const balance = income - expense;
  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number | "">("");
  const [type, setType] = useState<"income" | "expense">("income");
  const addTransaction = () => {
    if (!text || amount === "" || amount <= 0) {
      alert("Enter valid details");
      return;
    }
    const newTransaction: Transaction = {
  id: Date.now(),
  text,
  amount: amount as number,
  type,
  date: new Date().toLocaleString()   
};
    const updatedTransactions = [...transactions, newTransaction];
    setTransactions(updatedTransactions);

    const currentUser = localStorage.getItem("user");
    localStorage.setItem(`transactions_${currentUser}`, JSON.stringify(updatedTransactions));
    setText("");
    setAmount("");
    setType("income");
  };
  const deleteTransaction = (id: number) => {
    const updated = transactions.filter((t) => t.id !== id);
    setTransactions(updated);
    const currentUser = localStorage.getItem("user");
    localStorage.setItem(`transactions_${currentUser}`, JSON.stringify(updated));
  };
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <NavBar />
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6 mt-4">
        Smart Expense Tracker
      </h1>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-100 p-4 rounded text-center">
            <h3 className="font-semibold">Income</h3>
            <p className="text-green-600 text-xl font-bold">₹{income}</p>
          </div>
          <div className="bg-red-100 p-4 rounded text-center">
            <h3 className="font-semibold">Expense</h3>
            <p className="text-red-600 text-xl font-bold">₹{expense}</p>
          </div>
          <div className="bg-blue-100 p-4 rounded text-center">
            <h3 className="font-semibold">Balance</h3>
            <p className="text-blue-600 text-xl font-bold">₹{balance}</p>
          </div>
        </div>
        <h2 className="text-lg font-semibold mb-3">Add Transaction</h2>
        <div className="grid md:grid-cols-4 gap-3 mb-6">
          <input
            type="text"
            placeholder="Description"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value === "" ? "" : Number(e.target.value))
            }
            className="border p-2 rounded"
          />
          <select
            value={type}
            onChange={(e) =>
              setType(e.target.value as "income" | "expense")
            }
            className="border p-2 rounded"
          >
            <option value="income">Money Received</option>
            <option value="expense">Money Sent</option>
          </select>
          <button
            onClick={addTransaction}
            className="bg-blue-600 text-white p-2 rounded"
          >
            Add
          </button>
        </div>
        <h2 className="text-lg font-semibold mb-3">Transaction History</h2>
        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Description</th>
                <th className="p-2 border">Amount</th>
                <th className="p-2 border">Type</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center p-3">
                    No transactions yet
                  </td>
                </tr>
              ) : (
                transactions.map((t) => (
                  <tr key={t.id} className="text-center">
                    <td className="p-2 border">{t.text}</td>
                    <td
                      className={`p-2 border font-semibold ${
                        t.type === "income"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      ₹{t.amount}
                    </td>
                    <td className="p-2 border">
                      {t.type === "income" ? "Received" : "Sent"}
                    </td>
                    <td className="p-2 border">
                      <button
                        onClick={() => deleteTransaction(t.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
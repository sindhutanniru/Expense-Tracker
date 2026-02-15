import { NavLink, useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Expense Tracker</h1>
      <div className="flex gap-6">
        <NavLink to="/dashboard">Home</NavLink>
        <NavLink to="/moneyreceived">Money Received</NavLink>
        <NavLink to="/moneysent">Money Sent</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
    </div>
  );
}
export default NavBar;
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const logout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };
  const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "/";
};
  return (
    <>
      <NavBar />
      <div className="p-10">
        <div className="bg-white p-6 rounded shadow w-96 mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Profile</h2>
          <p><b>Name:</b> {user.username}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Age:</b> {user.age}</p>
          <p><b>Bank:</b> {user.bank}</p>
            <button 
onClick={handleLogout}
className="bg-red-500 text-white px-4 py-2 rounded mt-4"
>
Logout
</button>
        </div>
      </div>
    </>
  );
}
export default Profile;
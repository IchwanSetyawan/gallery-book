import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);

  const handleLogout = () => {
    setLogout(true);
    setTimeout(() => {
      localStorage.removeItem("user_login");
      navigate("/login");
    }, 1500);
  };

  return (
    <>
      <nav className="flex bg-blue-800 text-white justify-between p-6">
        <h2>
          <Link to="/">Bookzz</Link>
        </h2>
        {logout && (
          <span className="text-center bg-red-600 text-sm">You're logout!</span>
        )}
        <div className="flex gap-2">
          <div>
            <button
              onClick={handleLogout}
              className="bg-slate-200 text-black rounded-md px-3 py-1 text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

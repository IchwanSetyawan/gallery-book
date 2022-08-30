import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [inpval, setInpval] = useState({
    username: "",
    password: "",
  });
  const [flag, setFlag] = useState(false);

  const navigate = useNavigate();

  const getData = (e) => {
    const { value, name } = e.target;
    setInpval(() => {
      return { ...inpval, [name]: value };
    });
  };

  const onLoginHandler = (e) => {
    e.preventDefault();
    const getuserArr = localStorage.getItem("user");
    console.log(getuserArr);

    const { username, password } = inpval;
    if (username === "") {
      alert("username is required");
    } else if (password === "") {
      alert("password is required");
    } else if (password.length < 5) {
      alert("password length greater five");
    } else {
      if (getuserArr && getuserArr.length) {
        const userData = JSON.parse(getuserArr);
        console.log(userData);
        const userLogin = userData.filter((el, k) => {
          return el.username === username && el.password === password;
        });
        if (userLogin.length === 0) {
          alert("invalid details");
        } else {
          console.log("user login succesfulyy");
          navigate("/");
          localStorage.setItem("user_login", JSON.stringify(userLogin));
        }
      }
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
        <h2 className="text-center font-semibold text-4xl text-blue-700 mb-6">
          Welcome to Gallery Bokzz
        </h2>
        <div className="relative py-3 sm:max-w-xl mx-auto text-center">
          <span className="text-2xl font-light">Login to your account</span>
          <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
            <div className="py-6 px-8">
              {flag && (
                <div className="text-center">
                  <p className="bg-red-400 rounded-md text-white my-3 block text-sm ">
                    Please fill correct info
                  </p>
                </div>
              )}
              <label className="block font-semibold text-sm"> Username</label>
              <input
                type="text"
                id="username"
                name="username"
                onChange={getData}
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
              />
              <label className="block mt-3 font-semibold text-sm">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={getData}
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
              />
              <div className="text-center">
                <input
                  type="button"
                  value="Login"
                  className="w-full mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg"
                  onClick={onLoginHandler}
                />

                <Link
                  to="/register"
                  className="text-sm mt-2 outline-blue-800 text-blue-700 w-full block py-2 px-6 rounded-lg "
                >
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

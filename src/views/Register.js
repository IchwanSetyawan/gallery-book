import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uid } from "uid";
import { GET_REGISTER_ACTION } from "../store/action/types";

const Register = () => {
  const [flag, setFlag] = useState(false);
  const [registerComplete, setRegisterComplete] = useState(false);

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const onSubmitRegister = () => {
  //   dispatch({
  //     type: GET_REGISTER_ACTION,
  //     payload: {
  //       data: {
  //         id: uid(),
  //         username,
  //         password,
  //       },
  //     },
  //   });
  //   alert("register success");
  //   navigate("/login");
  //   setUsername("");
  //   setPassword("");
  //   setConfirmPassword("");
  // };

  const navigate = useNavigate();
  const [inpval, setInpval] = useState({
    username: "",
    password: "",
  });

  const [data, setData] = useState([]);

  console.log(inpval);

  const getData = (e) => {
    const { value, name } = e.target;
    setInpval(() => {
      return { ...inpval, [name]: value };
    });
  };
  // const onChangeUsername = (e) => {
  //   setUsername(e.target.value);
  // };

  // const onChangePassword = (e) => {
  //   setPassword(e.target.value);
  // };

  const onSubmitRegister = (e) => {
    e.preventDefault();
    const { username, password } = inpval;
    if (username === "") {
      alert("username is required");
    } else if (password === "") {
      alert("password is required");
    } else if (password.length < 5) {
      alert("password length greater five");
    } else {
      setRegisterComplete(true);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
      localStorage.setItem("user", JSON.stringify([...data, inpval]));
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
        <h2 className="text-center font-semibold text-4xl text-blue-700 mb-6">
          Welcome to Gallery Bokzz
        </h2>
        <div className="relative py-3 md:max-w-xl mx-auto text-center">
          <span className="text-2xl font-light">Register to your account</span>
          <form className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
            <div className="py-6 px-8">
              {flag && (
                <div className="text-center">
                  <p className="bg-red-400 rounded-md text-white my-3 block text-sm ">
                    Please fill every field!
                  </p>
                </div>
              )}
              {registerComplete && (
                <div className="text-center">
                  <p className="bg-green-400 rounded-md text-white my-3 block text-sm ">
                    Register completed!
                  </p>
                </div>
              )}
              <label className="block font-semibold text-sm">Username</label>
              <input
                type="text"
                name="username"
                onChange={getData}
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
              />
              <label className="block mt-3 font-semibold text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                onChange={getData}
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
              />

              <div className="text-center">
                <input
                  type="button"
                  className="mt-4 w-full bg-indigo-500 text-white py-2 px-6 rounded-lg"
                  onClick={onSubmitRegister}
                  value="Register"
                />

                <p className="mt-2 block text-sm">
                  Ready account?
                  <Link to="/login">login</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../../store/Reducers/userReducer";

const Signup = () => {
  const { isAuthenticated } = useSelector((state) => state.userReducer);
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signupHandler = (e) => {
    e.preventDefault();
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(email)) alert("Invalid Email");

    if (password.split("").length > 4) {
      localStorage.setItem("users", JSON.stringify({ email, password, name }));

      dispatch(addUser({ email, name, password }));
      navigate("/");
    } else {
      alert("Password must be greater than 4 ");
    }
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  });

  return (
    <div className="h-[90vh] w-full flex items-center justify-center ">
      <div className="bg-red-200 w-[40vw]">
        <form
          onSubmit={signupHandler}
          className="flex flex-col gap-2 bg-slate-600 p-2"
        >
          <input
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="px-2"
            placeholder="email"
            type="text"
            required={true}
          />
          <input
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="px-2"
            placeholder="name"
            type="text"
            required={true}
          />
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="px-2"
            placeholder="password"
            type="password"
            required={true}
          />
          <button className="bg-blue-500 text-white px-4 py-1 ">
            Register
          </button>
          <p className="text-lg  text-white">
            <Link to={"/login"}>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

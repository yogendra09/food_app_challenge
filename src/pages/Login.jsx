import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/Reducers/userReducer";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const { isAuthenticated } = useSelector((state) => state.userReducer);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    // let regEmail =
    //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (!regEmail.test(email)) {
    //   return alert("Invalid Email");
    // }

    // if (password.split("").length > 4) {
    //   dispatch(addUser({ email }));
    //   navigate("/");
    // } else {
    //   alert("Password must be greater than 4");
    // }

    const user = JSON.parse(localStorage.getItem("users"));
    console.log(user);

    if (user.email === email && user.password === password) {
      dispatch(addUser({ email }));
      navigate("/");
    }else{
      alert("invalid credentials!");
    }
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  });

  return (
    <div className="h-[90vh] w-full flex items-center justify-center ">
      <div className="bg-red-200 w-[40vw]">
        <form
          onSubmit={loginHandler}
          className="flex flex-col gap-2 bg-slate-300 p-2"
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
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="px-2"
            placeholder="password"
            type="password"
            required={true}
          />
          <button className="bg-blue-500 text-white px-4 py-1 ">Login</button>
          <p className="text-lg text-gray-500">
            <Link to={"/signup"}>register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

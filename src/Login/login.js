import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./layout.css";
import { UserContext } from "../App";

function Login() {
  const { state, dispatch } = useContext(UserContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginMessage("");

    const data = {
      email: values.email,
      password: values.password,
    };

    try {
      console.log("Sending login request...");

      const response = await fetch("http://localhost:8080/student/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Received response:", response);

      if (response.ok) {
        setLoginMessage("Login successful");
        dispatch({ type: "USER", payload: true });
        navigate("/Home");
      } else {
        const errorData = await response.json();
        setLoginMessage(errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    console.log("Authentication state updated:", state.isAuthenticated);
  }, [state.isAuthenticated]);

  console.log("Rendering Login component...");

  return (
    <div className="d-flex justify-content-center align-items-center bg-light-gray vh-100">
      <div className="border-box bg-white p-5 rounded" style={{ width: '115mm', height: '130mm', position: 'relative' }}>
        <h2 className="text-center mb-4">Sign-in</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleInput}
              className="form-control rounded-0"
              value={values.email}
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              onChange={handleInput}
              className="form-control rounded-0"
              value={values.password}
            />
          </div>
  
          <p className="text-center text-success">{loginMessage}</p>
  
          <div className="mb-3 text-center">
          <button type="submit" className="btn btn-success rounded-0">
            <strong>  Log in  </strong>
          </button>
          </div>
          <div style={{ position: 'absolute', bottom: '0', right: '0', marginBottom: '1rem', marginRight: '1rem' }}>
            <Link
              to="/Signup"
              className="btn btn-default border bg-light text-decoration-none">
              No Account? Create One!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
  
  }  

export default Login;

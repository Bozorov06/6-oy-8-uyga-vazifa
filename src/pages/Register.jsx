import React from "react";
import { useState, useRef } from "react";
import { http } from "../axios";
import { useNavigate, Link} from "react-router-dom";

function Register({setToken}) {
  const [loading, setLoading] = useState(false);

  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const formRef = useRef();

  const navigate = useNavigate()

  function handleRegister(event) {
    event.preventDefault();
    setLoading(true)
    let user = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value
    };

    http.post("/auth/signup", user)
      .then((response) => {
        if (response.status === 200) {
       navigate("/login");
        }
      })
      .catch((error) => {
        alert(error.response.data.message);
      })
      .finally(function(){
      formRef.current.reset()
      setLoading(false)
      })
  }

  return (
    <div>
      <form
        ref={formRef}
        className="w-[500px] mx-auto mt-10 border rounded-md p-4 flex flex-col gap-3 bg-amber-300"
      >
        <input
          className="p-2 border rounded-md bg-blue-500 text-gray-100"
          ref={usernameRef}
          type="text"
          placeholder="Enter username..."
        />
        <input
          className="p-2 border rounded-md bg-blue-500 text-gray-100"
          ref={emailRef}
          type="email"
          placeholder="Enter email..."
        />
        <input
          className="p-2 border rounded-md bg-blue-500 text-gray-100 "
          ref={passwordRef}
          type="password"
          placeholder="Enter password..."
        />

        <button
          disabled={loading}
          className="p-2 rounded-md bg-green-500 border-none cursor-pointer"
          onClick={handleRegister}
        >
          {loading ? "LOADING..." : "Register"}
        </button>
      </form>

      <Link to="/login">Login</Link>
    </div>
  );
}

export default Register;

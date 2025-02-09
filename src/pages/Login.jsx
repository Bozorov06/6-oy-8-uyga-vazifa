import React from 'react'
import { useRef ,useState } from 'react'
import { http } from '../axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [loading, setLoading] = useState(false)
  const usernameRef = useRef();
  const passwordRef = useRef();
  const formRef = useRef();

  const navigate = useNavigate();

  function handleLogin(event) {
    event.preventDefault();
    let user = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    }

    http.post("/auth/signin", user) 
    .then(response =>{
      if (response.status == 200) {
       localStorage.setItem('user', JSON.stringify(response.data))
       localStorage.setItem('token', response.data.accessToken)
        navigate('/', {state: {token: response.data.accessToken}})
      }
      setLoading(true)
    })

    .catch(error=>{
      alert( error.response.data.message);
    })

    .finally(()=>{
      formRef.current.reset();
      setLoading(false);
    })
  }

  return (
    <div>
      <form
        ref={formRef}
        className="w-[500px] mx-auto mt-10 border rounded-md p-4 flex flex-col gap-3  bg-gray-300 "
      >
        <input
          className="p-2 border rounded-md bg-amber-300 "
          ref={usernameRef}
          type="text"
          placeholder="Enter username..."
        />
        <input
          className="p-2 border rounded-md bg-amber-300 "
          ref={passwordRef}
          type="password"
          placeholder="Enter password..."
        />

        <button
          disabled={loading}
          className="p-2 border rounded-md bg-blue-500 cursor-pointer "
          onClick={handleLogin}
        >
          {loading ? "LOADING..." : "Login"}
        </button>
      </form>

      <Link to="/register">Register</Link>
    </div>
  );
}

export default Login;



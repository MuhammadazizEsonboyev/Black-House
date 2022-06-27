import "./App.css";
import LoginForm from "./Components/Registration/LoginForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  const adminUser = { email: "admin@gmail.com", password: "1234" };

  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setUser({
        email: details.email,
        password: details.password
      });
    } else {
      console.log("error");
    }
  };

  const Logout = () => {
    setUser({ email: "", password: "" });
    console.log("Logout");
  };

  return (
    <div className="App">
      {user.email !== ""
        ? <div className="welcome">
            <button onClick={Logout}>Logout</button>
          </div>
        : <LoginForm Login={Login} error={error} />}
        <Home/>
    </div>
  );
}

export default App;

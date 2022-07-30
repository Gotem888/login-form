import "./App.css";
import { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [login, setLog] = useState("");
  const [password, setPass] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleReset = () => {
    setLog("");
    setPass("");
  };

  const Result = () => {
    if (!login || !password) {
      return "all fields must be filled";
    } else if (login.length < 8) {
      return "'Login' must contain 8 symbols";
    } else if (login.length >= 8 && password.length < 8) {
      return "'Password' must contain 8 symbols";
    } else return "OK";
  };

  return (
    <form name="loginForm" onSubmit={handleSubmit} onReset={handleReset}>
      <input
        type="text"
        value={login}
        placeholder="Login"
        onChange={(e) => setLog(e.target.value)}
      />
      <input
        type="text"
        value={password}
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
      />
      <button
        id="button"
        disabled={
          !login || !password || login.length < 8 || password.length < 8
        }
        onClick={() => onLogin({ login, password })}
      >
        <Result />
      </button>
      <button className="resetBut" type="reset">
        Reset
      </button>
    </form>
  );
};

function App() {
  return (
    <div className="App">
      <LoginForm
        onLogin={({ login, password }) => {
          alert(`Login : ${login} \nPassword : ${password}`);
        }}
      />
    </div>
  );
}

export default App;

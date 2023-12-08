import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="login-box">
          <h2>Login</h2>
          <form>
            <div class="user-box">
              <input type="text" name="" required=""></input>
              <label>Username</label>
            </div>
            <div class="user-box">
              <input type="password" name="" required=""></input>
              <label>Password</label>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;

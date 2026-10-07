import "./Login.css";
import { useState } from "react";
 function Login({ onLogin, onSignup }) {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          🧠
        </div>

        <h1>AI Research Workspace</h1>
        <p className="login-subtitle">
          Sign in to continue your research
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLogin();
          }}
        >
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
             <div className="password-wrapper">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Enter your password"
    required
  />

  <button
    type="button"
    className="show-password"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? "🙈" : "👁️"}
  </button>
</div>
          </div>

          <div className="login-options">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

         <p className="signup-text">
  Don't have an account?{" "}
  <button
    type="button"
    onClick={onSignup}
    className="signup-link"
  >
    Sign up
  </button>
</p>
      </div>
    </div>
  );
}

export default Login;
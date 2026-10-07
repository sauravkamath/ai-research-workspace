import "./Signup.css";

function Signup({ onSignup }) {
  return (
    <div className="signup-page">
      <div className="signup-card">

        <div className="signup-logo">
          🧠
        </div>

        <h1>Create New Account</h1>

        <p className="signup-subtitle">
          Join your AI research workspace
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSignup();
          }}
        >
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

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
            <input
              type="password"
              placeholder="Create a password"
              required
            />
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button type="submit" className="signup-btn">
            Create Account
          </button>
        </form>

        <p className="login-text">
          Already have an account?{" "}
          <a href="#" onClick={(e) => {
            e.preventDefault();
            onSignup();
          }}>
            Login
          </a>
        </p>

      </div>
    </div>
  );
}

export default Signup;
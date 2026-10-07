import "./Signup.css";

 function Signup({ onSignup, onBackToLogin }) {
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
  onSubmit={async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        "http://localhost:8080/AI-RnD-Workspace/register",
        {
          method: "POST",
          body: new URLSearchParams(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      alert("Account created successfully! 🎉");

      onBackToLogin();
    } catch (error) {
      console.error(error);
      alert("Signup failed. Please check the backend.");
    }
  }}
>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name = "name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
<div className="form-group">
  <label>Role</label>
  <input
    type="text"
    name="role"
    placeholder="Enter your role"
    required
  />
</div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name = "password"
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
        <button
  type="button"
  className="back-login-btn"
  onClick={onBackToLogin}
>
  ← Back to Login
</button>

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
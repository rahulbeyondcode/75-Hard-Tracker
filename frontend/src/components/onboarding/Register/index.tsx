import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div>
      <p>Hi, Welcome Onboard.</p>
      <p>
        Great to see you decided to try out the
        <b> 75 hard challenge</b>
      </p>

      <div>
        <label htmlFor="name">
          What should we call you?
          <input />
        </label>
      </div>

      <div>
        <label htmlFor="username">
          Enter a username
          <input />
        </label>
      </div>

      <div>
        <label htmlFor="password">
          Enter a password
          <input />
        </label>
      </div>

      <div>
        <label htmlFor="email">
          Enter your email address (optional)
          <input />
        </label>
      </div>

      <button type="button" onClick={() => navigate("/onboarding/bmi")}>
        Submit
      </button>
    </div>
  );
}

export default Register;

import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>Hi, Welcome Onboard.</p>
      <p>
        Great to see you decided to try out the <b>75 hard challenge</b>
      </p>

      <div>
        <label htmlFor="name">What should we call you?</label>
        <input />
      </div>

      <div>
        <label htmlFor="username">Enter a username</label>
        <input />
      </div>

      <div>
        <label htmlFor="password">Enter a password</label>
        <input />
      </div>

      <div>
        <label htmlFor="email">Enter your email address (optional)</label>
        <input />
      </div>

      <button onClick={() => navigate('/onboarding/bmi')}>Submit</button>
    </div>
  );
};

export default Register;

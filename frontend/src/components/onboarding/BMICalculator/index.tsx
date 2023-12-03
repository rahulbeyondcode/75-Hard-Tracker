import { Link } from "react-router-dom";

const BMICalculator = () => {
  return (
    <div>
      <Link to="/onboarding/register">Go Back</Link>
      <p>
        Before we start the challenge let’s check your{" "}
        <b>Body Mass Index (BMI)</b> (optional)
      </p>

      <div>
        <label htmlFor="weight">Enter your weight (in kg)</label>
        <input />
      </div>

      <div>
        <label htmlFor="height">Enter your height (in cm)</label>
        <input />
      </div>

      <div>
        <label htmlFor="dob">Enter your date of birth</label>
        <input />
      </div>

      <div>
        <label htmlFor="gender">Enter your gender</label>
        <input />
      </div>

      <Link to="/onboarding/body-measurements">
        <button>Skip</button>
      </Link>
      <button>Calculate</button>
    </div>
  );
};

export default BMICalculator;

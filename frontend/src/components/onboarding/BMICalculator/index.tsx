import { Link } from "react-router-dom";

function BMICalculator() {
  return (
    <div>
      <Link to="/onboarding/register">Go Back</Link>
      <p>
        Before we start the challenge let&apos;s check your
        <b> Body Mass Index (BMI)</b> (optional)
      </p>

      <div>
        <label htmlFor="weight">
          Enter your weight (in kg)
          <input id="weight" />
        </label>
      </div>

      <div>
        <label htmlFor="height">
          Enter your height (in cm)
          <input id="height" />
        </label>
      </div>

      <div>
        <label htmlFor="dob">
          Enter your date of birth
          <input id="dob" />
        </label>
      </div>

      <div>
        <label htmlFor="gender">
          Enter your gender
          <input id="gender" />
        </label>
      </div>

      <Link to="/onboarding/body-measurements">
        <button type="button">Skip</button>
      </Link>
      <button type="button">Calculate</button>
    </div>
  );
}

export default BMICalculator;

import { Link } from "react-router-dom";

function BodyMeasurementsCollector() {
  return (
    <div>
      <Link to="/onboarding/bmi">Go Back</Link>
      <p>Lastly let&apos;s go through your body measurements (optional)</p>

      <div>
        <label htmlFor="hip">
          Enter hip size (in cm)
          <input />
        </label>
        <label htmlFor="waist">
          Enter waist size (in cm)
          <input />
        </label>
      </div>

      <div>
        <label htmlFor="chest">
          Enter chest size (in cm)
          <input />
        </label>
        <label htmlFor="arm">
          Enter arm size (in cm)
          <input />
        </label>
      </div>

      <div>
        <label htmlFor="thighs">
          Enter thighs size (in cm)
          <input />
        </label>
        <label htmlFor="neck">
          Enter neck size (in cm)
          <input />
        </label>
      </div>

      <div>
        <label htmlFor="weight">
          Enter your weight (in kg)
          <input />
        </label>
        <label htmlFor="height">
          Enter your height (in cm)
          <input />
        </label>
      </div>

      <Link to="/dashboard">
        <button type="button">Skip</button>
      </Link>
      <button type="button">Calculate</button>
    </div>
  );
}

export default BodyMeasurementsCollector;

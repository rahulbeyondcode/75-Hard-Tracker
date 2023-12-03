import { Link } from "react-router-dom";

const BodyMeasurementsCollector = () => {
  return (
    <div>
      <Link to="/onboarding/bmi">Go Back</Link>
      <p>Lastly let’s go through your body measurements (optional)</p>

      <div>
        <label htmlFor="hip">Enter hip size (in cm)</label>
        <input />
        <label htmlFor="waist">Enter waist size (in cm)</label>
        <input />
      </div>

      <div>
        <label htmlFor="chest">Enter chest size (in cm)</label>
        <input />
        <label htmlFor="arm">Enter arm size (in cm)</label>
        <input />
      </div>

      <div>
        <label htmlFor="thighs">Enter thighs size (in cm)</label>
        <input />
        <label htmlFor="neck">Enter neck size (in cm)</label>
        <input />
      </div>

      <div>
        <label htmlFor="weight">Enter your weight (in kg)</label>
        <input />
        <label htmlFor="height">Enter your height (in cm)</label>
        <input />
      </div>

      <Link to="/dashboard">
        <button>Skip</button>
      </Link>
      <button>Calculate</button>
    </div>
  );
};

export default BodyMeasurementsCollector;

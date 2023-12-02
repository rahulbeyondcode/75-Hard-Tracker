const BMICalculator = () => {
  return (
    <div>
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

      <button>Skip</button>
      <button>Calculate</button>
    </div>
  );
};

export default BMICalculator;

import InputField from "components/shared/InputField";

function TimeInput() {
  return (
    <div className="time-input">
      <div className="field-wrapper">
        <InputField type="text" placeholder="00h" />
        <p>Hours</p>
      </div>
      <div className="field-wrapper">
        <InputField type="text" placeholder="10m" />
        <p>Minutes</p>
      </div>
      <div className="field-wrapper">
        <InputField type="text" placeholder="30s" />
        <p>Seconds</p>
      </div>
    </div>
  );
}

export default TimeInput;

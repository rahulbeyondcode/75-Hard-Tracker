function TimerComponent() {
  return (
    <div>
      <p>00h : 17m : 38s</p>
      <button type="button">Play</button>
      <button type="button">Pause</button>
      <button type="button">Stop</button>
    </div>
  );
}

function WorkoutTracker() {
  return (
    <div>
      <p>How would you prefer to track your workout?</p>
      <label htmlFor="timer">
        <input type="radio" name="alcohol" id="timer" />
        Start a timer
      </label>

      <label htmlFor="manual">
        <input type="radio" name="alcohol" id="manual" />
        Enter workout timings manually
      </label>

      <input type="text" />
      <p>Hours</p>
      <input type="text" />
      <p>Minutes</p>
      <input type="text" />
      <p>Seconds</p>

      <TimerComponent />

      <hr />

      <button type="button">Cancel</button>
      <button type="button">Save</button>
    </div>
  );
}

export default WorkoutTracker;

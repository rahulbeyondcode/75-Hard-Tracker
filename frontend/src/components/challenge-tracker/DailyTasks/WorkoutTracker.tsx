const TimerComponent = () => {
  return (
    <div>
      <p>00h : 17m : 38s</p>
      <button>Play</button>
      <button>Pause</button>
      <button>Stop</button>
    </div>
  );
};

const WorkoutTracker = () => {
  return (
    <div>
      <p>How would you prefer to track your workout?</p>
      <input type="radio" name="alcohol" id="timer" />
      <label htmlFor="timer">Start a timer</label>
      <input type="radio" name="alcohol" id="manual" />
      <label htmlFor="manual">Enter workout timings manually</label>

      <input type="text" />
      <p>Hours</p>
      <input type="text" />
      <p>Minutes</p>
      <input type="text" />
      <p>Seconds</p>

      <TimerComponent />

      <hr />

      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
};

export default WorkoutTracker;

import PauseIcon from "assets/PauseIcon";
import PlayIcon from "assets/PlayIcon";
import StopIcon from "assets/StopIcon";

function TimerComponent() {
  return (
    <>
      <h1>00h : 17m : 38s</h1>
      <div className="timer-wrapper">
        <div>
          <PlayIcon />
        </div>
        <div>
          <PauseIcon />
        </div>
        <div>
          <StopIcon />
        </div>
      </div>
    </>
  );
}

export default TimerComponent;

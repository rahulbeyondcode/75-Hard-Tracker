import { useEffect, useState } from "react";
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import isEmpty from "lodash.isempty";

import PauseIcon from "assets/PauseIcon";
import PlayIcon from "assets/PlayIcon";
import StopIcon from "assets/StopIcon";

import { DATE_FORMAT } from "helpers/constants";
import { TimeStateType } from "./types";
import Button from "components/form-fields/Button";

dayjs.extend(customParseFormat);
dayjs.extend(duration);

const TIMER_START = "timer_start_time";
const TIMER_PAUSE = "timer_pause_time";

// Milliseconds to hours minutes seconds
const msToHMS = (ms: number) => {
  const durationInHours = dayjs.duration(ms).hours();
  const durationInMins = dayjs.duration(ms).minutes();
  const durationInSecs = dayjs.duration(ms).seconds();

  return {
    hh: String(durationInHours).padStart(2, "0"),
    mm: String(durationInMins).padStart(2, "0"),
    ss: String(durationInSecs).padStart(2, "0"),
  };
};

const getTimerValues = (startTime: string) => {
  const now = dayjs();
  const startString = dayjs(startTime, DATE_FORMAT);

  const diffInMilliseconds = now.diff(startString);
  return msToHMS(diffInMilliseconds);
};

let interval: number;

function Timer() {
  const [timerstate, setTimerState] = useState({} as TimeStateType);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [didStopTimer, setDidStopTimer] = useState(false);

  useEffect(() => {
    const timerStartTime = localStorage.getItem(TIMER_START);
    const timerPauseTime = localStorage.getItem(TIMER_PAUSE);

    if (timerStartTime && !timerPauseTime) {
      setIsTimerRunning(true);
    } else if (timerStartTime && timerPauseTime) {
      const startTime = dayjs(timerStartTime, DATE_FORMAT);
      const pauseTime = dayjs(timerPauseTime, DATE_FORMAT);

      const timeElapsedRunning = pauseTime.diff(startTime);

      const newStartDate = dayjs()
        .subtract(timeElapsedRunning, "milliseconds")
        .format(DATE_FORMAT);

      const { hh, mm, ss } = getTimerValues(newStartDate);
      setTimerState({ hh, mm, ss });
    }
  }, []);

  useEffect(() => {
    if (isTimerRunning) {
      interval = setInterval(() => {
        const startDate = localStorage.getItem(TIMER_START)!;

        const { hh, mm, ss } = getTimerValues(startDate);
        setTimerState({ hh, mm, ss });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isTimerRunning]);

  const handlePlayClick = () => {
    // Resuming timer from a paused time
    const timerPauseTime = localStorage.getItem(TIMER_PAUSE);

    if (timerPauseTime) {
      const timeOfTimerStart = dayjs(
        localStorage.getItem(TIMER_START),
        DATE_FORMAT
      );
      const timeOfTimerPause = dayjs(timerPauseTime, DATE_FORMAT);
      const now = dayjs();

      // Calculate how long the timer ran BEFORE it was paused (e.g., 12 seconds)
      const elapsedTimeBeforePause = timeOfTimerPause.diff(timeOfTimerStart);

      // New start time = current time - elapsed time before pause
      const newStartTime = now.subtract(elapsedTimeBeforePause, "ms");

      localStorage.setItem(TIMER_START, newStartTime.format(DATE_FORMAT));
      localStorage.setItem(TIMER_PAUSE, "");
    } else {
      // Starting a fresh timer
      const startTime = dayjs().format(DATE_FORMAT);
      localStorage.setItem(TIMER_START, startTime);
    }

    localStorage.setItem(TIMER_PAUSE, "");
    setIsTimerRunning(true);
  };

  const handlePauseClick = () => {
    localStorage.setItem(TIMER_PAUSE, dayjs().format(DATE_FORMAT));

    setIsTimerRunning(false);
  };

  const handleStopClick = () => {
    setIsTimerRunning(false);
    setDidStopTimer(true);
  };

  const handleResetTimer = () => {
    setTimerState({} as TimeStateType);
    setDidStopTimer(false);
    localStorage.setItem(TIMER_START, "");
    localStorage.setItem(TIMER_PAUSE, "");
  };

  return (
    <>
      {!isEmpty(timerstate) ? (
        <h1>
          {timerstate.hh ? `${timerstate.hh}h : ` : ""}
          {timerstate.mm ? `${timerstate.mm}m : ` : ""}
          {timerstate.ss ? `${timerstate.ss}s` : ""}
        </h1>
      ) : (
        "00h : 00m : 00s"
      )}
      <div className="timer-wrapper">
        {!didStopTimer ? (
          isTimerRunning ? (
            <div onClick={handlePauseClick}>
              <PauseIcon />
            </div>
          ) : (
            <div onClick={handlePlayClick}>
              <PlayIcon />
            </div>
          )
        ) : (
          ""
        )}
        {didStopTimer ? (
          <Button onClick={handleResetTimer}>Reset Timer</Button>
        ) : (
          <div onClick={handleStopClick}>
            <StopIcon />
          </div>
        )}
      </div>
    </>
  );
}

export default Timer;

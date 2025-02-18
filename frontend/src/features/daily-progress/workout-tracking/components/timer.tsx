import { useEffect, useRef, useState } from "react";
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import isEmpty from "lodash.isempty";

import PauseIcon from "assets/PauseIcon";
import PlayIcon from "assets/PlayIcon";
import StopIcon from "assets/StopIcon";

import { DATE_FORMAT } from "helpers/constants";
import { TimeStateType } from "./types";

dayjs.extend(customParseFormat);
dayjs.extend(duration);

// Milliseconds to hours minutes seconds
const msToHMS = (ms: number) => {
  let totalHours = 0;
  let totalMinutes = 0;
  let totalSeconds = 0;

  const durationInHours = dayjs.duration(ms).hours();

  const durationInMinutes = dayjs.duration(ms).minutes();

  const durationInSeconds = dayjs.duration(ms).seconds();

  totalHours = durationInHours;

  if (durationInMinutes > 60) {
    totalMinutes = durationInMinutes % 60;
  } else {
    totalMinutes = durationInMinutes;
  }

  if (durationInSeconds > 60) {
    totalSeconds = durationInSeconds % 60;
  } else {
    totalSeconds = durationInSeconds;
  }

  return {
    hh: totalHours < 10 ? `0${totalHours}` : String(totalHours),
    mm: totalMinutes < 10 ? `0${totalMinutes}` : String(totalMinutes),
    ss: totalSeconds < 10 ? `0${totalSeconds}` : String(totalSeconds),
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
  const timerPausedTime = useRef("");

  const [timerstate, setTimerState] = useState({} as TimeStateType);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    if (isTimerRunning) {
      interval = setInterval(() => {
        const startDate = localStorage.getItem("timer_start_time")!;

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
    if (timerPausedTime.current) {
      // Resuming timer from a paused time
      const pausedTime = dayjs(timerPausedTime.current, DATE_FORMAT);
      const now = dayjs();

      // Find how much time the timer was paused in milliseconds and convert to hh:mm:ss
      const diffInMilliseconds = now.diff(pausedTime);
      const timePassedWhileInPause = msToHMS(diffInMilliseconds);

      let modifiedResumeTime = dayjs();

      if (Number(timePassedWhileInPause.hh) > 0) {
        modifiedResumeTime = now.subtract(
          Number(timePassedWhileInPause.hh),
          "h"
        );
      }
      if (Number(timePassedWhileInPause.mm) > 0) {
        modifiedResumeTime = now.subtract(
          Number(timePassedWhileInPause.mm),
          "m"
        );
      }
      if (Number(timePassedWhileInPause.ss) > 0) {
        modifiedResumeTime = now.subtract(
          Number(timePassedWhileInPause.ss),
          "s"
        );
      }

      localStorage.setItem(
        "timer_start_time",
        modifiedResumeTime.format(DATE_FORMAT)
      );
      timerPausedTime.current = "";
    } else {
      // Starting a fresh timer
      const startTime = dayjs().format("DD-MM-YYYY hh:mm:ss A");
      localStorage.setItem("timer_start_time", startTime);
    }

    localStorage.setItem("timer_pause_time", "");
    setIsTimerRunning(true);
  };

  const handlePauseClick = () => {
    timerPausedTime.current = dayjs().format(DATE_FORMAT);
    localStorage.setItem("timer_pause_time", timerPausedTime.current);

    setIsTimerRunning(false);
  };

  const handleStopClick = () => {
    setIsTimerRunning(false);
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
        ""
      )}
      <div className="timer-wrapper">
        {isTimerRunning ? (
          <div onClick={handlePauseClick}>
            <PauseIcon />
          </div>
        ) : (
          <div onClick={handlePlayClick}>
            <PlayIcon />
          </div>
        )}
        <div onClick={handleStopClick}>
          <StopIcon />
        </div>
      </div>
    </>
  );
}

export default Timer;

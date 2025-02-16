import { useEffect, useState } from "react";
import dayjs from "dayjs";
import isEmpty from "lodash.isempty";
import customParseFormat from "dayjs/plugin/customParseFormat";
import duration from "dayjs/plugin/duration";

import PauseIcon from "assets/PauseIcon";
import PlayIcon from "assets/PlayIcon";
import StopIcon from "assets/StopIcon";

type TimeStateType = {
  hh: string;
  mm: string;
  ss: string;
};

dayjs.extend(customParseFormat);
dayjs.extend(duration);

const getTimerValues = (startTime: string) => {
  const now = dayjs();
  const startString = dayjs(startTime, "DD-MM-YYYY hh:mm:ss A");

  const diffInMilliseconds = now.diff(startString);

  let totalHours = dayjs.duration(diffInMilliseconds).hours();
  let totalMinutes = 0;
  let totalSeconds = 0;

  const durationInMinutes = dayjs.duration(diffInMilliseconds).minutes();
  const durationInSeconds = dayjs.duration(diffInMilliseconds).seconds();

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

let interval: number | null;

function Timer() {
  const [timerstate, setTimerState] = useState({} as TimeStateType);

  const intervalTimer = () => {
    const startTime = localStorage.getItem("timer_start") || "";

    if (startTime) {
      const interval = setInterval(() => {
        const { hh, mm, ss } = getTimerValues(startTime);
        setTimerState({ hh, mm, ss });
      }, 1000);

      return interval;
    }
    return null;
  };

  useEffect(() => {
    return () => {
      clearInterval(interval!);
    };
  }, [timerstate]);

  console.log("timerstate: ", timerstate);

  const handlePlayClick = () => {
    const startTime = dayjs().format("DD-MM-YYYY hh:mm:ss A");
    localStorage.setItem("timer_start", startTime);
    const { hh, mm, ss } = getTimerValues(startTime);
    setTimerState({ hh, mm, ss });
  };

  const handlePauseClick = () => {
    const startTime = localStorage.getItem("timer_start") || "";
    getTimerValues(startTime);
  };

  const handleStopClick = () => {};

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
        <div onClick={handlePlayClick}>
          <PlayIcon />
        </div>
        <div onClick={handlePauseClick}>
          <PauseIcon />
        </div>
        <div onClick={handleStopClick}>
          <StopIcon />
        </div>
      </div>
    </>
  );
}

export default Timer;

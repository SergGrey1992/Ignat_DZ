import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Clock() {
  const [timerId, setTimerId] = useState<number>(0);
  const [date, setDate] = useState<Date>();
  const [show, setShow] = useState<boolean>(false);
  console.log(timerId)
  const stop = () => {
    clearInterval(timerId)
  }
  const start = () => {
    stop();
    const id: number = window.setInterval(() => {
      setDate(new Date())
    }, 1000);
    setTimerId(id);
  }

  const onMouseEnter = () => {
    setShow(true)
    // show
  };
  const onMouseLeave = () => {
    setShow(false)
    // close
  };
  //const dateTime = new Date().toLocaleTimeString()
  const stringTime = "Time"; // fix with date
  const stringDate = "Date"; // fix with date

  return (
    <div>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {stringTime}
        {date?.toLocaleTimeString()}
      </div>
      {show && (
        <div>
          {stringDate}
          {date?.toLocaleDateString()}
        </div>
      )}
      <SuperButton onClick={start}>start</SuperButton>
      <SuperButton onClick={stop}>stop</SuperButton>
    </div>
  );
}

export default Clock;

import { useEffect } from "react";

function Timer({ dispactch, timeRemaining }) {
  const minute = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(function () {
        dispactch({ type: "tick" });
      }, 1000);
      return () => clearInterval(id);
    },
    [dispactch]
  );
  return (
    <div className="timer">
      {minute < 10 && "0"}
      {minute}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;

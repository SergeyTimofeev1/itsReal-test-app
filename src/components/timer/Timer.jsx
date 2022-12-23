import { useState, useEffect, useContext } from 'react';
import { generateRangomNumber } from '../../utils/generateRandomNumber';



const Timer = () => {

  const [delay, setDelay] = useState(generateRangomNumber(10, 30))
  const [timerHandler, setTimerHandler] = useState(true)
  const [timeEnd, setTimeEnd] = useState(false)

  const minutes = Math.floor(delay / 60)
  const seconds = Math.floor(delay % 60)

  const startTimer = () => {
    setTimerHandler(prev => !prev)
  }

  useEffect(() => {
    if (timerHandler) {
      const timer = setInterval(() => {
        setDelay(delay - 1);
      }, 1000);

      if (delay === 0) {
        setTimeEnd(prev => !prev)
        clearInterval(timer)
      }

      return () => {
        clearInterval(timer)
      };
    }
  }, [timerHandler, delay]);


  return (
    <div className="timer">
      <div className="timer__content">
        Исчезнет через {seconds}с
      </div>
    </div>
  );
};

export default Timer;
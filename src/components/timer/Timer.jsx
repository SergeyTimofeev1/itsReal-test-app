import { useState, useEffect } from 'react';
import { generateRangomNumber } from '../../utils/generateRandomNumber';
import './timer.scss'



const Timer = ({ note, remove, notes }) => {

  const [delay, setDelay] = useState(generateRangomNumber(10, 30))
  const [timerHandler, setTimerHandler] = useState(true)

  const seconds = Math.floor(delay % 60)

  useEffect(() => {
    if (!timerHandler) {
      remove(note)
    }
  }, [timerHandler]);


  useEffect(() => {
    if (timerHandler) {
      const timer = setInterval(() => {
        setDelay(delay - 1);
      }, 1000);

      if (delay === 0) {
        setTimerHandler(prev => !prev)
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
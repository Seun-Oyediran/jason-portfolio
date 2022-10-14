import React, { useEffect, useRef, useState } from 'react';
import { calcTime } from '../../utils';

const TimeBtn = () => {
  const [time, setTime] = useState(calcTime());
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calcTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app_time_btn_con">
      <div className="d-flex align-items-center gap-2">
        <p className="p">Its </p>
        <button
          type="button"
          className="no_style"
          onClick={() => {
            audioRef.current?.play();
          }}
        >
          {time}
        </button>
        <p className="p">Somewhere. I’m probably awake.</p>
      </div>

      <div className="d-none">
        {/* eslint-disable-next-line */}
        <audio ref={audioRef} controls>
          <source src="/audio/time.mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default TimeBtn;

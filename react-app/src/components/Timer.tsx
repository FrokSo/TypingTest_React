import { useEffect, useState } from "react";
import Worker from "../worker/TimerWorker.ts?worker";

interface TimerProp {
  initialSeconds: number;
  shouldStart: boolean;
  onTimerFinish: () => void;
  retrieveTime: (time: number) => void;
}

function Timer({
  initialSeconds,
  shouldStart,
  onTimerFinish,
  retrieveTime,
}: TimerProp) {
  const [seconds, setSeconds] = useState(initialSeconds);

  const worker = new Worker();

  useEffect(() => {
    if (shouldStart) {
      const workerData = {
        time: initialSeconds,
        status: "start",
      };
      worker.postMessage(workerData);
      worker.onmessage = (event: MessageEvent) => {
        setSeconds(event.data.time);
        retrieveTime(event.data.time);
        if (event.data.status === "stopped") {
          onTimerFinish();
          worker.terminate();
        }
      };
      return () => {
        if (worker) {
          onTimerFinish();
          worker.terminate();
        }
      };
    }
  }, [shouldStart]);
  return <p>Time Remaining: {seconds}</p>;
}

export default Timer;

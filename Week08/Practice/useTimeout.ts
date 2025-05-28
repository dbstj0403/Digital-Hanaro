// cleanup을 자동으로 해주는 useTimeout 커스텀 훅
import { useEffect, useRef } from "react";

type TimeoutCallback = () => void;

function useTimeout(
  callback: TimeoutCallback,
  delay: number | null,
  deps: any[] = []
) {
  const savedCallback = useRef<TimeoutCallback>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay == null) return;

    const id = window.setTimeout(() => {
      savedCallback.current?.();
    }, delay);

    return () => {
      clearTimeout(id);
    };
  }, [delay, ...deps]);
}

export default useTimeout;

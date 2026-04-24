import { useRef } from "react";

export default function usePreviousDirection(value) {
  const prev = useRef(value);
  const dir = useRef("up");

  if (value !== prev.current) {
    dir.current = value > prev.current ? "up" : "down";
    prev.current = value;
  }

  return dir.current;
}

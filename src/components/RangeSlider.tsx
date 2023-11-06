import { useEffect, useRef } from "react";
import "toolcool-range-slider";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "toolcool-range-slider": any;
    }
  }
}
const RangeSlider = () => {
  const rangeSliderRef = useRef<HTMLElement>();

  useEffect(() => {
    const slider = rangeSliderRef.current;

    const onChange = (evt: Event) => {
      // Check if the event is an instance of CustomEvent
      if (evt instanceof CustomEvent) {
        const value = Math.round(evt.detail.value);
        console.log(value);
      } else {
        console.error("The event is not of type CustomEvent");
      }
    };

    slider?.addEventListener("change", onChange);

    return () => {
      slider?.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <>
      <toolcool-range-slider
        min={0}
        max="200"
        value="150"
        step="10"
        ref={rangeSliderRef}
      />
    </>
  );
};

export default RangeSlider;

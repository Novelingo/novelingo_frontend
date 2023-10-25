import React, { useState } from "react";

interface SliderProps {
  min: number;
  max: number;
  sections: number;
}

const Slider: React.FC<SliderProps> = ({ min, max, sections }) => {
  const [value, setValue] = useState<number>(min);

  const sectionWidth = (max - min) / sections;
  const intervals = Array.from({ length: sections + 1 }).map(
    (_, index) => min + index * sectionWidth
  );

  return (
    <div className="w-96 text-white relative">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        step={sectionWidth}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full  mt-5 mb-3"
      />
      <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2 w-full px-2">
        {intervals.map((_, index) => (
          <div key={index} className="text-sm mt-3 transform -translate-x-1/2">
            {index === 0 && "A1"}
            {index === 1 && "A2"}
            {index === 2 && "B1"}
            {index === 3 && "B2"}
            {index === 4 && "C1"}
            {index === 5 && "C2"}
          </div>
        ))}
      </div>
      <div className="text-center mt-2">
        <span className="px-2 py-1 ">{value}</span>
      </div>
    </div>
  );
};

export default Slider;

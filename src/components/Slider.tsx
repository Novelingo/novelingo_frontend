import ReactSlider from "react-slider";
import "./Slider.css";
import { ReactNode } from "react";

type SliderProps<L extends ReactNode, V extends ReactNode> = {
  sections: {
    label: L;
    value: V;
  }[];
  onChange?: (value: V, label: L) => void;
  value?: number;
  defaultValue?: number;
};

const Slider = <L extends ReactNode, V extends ReactNode>({
  sections,
  value,
  defaultValue,
  onChange,
}: SliderProps<L, V>) => {
  const index = sections.findIndex((section) => section.value === value);
  return (
    <ReactSlider
      className="horizontal-slider"
      marks
      min={0}
      defaultValue={defaultValue}
      max={sections.length - 1}
      value={index !== -1 ? index : undefined}
      onChange={(_, index) =>
        onChange?.(sections[index].value, sections[index].label)
      }
      markClassName="example-mark"
      thumbClassName="example-thumb"
      trackClassName="example-track"
      renderMark={(props) => {
        return (
          <div {...props}>
            <div className="absolute w-[1px] top-3 h-5 bg-light" />
            <p className="absolute text-light top-10 text-lg">
              {sections[Number(props.key)].label}
            </p>
          </div>
        );
      }}
      renderThumb={(props) => (
        <div {...props}>
          <div className="bg-light w-7 h-7 rounded-full items-center flex justify-center">
            <div className="bg-pink w-3 h-3 rounded-full"></div>
          </div>
        </div>
      )}
    />
  );
};

export default Slider;

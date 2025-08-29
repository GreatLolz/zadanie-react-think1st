import { useEffect, useRef, useState } from "react";
import type { SliderProps } from "./types";

export default function Slider({ label, value, min, max, step, onChange }: SliderProps) {
    const [valuePosition, setValuePosition] = useState(0);
    const sliderRef = useRef<HTMLInputElement | null>(null);

    const THUMB_WIDTH = 16;

    useEffect(() => {
        const updateValuePosition = () => {
            if (!sliderRef.current) {
                return;
            }

            const width = sliderRef.current.clientWidth;
            const thumbOffset = (value - min) / (max - min) * (width - THUMB_WIDTH) + THUMB_WIDTH / 2;

            setValuePosition(thumbOffset);

        }

        updateValuePosition();
    }, [value])

    return (
        <div className="flex flex-col w-full relative">
            <label className="text-sm">{label}</label>
            <div className="flex flex-row justify-between mb-[-0.5em] px-1.5 text-sm mt-1">
                <span>{min}</span>
                <span>{max}</span>
            </div>
            <input className="w-full bg-white border-1 border-neutral-300 rounded-lg accent-violet-500 mt-1 mb-5" 
                type="range"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                min={min}
                max={max}
                step={step}
                ref={sliderRef}
            />
            <div className="flex absolute top-15 border-1 w-10 justify-center px-2 py-1 border-violet-400 rounded-md mt-1 text-xs text-violet-700 bg-white"
                style={{
                    left: valuePosition,
                    transform: "translateX(-45%)"
                }}
            >
                <span>{value}</span>
            </div>
        </div>
    )
}
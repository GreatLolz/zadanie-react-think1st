import type { SliderProps } from "../types/components";

export default function Slider({ label, value, min, max, step, onChange }: SliderProps) {

    return (
        <div className="flex flex-col w-full">
            <label className="text-sm">{label}</label>
            <div className="flex flex-row justify-between mb-[-0.5em] px-1.5 text-sm mt-1">
                <span>{min}</span>
                <span>{max}</span>
            </div>
            <input className="w-full bg-white border-1 border-neutral-300 rounded-lg px-4 py-2 accent-violet-500" 
                type="range"
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                min={min}
                max={max}
                step={step}
            />
        </div>
    )
}
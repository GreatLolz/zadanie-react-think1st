import { WORKOUT_HOURS } from "../../../types/form";
import type { TimePickerProps } from "./types";

export default function TimePicker({workoutHour, onChange}: TimePickerProps) {
    return(
        <div className="flex flex-col gap-1">
            <label className="text-sm">Time</label>
            <div className="flex flex-row gap-2 flex-wrap">
                    {WORKOUT_HOURS.map((hour, index) => {
                        return (
                            <label key={index} className={`hover:cursor-pointer bg-white p-2 px-3 rounded-md ${workoutHour === hour ? "border-violet-700 border-2" : "border-violet-300 border-1"}`}>
                                <input type="radio" name="workoutHour" value={hour} checked={workoutHour === hour} onChange={() => {onChange(hour)}} className="hidden"/>
                                {hour}
                            </label>
                        )
                    })}
            </div>
        </div>
    )
}
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css"
import type { DateInputProps } from "../types/components";
import { useState } from "react";
import "./dateInput.css"
import { WORKOUT_HOURS } from "../types/types";

export default function DateInput({ label, onChange }: DateInputProps) {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [workoutHour, setWorkoutHour] = useState<string | null>(null)

    const handleDateChange = (date: Date) => {
        setDate(date);
        onChange(date);
    }

    const handleHourChange = (hour: string) => {
        if (!date) return;

        const [h, m] = hour.split(":");

        const newDate = new Date(date)
        newDate.setHours(Number(h), Number(m), 0, 0)
        console.log(newDate)

        setDate(newDate);
        onChange(newDate)

        setWorkoutHour(hour);
    }

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <div>
                <label className="text-sm">{label}</label>
                <DayPicker
                    className="bg-white w-full items-center justify-center flex p-3 rounded-md border-1 border-violet-300"
                    mode="single"
                    selected={date}
                    onSelect={handleDateChange}
                    required={true}
                    navLayout="around"
                    classNames={{
                        today: "",
                    }}
                    style={{ width: 'auto' }}
                />
            </div>
            
            <div className="flex flex-col gap-1">
                {date ? <label className="text-sm">Time</label> : <></> }
                <div className="flex flex-row gap-2 flex-wrap">
                    {date ? WORKOUT_HOURS.map((hour, index) => {
                        return (
                            <label key={index} className={`hover:cursor-pointer bg-white p-2 px-3 rounded-md ${workoutHour === hour ? "border-violet-700 border-2" : "border-violet-300 border-1"}`}>
                                <input type="radio" name="workoutHour" value={hour} checked={workoutHour === hour} onChange={() => {handleHourChange(hour)}} className="hidden"/>
                                {hour}
                            </label>
                        )
                    }) : <></>}
                </div>
                
            </div>
        </div>
    )
}
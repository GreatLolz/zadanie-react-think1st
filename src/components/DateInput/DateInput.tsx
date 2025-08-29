import "react-day-picker/style.css"
import type { DateInputProps } from "./types";
import { useState } from "react";
import "./dateInput.css"
import { WORKOUT_HOURS } from "../../types/form";
import InfoIcon from "../icons/InfoIcon";
import { useHolidayData } from "../../hooks/useHolidayData";
import { isSameDay, setHour } from "../../utils/date";
import Calendar from "./Calendar/Calendar";

export default function DateInput({ label, onChange }: DateInputProps) {
    const { nationalHolidays, observances } = useHolidayData();
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [workoutHour, setWorkoutHour] = useState<string | null>(null)
    const [info, setInfo] = useState<string | null>(null);

    const handleDateChange = (date: Date) => {
        if (workoutHour) {
            date = new Date(setHour(date, workoutHour))
        }

        setDate(date);
        onChange(date);

        for (const observance of observances) {
            if (isSameDay(date, observance.date)) {
                setInfo(observance.name)
                return
            }
        } 
        setInfo(null)
    }

    const handleHourChange = (hour: string) => {
        if (!date) return;

        const newDate = setHour(date, hour);

        setDate(newDate);
        onChange(newDate)

        setWorkoutHour(hour);
    }

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <div>
                <label className="text-sm">{label}</label>
                <Calendar date={date} onSelect={handleDateChange} disabled={nationalHolidays.map(h => (new Date(h.date)))} />
                { info && 
                    <div className="flex flex-row text-sm leading-4 gap-2 mt-2">
                        <span>
                            <InfoIcon />
                        </span>
                        It is {info}
                    </div>
                }
            </div>
            {date && 
                <div className="flex flex-col gap-1">
                    <label className="text-sm">Time</label>
                    <div className="flex flex-row gap-2 flex-wrap">
                            {WORKOUT_HOURS.map((hour, index) => {
                                return (
                                    <label key={index} className={`hover:cursor-pointer bg-white p-2 px-3 rounded-md ${workoutHour === hour ? "border-violet-700 border-2" : "border-violet-300 border-1"}`}>
                                        <input type="radio" name="workoutHour" value={hour} checked={workoutHour === hour} onChange={() => {handleHourChange(hour)}} className="hidden"/>
                                        {hour}
                                    </label>
                                )
                            })}
                    </div>
                </div>
            }
        </div>
    )
}
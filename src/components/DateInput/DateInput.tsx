import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css"
import type { DateInputProps } from "./types";
import { useEffect, useState } from "react";
import "./dateInput.css"
import { WORKOUT_HOURS, type Holiday } from "../../types/form";
import { getHolidayData } from "../../utils/api";
import InfoIcon from "../icons/InfoIcon";

function isSameDay(d1: Date, d2: Date): boolean {
    return (
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate()
    );
}

export default function DateInput({ label, onChange }: DateInputProps) {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [nationalHolidays, setNationalHolidays] = useState<Holiday[]>([]);
    const [observances, setObservances] = useState<Holiday[]>([]);
    const [workoutHour, setWorkoutHour] = useState<string | null>(null)
    const [info, setInfo] = useState<string | null>(null);

    const handleDateChange = (date: Date) => {
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

        const [h, m] = hour.split(":");

        const newDate = new Date(date)
        newDate.setHours(Number(h), Number(m), 0, 0)

        setDate(newDate);
        onChange(newDate)

        setWorkoutHour(hour);
    }

    useEffect(() => {
        const getData = async () => {
            const data = await getHolidayData();
            if (!data) return;

            const _observances: Holiday[] = [];
            const _nationalHolidays: Holiday[] = [];

            for (const holiday of data) {
                if (holiday.type === "OBSERVANCE") {
                    _observances.push(holiday);
                }
                else if (holiday.type === "NATIONAL_HOLIDAY") {
                    _nationalHolidays.push(holiday);
                }
            }

            setObservances(_observances)
            setNationalHolidays(_nationalHolidays)
        }

        getData();
    }, [])

    return (
        <div className="flex flex-col md:flex-row gap-3">
            <div>
                <label className="text-sm">{label}</label>
                <DayPicker
                    className="bg-white w-auto md:w-76 items-center justify-center flex p-3 rounded-md border-1 border-violet-300"
                    mode="single"
                    selected={date}
                    onSelect={handleDateChange}
                    required={true}
                    navLayout="around"
                    weekStartsOn={1}
                    disabled={[
                        { dayOfWeek: [0] },
                        ...nationalHolidays.map(h => (new Date(h.date)))
                    ]}
                    classNames={{
                        today: "",
                    }}
                />
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
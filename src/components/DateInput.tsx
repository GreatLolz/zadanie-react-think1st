import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css"
import type { DateInputProps } from "../types/components";
import { useState } from "react";
import "./dateInput.css"

export default function DateInput({ label, onChange }: DateInputProps) {
    const [date, setDate] = useState<Date>(new Date());

    const handleChange = (date: Date) => {
        setDate(date);
        onChange(date);
    }

    return (
        <div className="flex flex-col w-full gap-1">
            <label className="text-sm">{label}</label>
            <DayPicker
                className="bg-white w-fit p-3 rounded-md border-1 border-violet-300"
                mode="single"
                selected={date}
                onSelect={handleChange}
                required={true}
                navLayout="around"
                classNames={{
                    today: ""
                }}
            />
        </div>
    )
}
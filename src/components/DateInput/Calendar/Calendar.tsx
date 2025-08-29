import { DayPicker } from "react-day-picker";
import type { CalendarProps } from "./types";

export default function Calendar({date, onSelect, disabled}: CalendarProps) {
    return (
        <DayPicker
            className="bg-white w-auto md:w-76 items-center justify-center flex p-3 rounded-md border-1 border-violet-300"
            mode="single"
            selected={date}
            onSelect={onSelect}
            required={true}
            navLayout="around"
            weekStartsOn={1}
            disabled={[
                { dayOfWeek: [0] },
                ...disabled
            ]}
            classNames={{
                today: "",
            }}
        />
    )
}
import type { Holiday } from "../types/types";

const NINJAS_API_KEY = import.meta.env.VITE_NINJAS_API_KEY;

export async function getHolidayData(): Promise<Holiday[] | undefined> {
    try {
        const response = await fetch("https://api.api-ninjas.com/v1/holidays?country=PL", {
            headers: {"X-Api-Key":NINJAS_API_KEY}
        })
        if (response.ok) {
            const data = await response.json();

            const holidays: Holiday[] = [];
            for (const holiday of data) {
                const newHoliday: Holiday = {
                    date: new Date(holiday.date),
                    name: holiday.name,
                    type: holiday.type
                }

                holidays.push(newHoliday)
            }
            return holidays
        }
    }
    catch (ex) {
        console.error("An error has occured when fetching holidays: " + ex)
    }
}
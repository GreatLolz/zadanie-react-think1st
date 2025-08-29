import { useEffect, useState } from "react";
import { getHolidayData } from "../utils/api";
import type { Holiday } from "../types/form";

export function useHolidayData() {
    const [nationalHolidays, setNationalHolidays] = useState<Holiday[]>([]);
    const [observances, setObservances] = useState<Holiday[]>([]);

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

    return { nationalHolidays, observances }
}
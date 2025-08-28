import type { Holiday, WorkoutFormData } from "../types/types";

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

export async function submitForm(workoutFormData: WorkoutFormData): Promise<void> {
    try {
        const formData = new FormData();
        formData.append("firstName", workoutFormData.firstName)
        formData.append("lastName", workoutFormData.lastName)
        formData.append("age", String(workoutFormData.age))
        formData.append("photo", workoutFormData.photo!)
        formData.append("date", workoutFormData.date!.toString())


        const response = await fetch("http://letsworkout.pl/submit",
            {
                method: "POST",
                body: formData
            }
        )

        if (response.ok) {
            alert("Form submitted successfully!")
        }
    }
    catch (ex) {
        console.error("An error has occured when submitting the form: " + ex)
    }
}
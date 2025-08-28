export interface WorkoutFormData {
    firstName: string
    lastName: string
    email: string
    age: number
    photo: File | null
    date: Date | null
}

export const WORKOUT_HOURS = [
    "12:00",
    "14:00",
    "16:30",
    "18:30",
    "20:00"
]
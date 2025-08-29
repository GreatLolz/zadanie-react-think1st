export interface WorkoutFormData {
    firstName: string
    lastName: string
    email: string
    age: number
    photo: File | null
    date: Date | null
}

export type Errors = {
    [key in keyof WorkoutFormData]?: string;
}

export interface Holiday {
    date: Date,
    name: string,
    type: string
}

export const WORKOUT_HOURS = [
    "12:00",
    "14:00",
    "16:30",
    "18:30",
    "20:00"
]

export const FORM_ERRORS = {
    email: "Please use correct formatting. Example: address@email.com"
}
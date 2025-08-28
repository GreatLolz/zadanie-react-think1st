import { useState } from "react";
import Input from "./Input";
import { type WorkoutFormData } from "../types/types";

export default function WorkoutForm() {
    const [formData, setFormData] = useState<WorkoutFormData>(
        {
            firstName: "",
            lastName: "",
            email: "",
            age: 8,
            photo: null,
            date: null,
        }
    )

    const handleChange = (name: string, newValue: string | number | File | Date) => {
        setFormData({ ...formData, [name]: newValue })
    }

    const handleSubmit = () => {
        console.log(formData)
    }

    return (
        <form className="flex flex-col gap-3 w-full max-w-90">
            <h1 className="text-xl font-semibold">Personal info</h1>
            <Input label="First Name" value={formData.firstName} type="text" onChange={(newValue) => handleChange("firstName", newValue)} />
            <Input label="Last Name" value={formData.lastName} type="text" onChange={(newValue) => handleChange("lastName", newValue)} />
            <Input label="Email Address" value={formData.email} type="email" onChange={(newValue) => handleChange("email", newValue)} />
            <button className="bg-violet-600 text-white font-semibold p-2 rounded-sm mt-8 hover:cursor-pointer hover:bg-violet-700" 
                type="submit"
                onClick={(e) => { e.preventDefault(); handleSubmit() }}
            >Send Application</button>
        </form>
        
    )
}
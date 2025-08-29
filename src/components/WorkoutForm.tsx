import { useEffect, useState } from "react";
import Input from "./Input/Input";
import { FORM_ERRORS, type Errors, type WorkoutFormData } from "../types/form";
import Slider from "./Slider/Slider";
import FileInput from "./FileInput/FileInput";
import DateInput from "./DateInput/DateInput";
import { submitForm } from "../utils/api";

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
    const [errors, setErrors] = useState<Errors>({})

    const [submitDisabled, setSubmitDisabled] = useState<boolean>(true)

    useEffect(() => {
        const newErrors: Errors = {}
    
        if (formData.email !== "") {
            const emailPattern = /^\S+@\S+\.\S+$/;
            if (!formData.email.match(emailPattern)) {
                newErrors.email = FORM_ERRORS.email
            }
        }
    
        setErrors(newErrors)
    
        const hasEmptyFields = Object.values(formData).some((value) => {
            if (typeof value === "string") {
                return value.trim() === "";
            }
            return value === null
        })
    
        const hasErrors = Object.values(newErrors).some(value => value)
        setSubmitDisabled(hasErrors || hasEmptyFields)
    }, [formData])    

    const handleChange = (name: string, newValue: string | number | File | Date | null) => {
        setFormData({ ...formData, [name]: newValue })
    }

    const handleSubmit = () => {
        submitForm(formData);
    }

    return (
        <form className="flex flex-col gap-3 w-full max-w-95">
            <h1 className="text-xl font-semibold">Personal info</h1>
            <Input label="First Name" value={formData.firstName} type="text" onChange={(newValue) => handleChange("firstName", newValue)} error={errors.firstName} />
            <Input label="Last Name" value={formData.lastName} type="text" onChange={(newValue) => handleChange("lastName", newValue)} error={errors.lastName}/>
            <Input label="Email Address" value={formData.email} type="email" onChange={(newValue) => handleChange("email", newValue)} error={errors.email}/>
            <Slider label="Age" value={formData.age} min={8} max={100} step={1} onChange={(newValue) => handleChange("age", newValue)}></Slider>
            <FileInput label="Photo" onChange={(newFile) => handleChange("photo", newFile)}></FileInput>
            <h1 className="text-xl font-semibold mt-5">Your workout</h1>
            <DateInput label="Date" onChange={(newDate) => handleChange("date", newDate)}/>
            <button className="bg-violet-600 text-white font-semibold p-2 rounded-sm mt-8 hover:cursor-pointer hover:bg-violet-700 disabled:opacity-30 disabled:cursor-not-allowed" 
                type="submit"
                onClick={(e) => { e.preventDefault(); handleSubmit() }}
                disabled={submitDisabled}
            >Send Application</button>
        </form>
        
    )
}
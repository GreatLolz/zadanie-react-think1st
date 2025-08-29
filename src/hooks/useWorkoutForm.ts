import { useEffect, useState } from "react";
import { FORM_ERRORS, type Errors, type WorkoutFormData } from "../types/form";
import { submitForm } from "../utils/api";

export function useWorkoutForm(defaultData: WorkoutFormData) {
    const [formData, setFormData] = useState<WorkoutFormData>(defaultData);
    const [errors, setErrors] = useState<Errors>({});
    const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);

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
        console.log(formData)
        submitForm(formData);
    }

    return { formData, errors, submitDisabled, handleChange, handleSubmit }
}
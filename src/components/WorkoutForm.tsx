import Input from "./Input/Input";
import Slider from "./Slider/Slider";
import FileInput from "./FileInput/FileInput";
import DateInput from "./DateInput/DateInput";
import CTAButton from "./CTAButton/CTAButton";
import { useWorkoutForm } from "../hooks/useWorkoutForm";

export default function WorkoutForm() {
    const { formData, errors, submitDisabled, handleChange, handleSubmit } = useWorkoutForm({
        firstName: "",
        lastName: "",
        email: "",
        age: 8,
        photo: null,
        date: null,
    })

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
            <CTAButton text="Send Application" onClick={handleSubmit} disabled={submitDisabled}/>
        </form>
        
    )
}
import ErrorIcon from "../icons/ErrorIcon";
import type { InputProps } from "./types";

export default function Input({ label, value, type, onChange, error }: InputProps) {
    return (
        <div className="flex flex-col w-full gap-1">
            <label className="text-sm">{label}</label>
            <input className={`w-full rounded-lg px-4 py-2 focus:outline-2 focus:outline-violet-800 
                    ${error 
                        ? "bg-red-50 border-2 border-red-400 focus:outline-none" 
                        : "bg-white border-1 border-violet-400"}
                `}
                type={type} 
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {
                error && 
                <div className="flex flex-row text-xs leading-4 w-50 gap-2">
                    <span className="text-red-500 mt-1">
                        <ErrorIcon />
                    </span>
                    {error}
                </div>
            }
        </div>
    )
}
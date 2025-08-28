import type { InputProps } from "../types/components";

export default function Input({ label, value, type, onChange }: InputProps) {
    return (
        <div className="flex flex-col w-full gap-1">
            <label className="text-sm">{label}</label>
            <input className="w-full bg-white border-1 border-violet-300 rounded-lg px-4 py-2 focus:outline-2 focus:outline-violet-800" 
                type={type} 
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}
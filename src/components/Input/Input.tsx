import type { InputProps } from "./types";

export default function Input({ label, value, type, onChange, error }: InputProps) {
    return (
        <div className="flex flex-col w-full gap-1">
            <label className="text-sm">{label}</label>
            <input className={`w-full rounded-lg px-4 py-2 focus:outline-2 focus:outline-violet-800 
                    ${error ? "bg-red-50 border-2 border-red-400 focus:outline-none" 
                    : "bg-white border-1 border-violet-400"}
                `}
                type={type} 
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {
                error && 
                <div className="flex flex-row text-xs leading-4 w-50 gap-2">
                    <span className="mt-1">
                        <svg width="15" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#ef5350"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path> </g></svg>
                    </span>
                    {error}
                </div>
            }
        </div>
    )
}
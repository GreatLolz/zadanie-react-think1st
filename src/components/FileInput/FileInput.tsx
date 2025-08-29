import { useRef, useState } from "react";
import type { FileInputProps } from "./types";

export default function FileInput({ label, onChange }: FileInputProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<string | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null;
        setFileName(file?.name ?? null)
        onChange(file);
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0] ?? null;
        setFileName(file?.name ?? null)
        onChange(file);
    }

    const handleRemove = () => {
        setFileName(null);
        onChange(null);
    }

    const handleInputClick = () => {
        inputRef.current?.click();
    }

    return (
        <div className="flex flex-col w-full gap-1">
            <input className="hidden" type="file" onChange={(e) => {handleFileChange(e)}} ref={inputRef}/>
            <label className="text-sm">{label}</label>
            {!fileName ? (
                <div className="flex justify-center items-center bg-white h-20 border-1 border-violet-300 rounded-lg z-50"
                    onDrop={handleDrop} 
                    onDragOver={(e) => {e.preventDefault()}}
                    onDragLeave={(e) => {e.preventDefault()}}
                >
                    <span className="text-neutral-400">
                        <span className="underline text-violet-600 cursor-pointer" onClick={handleInputClick}>Upload a file</span> or drag and drop here
                    </span>
                </div>
            ) : (
                <div className="flex justify-center items-center bg-white h-20 border-1 border-violet-300 rounded-lg w-full gap-2">
                    <span className="text-slate-900 font-semibold">
                        {fileName}
                    </span>
                    <span className="w-5 hover:cursor-pointer" onClick={handleRemove}>
                        <svg fill="#0f172a" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12zm8.036-4.024a.75.75 0 00-1.06 1.06L10.939 12l-2.963 2.963a.75.75 0 101.06 1.06L12 13.06l2.963 2.964a.75.75 0 001.061-1.06L13.061 12l2.963-2.964a.75.75 0 10-1.06-1.06L12 10.939 9.036 7.976z"></path></g></svg>
                    </span>
                </div>
            )}
            
        </div>
    )
}
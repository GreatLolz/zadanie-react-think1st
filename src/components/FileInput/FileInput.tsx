import { useRef, useState } from "react";
import type { FileInputProps } from "./types";
import CloseIcon from "../icons/CloseIcon";

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
                    <span className="hover:cursor-pointer" onClick={handleRemove}>
                        <CloseIcon />
                    </span>
                </div>
            )}
            
        </div>
    )
}
import { useRef, useState } from "react";
import type { FileInputProps } from "./types";
import FileDrop from "./FileDrop/FileDrop";

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
            <FileDrop fileName={fileName} onClick={handleInputClick} onDrop={handleDrop} onRemoveClick={handleRemove}/>
        </div>
    )
}
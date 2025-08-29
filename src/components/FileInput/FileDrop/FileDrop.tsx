import CloseIcon from "../../icons/CloseIcon"
import type { FileDropProps } from "./types"

export default function FileDrop({fileName, onDrop, onClick, onRemoveClick}: FileDropProps) {
    return(<>
        {!fileName ? (
            <div className="flex justify-center items-center bg-white h-20 border-1 border-violet-300 rounded-lg z-50"
                onDrop={onDrop} 
                onDragOver={(e) => {e.preventDefault()}}
                onDragLeave={(e) => {e.preventDefault()}}
            >
                <span className="text-neutral-400">
                    <span className="underline text-violet-600 cursor-pointer" onClick={onClick}>Upload a file</span> or drag and drop here
                </span>
            </div>
        ) : (
            <div className="flex justify-center items-center bg-white h-20 border-1 border-violet-300 rounded-lg w-full gap-2">
                <span className="text-slate-900 font-semibold">
                    {fileName}
                </span>
                <span className="hover:cursor-pointer" onClick={onRemoveClick}>
                    <CloseIcon />
                </span>
            </div>
        )}
        
    </>)
}
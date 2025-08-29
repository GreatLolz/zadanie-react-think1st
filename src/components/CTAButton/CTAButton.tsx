import type { CTAButtonProps } from "./types";

export default function CTAButton({text, onClick, disabled}: CTAButtonProps) {
    return(
        <button className="bg-violet-600 text-white font-semibold p-2 rounded-sm mt-8 hover:cursor-pointer hover:bg-violet-700 disabled:opacity-30 disabled:cursor-not-allowed" 
            type="submit"
            onClick={(e) => { e.preventDefault(); onClick() }}
            disabled={disabled}
        >
            {text}
        </button>
    )
}
export interface InputProps {
    label: string;
    value: string;
    type: string;
    onChange: (value: string) => void;
}

export interface SliderProps {
    label: string;
    value: number;
    min: number;
    max: number;
    step: number;
    onChange: (value: number) => void;
}

export interface FileInputProps {
    label: string;
    onChange: (file: File | null) => void;
}

export interface DateInputProps {
    label: string;
    onChange: (date: Date | null) => void;
}
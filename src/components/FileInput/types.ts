export interface FileInputProps {
    label: string;
    onChange: (file: File | null) => void;
}
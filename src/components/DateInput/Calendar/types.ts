export interface CalendarProps {
    date: Date | undefined,
    onSelect: (date: Date) => void;
    disabled: Date[]
}
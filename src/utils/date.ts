export function isSameDay(d1: Date, d2: Date): boolean {
    return (
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate()
    );
}

export function setHour(date: Date, hour: string): Date {
    const [h, m] = hour.split(":");

    const newDate = new Date(date)
    newDate.setHours(Number(h), Number(m), 0, 0)

    return newDate
}
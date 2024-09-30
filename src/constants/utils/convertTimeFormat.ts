export function convertTimeFormat(timeStr: string) {
    const [hours, minutes, seconds] = timeStr.split(':').map(Number);
    const totalMinutes = hours * 60 + minutes + Math.floor(seconds / 60);

    if (totalMinutes < 60) {
        return `${totalMinutes} mins`;
    } else if (totalMinutes < 1440) {
        const totalHours = (totalMinutes / 60).toFixed(1);
        return `${totalHours} hours`;
    } else {
        const totalDays = (totalMinutes / 1440).toFixed(1);
        return `${totalDays} days`;
    }
}
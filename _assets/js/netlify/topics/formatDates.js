export default function formatDates(date) {
    const newDate = date.split(" ")[0].split("-");
    return `${newDate[1]}/${newDate[2]}/${newDate[0]}`;
}
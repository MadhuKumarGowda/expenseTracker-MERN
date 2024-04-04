export function formatDate(timestamp: string){
    const date = new Date(parseInt(timestamp));
    const options = { day: "2-digit", month: "short", year: "numeric"};
    return date.toLocaleDateString("en-us", options);
}

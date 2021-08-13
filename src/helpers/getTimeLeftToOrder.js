export default function getTimeLeftToOrder(barClosingTime) {
    const today = new Date(Date.now());
    const date = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    const closingTime = new Date(`${month+1} ${date}, ${year} ${barClosingTime} GMT+02:00`);
    const hoursToClose = closingTime.getHours();
    const hoursToNow = today.getHours();

    if (hoursToNow < 10 || hoursToNow > 21) {
        return "We are closed.";
    } else {
        const hoursLeftToOrder = hoursToClose-hoursToNow;
        if (hoursLeftToOrder === 1) {
            const minutesToNow = today.getMinutes();
            const minutesLeftToOrder = 60-minutesToNow;
            return `You have ${minutesLeftToOrder} minutes left to order.`;
        }
        return `You have ${hoursLeftToOrder} hours left to order.`;
    }
}
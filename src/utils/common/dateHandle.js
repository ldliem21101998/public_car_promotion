export const dateToStringDDMMYYYY = (dateInput) => {
    const date = new Date(dateInput)
    const day = String(date.getDate()).padStart(2, "0"); // Get day and pad with 0 if necessary
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`
}
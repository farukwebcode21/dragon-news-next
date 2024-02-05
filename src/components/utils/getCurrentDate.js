export function showCurrentDate() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Adding 1 because month is zero-indexed
  const year = currentDate.getFullYear();
  return `${month}/${day}/${year}`;
}

// Call the function to display the current date

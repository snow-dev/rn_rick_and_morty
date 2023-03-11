/**
 * Format date to a readable format from string
 * @param date string
 * @returns string formatted date
 * */
export const formatDate = (date: string) => {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  const time = newDate.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return `${year}/${month}/${day}, at ${time}`;
};

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const WEEKDAYS_SHORT = WEEKDAYS.map(d => d.slice(0, 3) + '.');
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const parseTimestamp = timestamp => {
  const ts = new Date(timestamp);
  return {
    year: ts.getFullYear(),
    month: MONTHS[ts.getMonth()],
    shortMonth: MONTHS[ts.getMonth()].slice(0, 3) + '.',
    date: ts.getDate(),
    day: WEEKDAYS[ts.getDay()],
    shortDay: WEEKDAYS_SHORT[ts.getDay()],
  };
}

export const humanDate = timestamp => {
  if (!timestamp) return '?';
  const {shortDay, date, month} = parseTimestamp(timestamp);
  return `${shortDay} ${date} ${month}`;
}

export const humanDateBig = timestamp => {
  if (!timestamp) return '?';
  const {day, date, month, year} = parseTimestamp(timestamp);
  return `${day}, ${date} ${month} ${year}`;
}

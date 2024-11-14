export default function formatPublishDates(date) {
  const newDate = new Date(date.split(' ')[0].split('-'));
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const finalDate = new Intl.DateTimeFormat('en-US', options).format(newDate);
  return finalDate;
}

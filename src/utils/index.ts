export function calcTime(offset = 1) {
  const d = new Date();

  const utc = d.getTime() + d.getTimezoneOffset() * 60000;

  const nd = new Date(utc + 3600000 * offset);

  const hours = `0${nd.getHours()}`.slice(-2);
  const minutes = `0${nd.getMinutes()}`.slice(-2);

  return `${hours}:${minutes} WAT`;
}

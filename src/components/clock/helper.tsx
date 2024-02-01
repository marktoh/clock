type Time = string | number;
function getTime(): Array<Time> {
  const currentDate = new Date();
  const hours: Time = currentDate.getHours();
  const minutes: Time = currentDate.getMinutes();
  const seconds: Time = currentDate.getSeconds();
  const milliseconds: Time = currentDate.getMilliseconds();
  const formattedHour = hours < 10 ? "0" + hours : hours;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
  return [formattedHour, formattedMinutes, formattedSeconds, milliseconds];
}
function getColor(milliseconds: Time): string {
  const ms = Number(milliseconds);
  if (ms < 200) return "text-yellow-700";
  if (ms < 400) return "text-yellow-900";
  if (ms < 600) return "text-orange-900 font-light";
  if (ms < 800) return "text-red-700 font-light";
  if (ms < 999) return "text-red-900 font-light";
  return "";
}
function getTimeOfDay(hours: Time): string {
  const h = Number(hours);
  if (h === 0) return "Midnight";
  if (h < 6) return "Late Night";
  if (h < 8) return "Dawn";
  if (h < 11) return "Morning";
  if (h === 11) return "Almost Noon";
  if (h === 12) return "Noon";
  if (h > 12 && h < 17) return "Afternoon";
  if (h >= 17 && h < 19) return "Evening";
  if (h < 20) return "Dusk";
  if (h < 23) return "Night";
  if (h === 23) return "Almost Midnight";
  return "";
}

export { type Time, getTime, getColor, getTimeOfDay };

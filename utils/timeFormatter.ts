import dayjs from 'dayjs';

const formatTime = (diffInSeconds: number, unit: string) => {
  return `${Math.floor(diffInSeconds)}${unit}`;
};

const timeFormatter = (date: string) => {
  const diffInSeconds = dayjs().diff(date, 'seconds');

  if (diffInSeconds < 60) {
    return formatTime(diffInSeconds, '초');
  }

  const diffInMinutes = diffInSeconds / 60;
  if (diffInMinutes < 60) {
    return formatTime(diffInMinutes, '분');
  }

  const diffInHours = diffInMinutes / 60;
  if (diffInHours < 24) {
    return formatTime(diffInHours, '시간');
  }

  const diffInDays = diffInHours / 24;
  if (diffInDays < 31) {
    return formatTime(diffInDays, '일');
  }

  const diffInMonths = diffInDays / 30;
  if (diffInMonths < 12) {
    return formatTime(diffInMonths, '달');
  }

  const diffInYears = diffInMonths / 12;
  return formatTime(diffInYears, '년');
};

export default timeFormatter;

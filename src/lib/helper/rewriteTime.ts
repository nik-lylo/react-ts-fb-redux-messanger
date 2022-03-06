function minuteUpgrade(num: number): string {
  if (10 > num) {
    return `0${num}`;
  }
  return `${num}`;
}

function monthUpgrade(low_num: number): string {
  let num = low_num + 1;

  if (10 > num) {
    return `0${num}`;
  }
  return `${num}`;
}

type dateType = "min" | "hours" | "date" | "month" | "year";

export function rewriteTime(flag: dateType, timeNum: number): string {
  switch (flag) {
    case "min":
      return minuteUpgrade(timeNum);
    case "hours":
      return minuteUpgrade(timeNum);
    case "date":
      return minuteUpgrade(timeNum);
    case "month":
      return monthUpgrade(timeNum);
    case "year":
      return `${timeNum}`;
    default:
      return `{time}`;
  }
}

export function getUpgradeTime(date: Date) {
  const minute = rewriteTime("min", date.getMinutes());
  const hours = rewriteTime("hours", date.getHours());
  const day = rewriteTime("date", date.getDate());
  const month = rewriteTime("month", date.getMonth());
  const year = rewriteTime("year", date.getFullYear());
  return {
    time: `${hours}:${minute}`,
    fullTime: `${day}-${month}-${year}`,
  };
}

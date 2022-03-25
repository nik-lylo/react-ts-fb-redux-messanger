import { ITime } from "../models/IHelper";
import { rewriteTime } from "./rewriteTime";

export function dateFromNewDate(timestamp: Date | null): ITime {
  const newDate = timestamp || new Date();
  const date = `${rewriteTime("date", newDate.getDate())}-${rewriteTime(
    "month",
    newDate.getMonth()
  )}-${rewriteTime("year", newDate.getFullYear())}`;
  const time = `${rewriteTime("hours", newDate.getHours())}:${rewriteTime(
    "min",
    newDate.getMinutes()
  )}`;
  return { date, time };
}

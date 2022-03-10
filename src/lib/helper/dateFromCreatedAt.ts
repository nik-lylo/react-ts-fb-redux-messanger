import { rewriteTime } from "./rewriteTime";

export function dateFromCreatedAt(createdAt: any) {
  if (createdAt === null) return;
  const date: Date = new Date(createdAt.seconds * 1000);
  const time = `${rewriteTime("hours", date.getHours())}:${rewriteTime(
    "min",
    date.getMinutes()
  )}`;
  const fulldate = `${rewriteTime("date", date.getDay())}/${rewriteTime(
    "month",
    date.getMonth()
  )}/${rewriteTime("year", date.getFullYear())}`;

  return { time, fulldate };
}

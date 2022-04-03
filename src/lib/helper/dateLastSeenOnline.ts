export function dateLastSeenOnline(onlineDate: any): string {
  const dateNow: Date = new Date();
  const dateOnline: Date = new Date(onlineDate.seconds * 1000);

  if (dateNow.getFullYear() !== dateOnline.getFullYear()) {
    return `${dateNow.getFullYear() - dateOnline.getFullYear()} year ago`;
  }
  if (dateNow.getMonth() !== dateOnline.getMonth()) {
    return `${dateNow.getMonth() - dateOnline.getMonth()} month ago`;
  }
  if (dateNow.getDate() !== dateOnline.getDate()) {
    return `${dateNow.getDate() - dateOnline.getDate()} day ago`;
  }
  if (dateNow.getHours() !== dateOnline.getHours()) {
    return `${dateNow.getHours() - dateOnline.getHours()} hours ago`;
  }
  if (dateNow.getMinutes() !== dateOnline.getMinutes()) {
    return `${dateNow.getMinutes() - dateOnline.getMinutes()} minutes ago`;
  }
  return "1 minutes ago";
}

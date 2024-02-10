/* eslint-disable no-else-return */
export default function timeSince(date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  if (seconds < 60) {
    return "just now";
  } else if (seconds < 3600) {
    return "less than an hour ago";
  } else if (seconds < 86400) {
    return "less than a day ago";
  } else if (seconds < 604800) {
    return "less than a week ago";
  } else {
    return "less than a month ago";
  }
}

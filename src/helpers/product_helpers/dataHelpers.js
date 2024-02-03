export default function timeAgo(date) {
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  if (seconds < 60) {
    return "just now";
  }
  if (seconds < 3600) {
    return "less than an hour ago";
  }
  if (seconds < 86400) {
    return "less than a day ago";
  }
  if (seconds < 2592000) {
    return "less than a month ago";
  }

  if (seconds > 2592000) return "over a month ago";
}

import formattedDate from "./formattedDate";

export default function timeDifference(date) {
  const currentDate = new Date();
  const event = formattedDate(date);
  const eventDate = new Date(event);
  const millisecondsPerSecond = 1000;
  const millisecondsPerMinute = 60 * millisecondsPerSecond;
  const millisecondsPerHour = 60 * millisecondsPerMinute;
  const millisecondsPerDay = 24 * millisecondsPerHour;

  const timeDifference = Math.abs(currentDate - eventDate);

  const days = Math.floor(timeDifference / millisecondsPerDay);
  const hours = Math.floor(
    (timeDifference % millisecondsPerDay) / millisecondsPerHour
  );
  const minutes = Math.floor(
    (timeDifference % millisecondsPerHour) / millisecondsPerMinute
  );

  if (days > 1) {
    return `${days} days ago`;
  } else if (days === 1) {
    return "yesterday";
  } else if (hours > 0) {
    return `${hours} hours ago`;
  } else if (minutes > 0) {
    return `${minutes} minutes ago`;
  } else {
    return "just now";
  }
}

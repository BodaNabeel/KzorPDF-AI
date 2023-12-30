export default function (ISO_8601_DATE) {
  const dateObject = new Date(ISO_8601_DATE);

  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    dateObject
  );

  return formattedDate;
}

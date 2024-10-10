export const capitalizeWords = (string: string) => {
  return string
    .split(/[\s-_]+/) // Split by space, hyphen, or underscore
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

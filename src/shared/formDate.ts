export const formatDate = (data: Date) => {
  return data.toISOString().split("T")[0];
};

export const getFullDate = (data: Date) => {
  return data.toLocaleString("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
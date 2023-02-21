export const formatDate = (data: Date) => {
  return data.toISOString().split("T")[0];
};

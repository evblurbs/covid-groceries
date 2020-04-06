export const formatPhone = (phone: number | string): string => {
  return phone.toString().length > 10 ? `+${phone}` : `+1${phone}`;
};

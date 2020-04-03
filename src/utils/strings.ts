export const formatPhone = (phone: number): string => {
  return phone.toString().length > 10 ? `+${phone}` : `+1${phone}`;
};

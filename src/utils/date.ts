const convertDate = (date: number) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('en-US');
};

export default convertDate;

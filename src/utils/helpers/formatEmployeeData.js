const formatEmployeeData = (data) => {
  const formattedData = [];

  data.map((val) => {
    formattedData.push({ value: val?.id, label: val?.username });
  });

  return formattedData;
};

export default formatEmployeeData;

export const formatEmployeeDataWithDataInKey = (data) => {
  const formattedData = [];

  data.map((val) => {
    formattedData.push({
      value: JSON.stringify(val),
      label: val?.employeeName,
    });
  });

  return formattedData;
};

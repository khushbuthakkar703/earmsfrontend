const getBase64 = (file) => {
  return new Promise((resolve) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const result = reader.result;
      resolve(result);
    };

    // reader.onerror((err) => {
    //   reject(err);
    // });
  });
};

export default getBase64;

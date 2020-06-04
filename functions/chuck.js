const chunkArray = (arr, len) => {
  // init chunked arr
  const chunkedArr = [];

  // loop arr
  arr.forEach((val) => {
    const last = chunkedArr[chunkedArr.length - 1];

    // check if last and if last length is equal to the chunk len
    if (!last || last.length == len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  // return arr
  return chunkedArr;
};

module.exports = chunkArray;

export const genTimeArr = (format = '24hour') => {
  let timeArr = [];

  for (let i = 0; i < 25; i++) {
    let tItem = '';
    if (format === '24hour') {
      if (i < 10) {
        tItem = '0' + i + ':00';
      } else {
        tItem = i + ':00';
      }
    } else if (format === 'am/pm') {
      const j = i % 12;
      if (j < 10) {
        tItem = '0' + j;
      } else {
        tItem = j;
      }

      if (i < 12) {
        tItem += ':00 AM';
      } else {
        tItem += ':00 PM';
      }
    }

    timeArr.push(tItem);
  }

  return timeArr;
};

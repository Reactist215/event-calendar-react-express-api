/**
 * genTimeArr
 * @description Generate Array of Time Strings
 *
 * @param {string} format Format of Time to display
 */
export const genTimeArr = (format = '24hr') => {
  let timeArr = [];

  for (let i = 0; i < 25; i++) {
    let tItem = '';
    if (format === '24hr') {
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

/**
 * genTimeArr
 * @description Generate Array of Time Strings
 *
 * @param {string} method Method to display time
 */
export const genTimeArr = (method = '24hr') => {
  let timeArr = [];

  for (let i = 0; i < 24; i++) {
    let tItem = '';
    if (method === '24hr') {
      if (i < 10) {
        tItem = '0' + i + ':00';
      } else {
        tItem = i + ':00';
      }
    } else if (method === 'am/pm') {
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

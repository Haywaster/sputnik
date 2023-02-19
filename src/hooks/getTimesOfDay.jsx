const dataAndTime = new Date();
const hour = dataAndTime.getHours();

const getTimesOfDay = hour => {
  let timesOfDay = '';
  for (let i = 0; i <= 24; i++) {
    if (hour === i) {
      if (i >= 0 && i < 6) timesOfDay = 'night';
      if (i >= 6 && i < 12) timesOfDay = 'morning';
      if (i >= 12 && i < 17) timesOfDay = 'day';
      if (i >= 17 && i < 24) timesOfDay = 'evening';
    }
  }
  return timesOfDay;
};

export const timesOfDay = getTimesOfDay(hour);

const timeLeft = (function(argument) {

  const pretty = (startTimeStamp, goalTimeStamp) => {
    const startDate = new Date(startTimeStamp * 1000);
    const goalDate = new Date(goalTimeStamp * 1000);

    let secondsDiff,
        minutesDiff,
        hoursDiff,
        daysDiff,
        monthsDiff,
        yearsDiff;

    yearsDiff = dateFns.getYear(goalDate) - dateFns.getYear(startDate);
    monthsDiff = dateFns.getMonth(goalDate) - dateFns.getMonth(startDate);
    daysDiff = dateFns.getDate(goalDate) - dateFns.getDate(startDate);
    hoursDiff = dateFns.getHours(goalDate) - dateFns.getHours(startDate);
    minutesDiff = dateFns.getMinutes(goalDate) - dateFns.getMinutes(startDate);
    secondsDiff = dateFns.getSeconds(goalDate) - dateFns.getSeconds(startDate);

    if (secondsDiff < 0) {
      secondsDiff = secondsDiff + 60;
      minutesDiff = minutesDiff - 1;
    }

    if (minutesDiff < 0) {
      minutesDiff = minutesDiff + 60;
      hoursDiff = hoursDiff - 1;
    }

// debugger
    return {
      years: yearsDiff,
      months: monthsDiff,
      days: daysDiff,
      hours: hoursDiff,
      minutes: minutesDiff,
      seconds: secondsDiff
    };
  };

  return {
    pretty
  }
})();

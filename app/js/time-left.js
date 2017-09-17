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
    // daysDiff = dateFns.differenceInCalendarDays(goalDate, startDate)
    daysDiff = dateFns.getDate(goalDate) - dateFns.getDate(startDate);
    hoursDiff = dateFns.getHours(goalDate) - dateFns.getHours(startDate);
    minutesDiff = dateFns.getMinutes(goalDate) - dateFns.getMinutes(startDate);
    secondsDiff = dateFns.getSeconds(goalDate) - dateFns.getSeconds(startDate);

debugger

    if (secondsDiff < 0) {
      secondsDiff = secondsDiff + 60;
      minutesDiff = minutesDiff - 1;
    }

    if (minutesDiff < 0) {
      minutesDiff = minutesDiff + 60;
      if (hoursDiff !== 0) {
        hoursDiff = hoursDiff - 1;
      }
    }

    if (hoursDiff < 0) {
      hoursDiff = hoursDiff + 24;

      if (daysDiff !== 0) {
        daysDiff = daysDiff - 1;
      }
    }

    if (daysDiff < 0) {
      // there is no fixed amount of days for each month, therfor
      // the days to add to the negative amount must be calculated using
      // the last month before the goal month
      const lastMonthBeforeGoal = dateFns.subMonths(goalDate, 1);
      const numberOfDaysInMonth = dateFns.getDaysInMonth(lastMonthBeforeGoal);
      daysDiff = daysDiff + numberOfDaysInMonth;

      if (monthsDiff !== 0) {
        monthsDiff = monthsDiff - 1;
      }
    }

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

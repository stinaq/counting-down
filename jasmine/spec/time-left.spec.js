describe("Time left", function() {
  describe('when there is no time between the dates', function() {
    // Tuesday, 5 September 2017 21:46:50 GMT+02:00
    var startDate = 1504640810;
    // Tuesday, 5 September 2017 21:46:50 GMT+02:00
    var goalDate = 1504640810;
    var result;

    beforeEach(() => {
      result = timeLeft.pretty(startDate, goalDate);
    });

    it('should have 0 years, 0 months, 0 days, 0 hours, 0 minutes, 0 seconds', function() {
      expect(result).toEqual({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      });
    });
  });
  fdescribe('when the goal date is before the start date', function() {
    // Tuesday, 19 September 2017 17:19:07 GMT+02:00
    var startDate = 1505834347;
    // Tuesday, 19 September 2017 17:19:04 GMT+02:00
    var goalDate = 1505834344;
    var result;

    beforeEach(() => {
      result = timeLeft.pretty(startDate, goalDate);
    });
    it('should have property saying date has passed', function() {
      expect(result.isPassed).toBe(true);
    });
  });
  describe('when the goal date is after the start date', function() {

  });
  describe('when there are multiple seconds between the dates', function() {
    describe('and the seconds are inside one minute', () => {
      var startDate = 1504549527;
      var goalDate = 1504549532;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });

      it('should have 0 years, 0 months, 0 days, 0 hours, 0 minutes, 5 seconds', function() {
        expect(result).toEqual({
          years: 0,
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 5
        });
      });

    });
    describe('when the seconds overlap into a different minute', function() {
      // Tuesday, 5 September 2017 21:46:50 GMT+02:00
      var startDate = 1504640810;
      // Tuesday, 5 September 2017 21:47:10 GMT+02:00
      var goalDate = 1504640830;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });

      it('should have 0 years, 0 months, 0 days, 0 hours, 0 minutes, 20 seconds', function() {
        expect(result).toEqual({
          years: 0,
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 20
        });
      });
    });

  });
  describe('when there are multiple minutes between the dates', function() {
    describe('and the minutes and seconds are both inside one hour and one minute', function() {
      // Tuesday, 5 September 2017 22:35:30 GMT+02:00
      var startDate = 1504643730;
      // Tuesday, 5 September 2017 22:47:53 GMT+02:00
      var goalDate = 1504644473;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });
      it('should have 0 years, 0 months, 0 days, 0 hours, 12 minutes, 23 seconds', function() {
        expect(result).toEqual({
          years: 0,
          months: 0,
          days: 0,
          hours: 0,
          minutes: 12,
          seconds: 23
        });
      });
    });
    describe('and the minutes and seconds are both overlapping into a different minute and hour', function() {
      // Tuesday, 5 September 2017 11:38:11 GMT+02:00
      var startDate = 1504604291;
      // Tuesday, 5 September 2017 12:11:03 GMT+02:00
      var goalDate = 1504606263;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });
      it('should have 0 years, 0 months, 0 days, 0 hours, 32 minutes, 52 seconds', function() {
        expect(result).toEqual({
          years: 0,
          months: 0,
          days: 0,
          hours: 0,
          minutes: 32,
          seconds: 52
        });
      });
    });
    describe('the minutes are overlapping into another hour, but the seconds are not', function() {
      // Wednesday, 6 September 2017 20:52:57 GMT+02:00
      var startDate = 1504723977;
      // Wednesday, 6 September 2017 21:03:59 GMT+02:00
      var goalDate = 1504721039;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });
      it('should have 0 years, 0 months, 0 days, 0 hours, 11 minutes, 2 seconds', function() {
        expect(result).toEqual({
          years: 0,
          months: 0,
          days: 0,
          hours: 0,
          minutes: 11,
          seconds: 2
        });
      });
    });
    describe('the seconds are overlapping into another minute, but the minutes are not', function() {
      // Wednesday, 6 September 2017 21:46:23 GMT+02:00
      var startDate = 1504727183;
      // Wednesday, 6 September 2017 21:56:09 GMT+02:00
      var goalDate = 1504727769;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });
      it('should have 0 years, 0 months, 0 days, 0 hours, 9 minutes, 46 seconds', function() {
        expect(result).toEqual({
          years: 0,
          months: 0,
          days: 0,
          hours: 0,
          minutes: 9,
          seconds: 46
        });
      });
    });

  });

  describe('when there are multiple hours between the dates', function() {
    describe('when seconds, minutes and hours don\'t overlap into other seconds, minutes and hours', function() {
      // Wednesday, 6 September 2017 17:13:41 GMT+02:00
      var startDate = 1504710821;
      // Wednesday, 6 September 2017 20:35:49 GMT+02:00
      var goalDate = 1504722949;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });

      it('should have 0 years, 0 months, 0 days, 3 hours, 22 minutes, 8 seconds', function() {
        expect(result).toEqual({
          years: 0,
          months: 0,
          days: 0,
          hours: 3,
          minutes: 22,
          seconds: 8
        });
      });
    });
    describe('when the hours overlap into another day, but not the other parts', function() {
      // Wednesday, 6 September 2017 22:24:09 GMT+02:00
      var startDate = 1504729449;
      // Thursday, 7 September 2017 09:24:09 GMT+02:00
      var goalDate = 1504769049;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });

      it('should have 0 years, 0 months, 0 days, 11 hours, 0 minutes, 0 seconds', function() {
        expect(result).toEqual({
          years: 0,
          months: 0,
          days: 0,
          hours: 11,
          minutes: 0,
          seconds: 0
        });
      });
    });
    describe('when the hours and minutes overlap into another day and hours, but not the seconds', function() {
      // Thursday, 7 September 2017 21:14:16 GMT+02:00
      var startDate = 1504811656;
      // Friday, 8 September 2017 05:07:19 GMT+02:00
      var goalDate = 1504840039;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });

      it('should have 0 years, 0 months, 0 days, 7 hours, 53 minutes, 3 seconds', function() {
        expect(result).toEqual({
          years: 0,
          months: 0,
          days: 0,
          hours: 7,
          minutes: 53,
          seconds: 3
        });
      });
    });
    describe('when all the parts overlap', function() {
      // Sunday, 10 September 2017 11:48:31 GMT+02:00
      var startDate = 1505036911;
      // Monday, 11 September 2017 08:22:12 GMT+02:00
      var goalDate = 1505110932;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });

      it('should have 0 years, 0 months, 0 days, 20 hours, 33 minutes, 41 seconds', function() {
        expect(result).toEqual({
          years: 0,
          months: 0,
          days: 0,
          hours: 20,
          minutes: 33,
          seconds: 41
        });
      });
    });
  });
  describe('When there are multiple days between the dates', function() {
    describe('and none of the parts are overlapping into the next day/hour and so on', function() {
      // Tuesday, 12 September 2017 19:57:36 GMT+02:00
      var startDate = 1505239056;
      // Wednesday, 13 September 2017 23:58:45 GMT+02:00
      var goalDate = 1505339925;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });

      it('should have 0 years, 0 months, 1 days, 4 hours, 1 minutes, 9 seconds', function() {
        expect(result).toEqual({
          years: 0,
          months: 0,
          days: 1,
          hours: 4,
          minutes: 1,
          seconds: 9
        });
      });
    });
    describe('when the days are overlapping into another month', function() {
      // Tuesday, 12 September 2017 19:57:36 GMT+02:00
      var startDate = 1505239056;
      // Monday, 9 October 2017 23:58:45 GMT+02:00
      var goalDate = 1507586325;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });

      it('should have 0 years, 0 months, 27 days, 4 hours, 1 minutes, 9 seconds', function() {
        expect(result).toEqual({
          years: 0,
          months: 0,
          days: 27,
          hours: 4,
          minutes: 1,
          seconds: 9
        });
      });
    });
    describe('when the days and hours are overlapping into another month and day', function() {
      // Sunday, 14 May 2017 21:36:33 GMT+02:00
      var startDate = 1494790593;
      // Friday, 2 June 2017 06:42:55 GMT+02:00
      var goalDate = 1496378575;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });

      it('should have 0 years, 0 months, 18 days, 4 hours, 6 minutes, 22 seconds', function() {
        expect(result).toEqual({
          years: 0,
          months: 0,
          days: 18,
          hours: 9,
          minutes: 6,
          seconds: 22
        });
      });
    });
    describe('when the days, hours, minutes are overlapping into another month, day, hour', function() {
      // Saturday, 25 February 2017 21:13:04 GMT+01:00
      var startDate = 1488053584;
      // Tuesday, 7 March 2017 17:43:08 GMT+01:00
      var goalDate = 1488904988;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });

      it('should have 0 years, 0 months, 9 days, 20 hours, 30 minutes, 4 seconds', function() {
        expect(result).toEqual({
          years: 0,
          months: 0,
          days: 9,
          hours: 20,
          minutes: 30,
          seconds: 4
        });
      });
    });
    describe('when days and seconds overlap', function() {
      // Thursday, 26 July 2001 20:30:40 GMT+02:00
      var startDate = 996172240;
      // Tuesday, 7 August 2001 21:40:20 GMT+02:00
      var goalDate = 997213220;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });

      it('should have 0 years, 0 months, 12 days, 1 hours, 9 minutes, 40 seconds', function() {
        expect(result).toEqual({
          years: 0,
          months: 0,
          days: 12,
          hours: 1,
          minutes: 9,
          seconds: 40
        });
      });
    });
    describe('when all the parts overlap', function() {
      // Friday, 17 November 2017 22:06:19 GMT+01:00
      var startDate = 1510952779;
      // Tuesday, 5 December 2017 04:02:10 GMT+01:00
      var goalDate = 1512442930;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });

      it('should have 0 years, 0 months, 17 days, 5 hours, 55 minutes, 51 seconds', function() {
        expect(result).toEqual({ years: 0, months: 0, days: 17, hours: 5, minutes: 55, seconds: 51 });
      });
    });
  });
  describe('When there are multiple months between the dates', function() {
    describe('when the parts are all whole ', function() {
      // Thursday, 7 August 1986 21:40:20 GMT+02:00
      var startDate = 523827620;
      // Sunday, 9 November 1986 22:45:29 GMT+01:00
      var goalDate = 531956729;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });

      it('should have 0 years, 3 months, 2 days, 1 hours, 5 minutes, 9 seconds', function() {
        expect(result).toEqual({ years: 0, months: 3, days: 2, hours: 2, minutes: 5, seconds: 9 });
      });
    });
    describe('when the months overlap into another year', function() {
      // Thursday, 20 November 1986 19:53:37 GMT+01:00
      var startDate = 532896817;
      // Friday, 20 February 1987 19:53:37 GMT+01:00
      var goalDate = 540845617;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });

      it('should still have 0 years, and correct number of months', function() {
        expect(result).toEqual({ years: 0, months: 3, days: 0, hours: 0, minutes: 0, seconds: 0 });
      });
    });
    describe('when all the parts overlap into the next part', function() {
      // Thursday, 2 November 1978 20:03:15 GMT+01:00
      var startDate = 278881395;
      // Thursday, 1 February 1979 11:02:05 GMT+01:00
      var goalDate = 286711325;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });

      it('should still have 0 years, and correct number of months', function() {
        expect(result).toEqual({ years: 0, months: 2, days: 29, hours: 14, minutes: 58, seconds: 50 });
      });
    });
  });
  describe('when there are multiple years between the dates', function() {
    describe('when all the parts are within its respective part', function() {
      // Saturday, 3 February 1979 11:02:05 GMT+01:00
      var startDate = 286884125;
      // Saturday, 6 May 1995 14:05:10 GMT+02:00
      var goalDate = 799761910;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });

      it('should show correct number of years as well as the other parts', function() {
        expect(result).toEqual({ years: 16, months: 3, days: 3, hours: 2, minutes: 3, seconds: 5 });
      });
    });
    describe('when all the parts are overlapping into next part', function() {
      // Saturday, 6 May 1995 14:05:10 GMT+02:00
      var startDate = 799761910;
      // Friday, 3 March 2017 08:02:07 GMT+01:00
      var goalDate = 1488524527;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });

      it('should show correct number of years as well as the other parts', function() {
        expect(result).toEqual({ years: 21, months: 9, days: 24, hours: 18, minutes: 56, seconds: 57 });
      });
    });
  });
  describe('When the dates have different time zones', function() {
    describe('goal date is winter time and start date is summer time', function() {
      // Tuesday, 18 September 1917 21:03:15 GMT+02:00
      var startDate = -1649998605;
      // Saturday, 2 March 1918 20:03:15 GMT+01:00
      var goalDate = -1635742605;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });

      it('should normalize the hours', function() {
        expect(result).toEqual({ years: 0, months: 5, days: 12, hours: 0, minutes: 0, seconds: 0 });
      });
    });
    describe('goal date is summer time and start date is winter time', function() {
      // Tuesday, 2 March 1937 20:03:15 GMT+01:00
      var startDate = -1036126605;
      // Wednesday, 2 June 1937 21:03:15 GMT+02:00
      var goalDate = -1028177805;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });

      it('should normalize the hours', function() {
        expect(result).toEqual({ years: 0, months: 3, days: 0, hours: 0, minutes: 0, seconds: 0 });
      });
    });
  });

});

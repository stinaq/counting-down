describe("Time left", function() {
  describe('when there is only seconds between the dates', function() {
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
  describe('when there is minutes and seconds between', function() {
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

  describe('when there is hours, minutes and seconds between the dates', function() {
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
  describe('When there are days, hours, minutes and seconds between the dates', function() {
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
    fdescribe('when the days are overlapping into another month', function() {
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
  });


});

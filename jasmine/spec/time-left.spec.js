describe("Time left", function() {
  describe('when there is only seconds between the dates', function() {
    describe('and the seconds are inside one minute', () => {
      var startDate = 1504549527;
      var goalDate = 1504549532;
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
    fdescribe('and the minutes and seconds are both overlapping into a different minute and hour', function() {
      // Tuesday, 5 September 2017 11:38:11 GMT+02:00
      var startDate = 1504604291;
      // Tuesday, 5 September 2017 12:11:03 GMT+02:00
      var goalDate = 1504606263;
      var result;

      beforeEach(() => {
        result = timeLeft.pretty(startDate, goalDate);
      });
      it('should have 0 years, 0 months, 0 days, 0 hours, 33 minutes, 52 seconds', function() {
        expect(result).toEqual({
          years: 0,
          months: 0,
          days: 0,
          hours: 0,
          minutes: 33,
          seconds: 52
        });
      });
    });

    var startDate = 1504552410;
    var goalDate = 1504554462;
    var result;

    beforeEach(() => {
      result = timeLeft.pretty(startDate, goalDate);
    });

    it('should have 0 years, 0 months, 0 days, 0 hours, 34 minutes, 12 seconds', function() {
      expect(result).toEqual({
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 34,
        seconds: 12
      });
    });
  });
  xdescribe('when there is 16 hours, 45 minutes and 25 seconds between the dates', function() {
    var startDate = 1504553162;
    var goalDate = 1504595487;
    var result;

    beforeEach(() => {
      result = timeLeft.pretty(startDate, goalDate);
    });

    it('should have 0 years, 0 months, 0 days, 16 hours, 45 minutes, 25 seconds', function() {
      expect(result).toEqual({
        years: 0,
        months: 0,
        days: 0,
        hours: 16,
        minutes: 45,
        seconds: 25
      });
    });
  });

});

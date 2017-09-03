describe("Time left", function() {

  it('should have seconds', function() {

    expect(timeLeft.pretty(1, 4)).toEqual({seconds:5});
  });
});

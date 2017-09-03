const timeLeft = (function(argument) {
  // var dateFns = {getSeconds:function() {return 0;}}
  // const dateFns = require('date-fns/get_seconds');


  const pretty = (startSeconds, goalSeconds) => {
    let secondsDiff,
      minutesDiff,
      hoursDiff,
      monthsDiff,
      yearsDiff

    secondsDiff = dateFns.getSeconds(goalSeconds);

    return {seconds:5};
  };

  return {
    pretty
  }
})();

module.exports = timeLeft;

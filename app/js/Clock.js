const Clock = (function(argument) {
  const id = 'TICKING_CLOCK';
  let tickerInterval;

  const startTick = (mainElement) => {
    const clock = mainElement.querySelector('#clock');
    const goal = window.location.hash.substr(1);

    const tick = () => {
      const secondsLeft = goal - Math.floor(Date.now() / 1000);
      if (secondsLeft < 0) {
        clock.textContent = 'Has passed';
      } else {
        clock.textContent = secondsLeft;
      }
    };

    tick();
    clearInterval(tickerInterval);
    tickerInterval = setInterval(tick, 1000);
  };

  const stopTick = () => {
    clearInterval(tickerInterval);
  };

  return {
    id: id,
    condition: () => {
      const hash = window.location.hash.substr(1);
      const isNumeric = !isNaN(hash);
      const isSomething = hash !== '';

      /* Show if everything after the hash is a number,
         meaning it could be timestamp to show */
      return isNumeric && isSomething;
    },
    show: () => {
      const clockView = document.getElementById(id);
      startTick(clockView);
      clockView.style.display = 'inherit';
    },
    hide: () => {
      const clockView = document.getElementById(id);
      clockView.style.display = 'none';
    }
  }
})();

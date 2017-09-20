const TimePicker = (function(argument) {
  const id = 'TIME_PICKER';
  const startCountdown = () => {
    // debugger
    const date = document.querySelector('#TIME_PICKER_data-input').value;
    const timeStamp = Math.floor(new Date(date) / 1000);
    window.location.hash = timeStamp;
  };

  return {
    id: id,
    condition: () => {
      const hash = window.location.hash.substr(1);
      /* Show if there is no hash */
      return hash === '';
    },
    show: () => {
      const timePickerView = document.getElementById(id);
      timePickerView.style.display = 'inherit';

      const startButton = document.querySelector('#TIME_PICKER_start-button');
      startButton.addEventListener('click', startCountdown);

      flatpickr("#TIME_PICKER_data-input", {
        enableTime: true,
        time_24hr: true,
        minDate: "today"
      });
    },
    hide: () => {
      const timePickerView = document.getElementById(id);
      timePickerView.style.display = 'none';
    }
  }
})();

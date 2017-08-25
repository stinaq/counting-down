const TimePicker = (function(argument) {
  const id = 'TIME_PICKER';

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
      startButton.addEventListener('click', () => {
        const date = document.querySelector('#TIME_PICKER_data-input').value;
        const timeStamp = Math.floor(new Date(date) / 1000);
        window.location.hash = timeStamp;
      });
    },
    hide: () => {
      const timePickerView = document.getElementById(id);
      timePickerView.style.display = 'none';
    }
  }
})();

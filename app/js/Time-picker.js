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
    },
    hide: () => {
      const timePickerView = document.getElementById(id);
      timePickerView.style.display = 'none';
    }
  }
})();

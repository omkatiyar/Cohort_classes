function displayTerminalClock() {
    function updateClock() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0'); // adds the padding such as hour was suppose 1
      // so instead of displaying hour as 1 it will display 01
      const minutes = now.getMinutes().toString().padStart(2, '0'); // same for min
      const seconds = now.getSeconds().toString().padStart(2, '0'); // same for sec
      const timeString = `${hours}:${minutes}:${seconds}`;
      console.log(timeString);
    }
  
    updateClock();
    setInterval(updateClock, 1000);
  }
  
  displayTerminalClock();
  
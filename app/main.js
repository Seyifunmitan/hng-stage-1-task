//function to get current day

function getCurrentDay() {
   let day
   switch (new Date().getDay()) {
      case 0:
         day = "Sunday";
         break;
      case 1:
         day = "Monday";
         break;
      case 2:
         day = "Tuesday";
         break;
      case 3:
         day = "Wednesday";
         break;
      case 4:
         day = "Thursday";
         break;
      case 5:
         day = "Friday";
         break;
      case 6:
         day = "Saturday";
   }

   return day
}

//current day
const currentDayElement = document.getElementById('currentDay')
const day = getCurrentDay()
currentDayElement.innerHTML = `current day of the Week: ${day.toLocaleUpperCase()}`



//get current UTC Time
//get currentUTC

function loadCurrentUTC() {
   const currentUTCElement = document.getElementById('currentUtc')
   const currentUTC = new Date();

   let hour = currentUTC.getUTCHours()
   let minutes = currentUTC.getUTCMinutes()
   let seconds = currentUTC.getUTCSeconds()
   
   const _currentUTC = `${hour}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`

   currentUTCElement.innerHTML = `Current UTC: ${_currentUTC}`
}


loadCurrentUTC()
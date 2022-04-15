//days of the week (this hurt to do.)
function weekday() {
    let date = new Date();
    let dayOfWeekNumber = date.getDay();
    let nameOfDay;
    switch(dayOfWeekNumber){
        case 0: 
            nameOfDay = 'Sunday';
            break;
        case 1:
            nameOfDay = 'Monday';
            break;
        case 2:
            nameOfDay = 'Tuesday';
            break;
        case 3:
            nameOfDay = 'Wednesday';
            break;
        case 4:
            nameOfDay = 'Thursday';
            break;
        case 5:
            nameOfDay = 'Friday';
            break;
        case 6:
            nameOfDay = 'Saturday';
            break;
    };
    document.getElementById('day').innerHTML = `${nameOfDay}`;
};

//Displays Clock (converts to american instead of military so I can read)
function displayClock() {
   var time = new Date();
   var hrs = time.getHours();
   var min = time.getMinutes();
   var sec = time.getSeconds();
   if (hrs > 12) {
       hrs = hrs + 0;
   }
   if (hrs == 0) {
       hrs = 12;
   }
   if(hrs < 10) {
       hrs = '0' + hrs;
   }
   if (min < 10) {
       min = '0' + min;
   }
   if (sec < 10) {
       sec = '0' + sec;
   }
   var time = hrs + ':' + min;
   time = time.split(':'); // convert to array
   // fetch
   var hours = Number(time[0]);
   var minutes = Number(time[1]);
   var seconds = Number(time[2]);
   
   // calculate
   var timeValue;
   if (hours > 0 && hours <= 12) {
     timeValue= "" + hours;
   } else if (hours > 12) {
     timeValue= "" + (hours - 12);
   } else if (hours == 0) {
     timeValue= "12";
   }
   timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
   timeValue += (hours >= 12) ? " PM" : " AM";  // get AM/PM
   document.getElementById('time').innerHTML = timeValue;
}

//Gets Date in MM/DD/YYYY format
function date() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById('date').innerHTML = today;
};
//Intervals
setInterval(displayClock, 1000);
setInterval(date, 1000);
setInterval(weekday, 1000);
    
    